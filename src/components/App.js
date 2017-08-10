import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';
import { bindActionCreators } from 'redux';
import * as repoActions from '../actions/repoActions';
import * as errorsActions from '../actions/errorsActions';
import './App.css';
import api from '../api/api.js';
import Nav from './Nav';
import Main from './Main';

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.queryGitHub = this.queryGitHub.bind(this);
    this.debounceQueryGitHub = debounce(500, this.debounceQueryGitHub);
    this.updateFormState = this.updateFormState.bind(this);
    this.updateSearchType = this.updateSearchType.bind(this);
    // console.log('this.props.children', this.props.children);
    // console.log('props.children', props.children);
    // console.log('this.state', this.state)
  }
  queryGitHub(){
    let searchForm = this.state.searchForm || {searchType: undefined, keyWords: "", language: ""};
    api.queryGitHub(searchForm.searchType, searchForm.keyWords, searchForm.language)
      .then((res) => {
        // if(res.data){
        //   console.log('total count:', res.data.total_count);
        // }
        let results = res.data.items.map((item) => {
          const {full_name, language, stargazers_count, forks_count, description, html_url} = item;
          return {full_name, language, stargazers_count, forks_count, description, html_url};
          }
        );
          // let parameters = Object.assign({}, form);
          // this.setState({searchForm: { results, parameters }});
        let error_messages = document.getElementById('ErrorMessages');
        if (error_messages) {
          error_messages.className = error_messages.className.slice(0, -13) + " remove-error";
        }
        setTimeout(() => {
          this.setState({ errors: [] });
        }, 2000)
      }).catch((err)=> {
        let errors = [];
        console.log('unable to access git', typeof err, err, '\n', String(err));
        if (err.message==="Network Error") {
          errors.push("You appear to be offline.", "Please check your internet connection.");
        }else if (err.response.data.message.includes("API rate limit exceeded")) {
          errors.push("I'm sorry, but GitHub is rate limited and the limit has been exceeded.", "Please wait a minute before resubmitting the query.");
        } else if (err.response && err.response.data.message) {
          errors.push(err.response.data.message);
        } else {
          errors.push(String(err));
        }
        this.setState({errors});
      });
  }
  debounceQueryGitHub(){
    this.queryGitHub();
  }
  updateFormState(e){
    let searchForm = this.state.searchForm;
    searchForm[e.target.id] = e.target.value;
    this.setState({ searchForm });
    this.debounceQueryGitHub();
  }
  updateSearchType(searchType){
    let searchForm = this.state.searchForm;
    searchForm.searchType = searchType;
    this.setState({ searchForm });
    this.queryGitHub();
  }
  componentWillMount(){
    console.log('lastUpdated', this.props.state.repos.lastUpdated)
    if(typeof this.props.state.repos.lastUpdated === "number"){
      this.props.actions.repoActions.loadRepos()
        .then(res => {
          console.log('res from componentWillMount', res)
          dispatch(updateErrorsSuccess({
           removalInProgress: true,
          }));
          setTimeout(() => {
           dispatch(updateErrorsSuccess({
             removalInProgress: false, 
             messages: [],
           }))
          }, 2000);
        })
        .catch(error => {
          console.log('err from componentWillMount -- unable to access git', typeof error, error, '\n', String(error));
          let messages = [];
          if (error.message==="Network Error") {
            messages.push("You appear to be offline.", "Please check your internet connection.");
          }else if (error.response.data.message.includes("API rate limit exceeded")) {
            messages.push("I'm sorry, but GitHub is rate limited and the limit has been exceeded.", "Please wait a minute before resubmitting the query.");
          } else if (error.response && error.response.data.message) {
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
          updateFormState={this.updateFormState}
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
