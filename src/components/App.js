import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';
import { bindActionCreators } from 'redux';
import * as repoActions from '../actions/repoActions';
import * as searchFormActions from '../actions/searchFormActions';
import * as errorsActions from '../actions/errorsActions';
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
        setTimeout(() => {
          this.props.actions.errorsActions.deleteErrors();
        }, 1000);
      })
      .catch(error => {
        let messages = [];
        if (error.message === 'Network Error') {
          messages.push(
            'You appear to be offline.',
            'Please check your internet connection.'
          );
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.message.includes('API rate limit exceeded')
        ) {
          messages.push(
            "I'm sorry, but GitHub is rate limited and the limit has been exceeded.",
            'Please wait a minute before resubmitting the query.'
          );
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          messages.push(error.response.data.message);
        } else {
          messages.push(String(error));
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
          lastSearchParameters={state.repos.lastQuery}
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
