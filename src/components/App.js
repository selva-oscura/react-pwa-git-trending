import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';
import { bindActionCreators } from 'redux';
import * as repoActions from '../actions/repoActions';
import * as errorsActions from '../actions/errorsActions';
import './App.css';
import Nav from './Nav';
import Main from './Main';

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.queryGitHub = this.queryGitHub.bind(this);
    this.debounceQueryGitHub = debounce(500, this.debounceQueryGitHub);
    this.updateSearchTextInput = this.updateSearchTextInput.bind(this);
    this.updateSearchType = this.updateSearchType.bind(this);
    // console.log('this.props.children', this.props.children);
    // console.log('props.children', props.children);
    // console.log('this.state', this.state)
  }
  delay(t){
    console.log('hitting delay (setTimeout)');
    return new Promise((resolve) => {
      setTimeout(resolve, t)
    });
  }
  queryGitHub(){
    let { searchType, keyWords, language } = this.props.state.searchForm;
    console.log('in queryGitHub');
    this.props.actions.repoActions.loadRepos(
      searchType, keyWords, language
    ).then(res => {
      let errors = this.props.state.errors;
      let now = Math.floor(new Date().getTime()/1000);
      console.log("TICK at", now);
      this.props.actions.errorsActions.clearErrorsDisplay(errors);
    }).then(res => {
      this.delay(1000).then(() => {
        let now = Math.floor(new Date().getTime()/1000);
        console.log("TOCK at", now);
        this.props.actions.errorsActions.deleteErrors();
      })
    }).catch(error => {
      console.log("error from queryGithub in App.js", error);
      let messages = [];
      if (error.message==="Network Error") {
        messages.push("You appear to be offline.", "Please check your internet connection.");
      }else if (error.response && error.response.data && error.response.data.message.includes("API rate limit exceeded")) {
        messages.push("I'm sorry, but GitHub is rate limited and the limit has been exceeded.", "Please wait a minute before resubmitting the query.");
      } else if (error.response && error.response.data && error.response.data.message) {
        messages.push(error.response.data.message);
      } else {
        messages.push(String(error));
      }
      let errors = {
       messages: messages,
       removalInProgress: false,
      }
      this.props.actions.errorsActions.updateErrors(errors);
    });
  }
  debounceQueryGitHub(){
    console.log('debouncing');
    this.queryGitHub();
  }
  updateSearchTextInput(e){
    console.log('in updateFormState');
    let searchForm = this.state.searchForm;
    searchForm[e.target.id] = e.target.value;
    this.setState({ searchForm });
    this.debounceQueryGitHub();
  }
  updateSearchType(searchType){
    console.log('in updateSearchType');
    let searchForm = this.state.searchForm;
    searchForm.searchType = searchType;
    this.setState({ searchForm });
    this.queryGitHub();
  }
  render() {
    const state = this.props.state;
    return (
      <div className="App">

        <Nav
           queryGitHub={this.queryGitHub}
         />

        <Main
          errors={state.errors}
          form={state.searchForm}
          updateSearchTextInput={this.updateSearchTextInput}
          updateSearchType={this.updateSearchType}
          cards={state.repos.items}
          lastSearchParameters={state.searchForm}
          lastUpdated={state.repos.lastUpdated}
          lastUpdatedLocal={state.repos.lastUpdatedLocal}
        />

      </div>
    );
  }
}


function mapStateToProps(state, ownProps){
  console.log('mapStateToProps data', state, ownProps)
  return { state: state };
};

function mapDispatchToProps(dispatch){
  return {
    actions: {
      repoActions: bindActionCreators(repoActions, dispatch),
      errorsActions: bindActionCreators(errorsActions, dispatch),
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
