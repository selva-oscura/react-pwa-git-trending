import React, { Component } from 'react';
import './App.css';
import api from './api';
import Nav from './Nav';
import Main from './Main';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastSearch: {
        results: [],
        parameters: {
          searchType: 'top',
          keyWords: '',
          language: '',
        },
        lastUpdated: -Infinity,
        lastUpdatedLocal: -Infinity,
      },
      form: {
        searchType: 'top',
        keyWords: '',
        language: '',
      },
      errors: [
      ],
    };
    this.queryGitHub();
    this.submitForm = this.submitForm.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
    this.updateSearchType = this.updateSearchType.bind(this);
  }
  localDateTime(){
    const now = new Date();
    const pad = num => num < 10 ? `0${num}` : num;
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}, ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }
  queryGitHub(){
    let form = this.state.form;
    api.queryGithub(form.searchType, form.keyWords, form.language)
      .then((res) => {
        let results = res.data.items.map((item) => {
          const {full_name, language, stargazers_count, forks_count, description, html_url} = item;
          return {full_name, language, stargazers_count, forks_count, description, html_url};
          }
        );
        let parameters = Object.assign({}, form);
        let lastUpdated = new Date().getTime();
        let lastUpdatedLocal = this.localDateTime();
        this.setState({lastSearch: { results, parameters, lastUpdated, lastUpdatedLocal }, errors: [] });
      }).catch((err)=> {
        console.log('unable to access git', err);
        if(err.message==="Network Error"){
          let errors = this.state.errors;
          errors.push("You appear to be offline.", "Please check your internet connection.");
          this.setState({errors});
        }
      });
  }
  updateFormState(e){
    let form = this.state.form;
    form[e.target.id] = e.target.value;
    this.setState({ form });
  }
  updateSearchType(searchType){
    let form = this.state.form;
    form.searchType = searchType;
    this.setState({ form });
  }
  submitForm(e){
    e.preventDefault();
    this.queryGitHub();
  }
  render() {
    return (
      <div className="App">
        <Nav
          submitForm={this.submitForm}
        />
        <Main
          errors={this.state.errors}
          form={this.state.form}
          submitForm={this.submitForm}
          updateFormState={this.updateFormState}
          updateSearchType={this.updateSearchType}
          cards={this.state.lastSearch.results}
          lastSearchParameters={this.state.lastSearch.parameters}
          lastUpdated={this.state.lastSearch.lastUpdated}
          lastUpdatedLocal={this.state.lastSearch.lastUpdatedLocal}
        />
      </div>
    );
  }
}

export default App;
