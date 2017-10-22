import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';
import { bindActionCreators } from 'redux';
import * as repoActions from '../actions/repoActions';
import * as searchFormActions from '../actions/searchFormActions';
import * as errorsActions from '../actions/errorsActions';
import utils from '../utils/';
import './App.css';
import Nav from './Nav';
import Main from './Main';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.queryGitHub = this.queryGitHub.bind(this);
    this.debounceQueryGitHub = debounce(500, this.debounceQueryGitHub);
    this.updateSearchTextInput = this.updateSearchTextInput.bind(this);
    this.updateSearchType = this.updateSearchType.bind(this);
  }

  saveResultsToLocalStorage() {
    let localStore = localStorage;
    if (localStore) {
      let gitUp;
      const {
        totalCount,
        items,
        lastUpdated,
        lastUpdatedLocal,
        lastQuery,
      } = this.props.state.repos;
      const {
        searchType,
        keyWords,
        language,
      } = this.props.state.repos.lastQuery;
      let searchKey = JSON.stringify({
        searchType: searchType,
        keyWords: keyWords.toLowerCase(),
        language: language.toLowerCase(),
      });
      if (localStore.gitUp) {
        gitUp = JSON.parse(localStore.gitUp);
        if (!gitUp.savedResults) {
          gitUp.savedResults = {};
        }
      } else {
        gitUp = {
          repos: {
            totalCount,
            items,
            lastUpdated,
            lastUpdatedLocal,
          },
          searchForm: lastQuery,
          savedResults: {},
        };
      }
      gitUp.savedResults[searchKey] = {
        totalCount,
        items,
        lastUpdated,
        lastUpdatedLocal,
      };
      gitUp.searchForm = { searchType, keyWords, language };
      localStorage.gitUp = JSON.stringify(gitUp);
    }
  }

  saveOfflineStateToLocalStorage() {
    let localStore = localStorage;
    if (localStore) {
      let gitUp;
      const { repos, searchForm } = this.props.state;
      const {
        totalCount,
        items,
        lastUpdated,
        lastUpdatedLocal,
        lastQuery,
      } = repos;

      if (localStore.gitUp) {
        gitUp = JSON.parse(localStore.gitUp);
      } else {
        gitUp = {};
      }
      gitUp.searchForm = searchForm;
      gitUp.repos = {
        totalCount,
        items,
        lastUpdated,
        lastUpdatedLocal,
        lastQuery,
      };
      localStorage.gitUp = JSON.stringify(gitUp);
    }
  }

  pullResultsFromLocalStorage(searchParams) {
    let { searchType, keyWords, language } = searchParams;
    if (localStorage && localStorage.gitUp) {
      let searchKey = JSON.stringify({
        searchType: searchType,
        keyWords: keyWords.toLowerCase(),
        language: language.toLowerCase(),
      });
      let repos = JSON.parse(localStorage.gitUp).savedResults[searchKey];
      if (repos) {
        repos.lastQuery = searchParams;
        return repos;
      }
    }
    let now = new Date();
    let lastUpdated = now.getTime();
    let lastUpdatedLocal = utils.localDateTime(now);
    return {
      totalCount: null,
      items: [],
      lastUpdated,
      lastUpdatedLocal,
      lastQuery: searchParams,
    };
  }
  queryGitHub(searchForm = this.props.state.searchForm) {
    let { searchType, keyWords, language } = searchForm;
    this.props.actions.repoActions
      .loadRepos(searchType, keyWords, language)
      .then(res => {
        this.props.actions.errorsActions.clearErrorsDisplay(
          this.props.state.errors
        );
      })
      .then(res => {
        this.saveResultsToLocalStorage();
      })
      .then(res => {
        setTimeout(() => {
          this.props.actions.errorsActions.deleteErrors();
        }, 1000);
      })
      .catch(error => {
        // console.log('error', error);
        // console.log('error', error.message);
        // console.log('error', error.response);
        this.saveOfflineStateToLocalStorage();
        let messages = [];
        if (error.message === 'Network Error') {
          messages.push(
            'You appear to be offline.',
            'Please check your internet connection.'
          );
        } else if (error.response.status === 422) {
          messages.push(
            "I'm sorry, but GitHub doesn't recognise the keyword(s) and/or language.",
            'Please check for spelling errors.'
          );
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          if (error.response.data.message.includes('API rate limit exceeded')) {
            messages.push(
              "I'm sorry, but GitHub is rate limited and the limit has been exceeded.",
              'Please wait a minute before resubmitting the query.'
            );
          } else {
            messages.push(error.response.data.message);
          }
        } else {
          messages.push(String(error));
        }
        let savedSearch = this.pullResultsFromLocalStorage(searchForm);
        if (savedSearch) {
          this.props.actions.repoActions.loadSavedData(savedSearch);
          if (this.props.state.repos.items.length > 0) {
            messages.push(
              'Results from the last time you did this search are being displayed.'
            );
          }
        }
        this.props.actions.errorsActions.updateErrors({
          messages: messages,
          removalInProgress: false,
        });
      });
  }
  debounceQueryGitHub() {
    this.queryGitHub();
  }
  updateSearchTextInput(e) {
    let searchForm = this.props.state.searchForm;
    searchForm[e.target.id] = e.target.value;
    this.props.actions.searchFormActions.updateSearchForm(searchForm);
    this.debounceQueryGitHub();
  }
  updateSearchType(searchType) {
    let searchForm = this.props.state.searchForm;
    searchForm.searchType = searchType;
    this.props.actions.searchFormActions.updateSearchForm(searchForm);
    this.queryGitHub(searchForm);
  }
  componentWillMount() {
    let { repos, searchForm } = this.props.state;
    if (typeof repos.lastUpdated === 'number') {
      this.queryGitHub(searchForm);
    }
  }
  render() {
    const state = this.props.state;
    return (
      <div className="App">
        <Nav queryGitHub={this.queryGitHub} />

        <Main
          errors={state.errors}
          ajaxCallsInProgress={state.ajaxCalls.callsInProgress}
          searchForm={state.searchForm}
          updateSearchTextInput={this.updateSearchTextInput}
          updateSearchType={this.updateSearchType}
          cards={state.repos.items}
          lastSearch={state.repos.lastQuery}
          lastUpdated={state.repos.lastUpdated}
          lastUpdatedLocal={state.repos.lastUpdatedLocal}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { state: state };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      repoActions: bindActionCreators(repoActions, dispatch),
      searchFormActions: bindActionCreators(searchFormActions, dispatch),
      errorsActions: bindActionCreators(errorsActions, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
