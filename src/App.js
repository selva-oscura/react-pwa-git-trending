import React, { Component } from 'react';
import './App.css';
import api from './api';
import Nav from './Nav';
import Main from './Main';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      form: {
        language: '',
      },
      errors: [],
    };
    this.queryGitHub();
    this.submitForm = this.submitForm.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
  }
  queryGitHub(){
    let dates = this.getDates();
    let form = this.state.form;
    api.gitHubTrending(dates, form.language)
      .then((res, err) => {
        if(res){
          console.log('res', res.data);
          this.setState({results: res.data.items.slice(0,30)});
        }
        if(err){
          console.log('err', err);
        }
      }).catch((err)=> {
        console.log('unable to access git', err);
      });
  }
  getDates(){
    let dates = {}, now = new Date();
    dates.endDate = now.toISOString().slice(0,10);
    dates.startDate = new Date(now.getTime() - 7 * 1000 * 60 * 60 * 24).toISOString().slice(0,10);
    return dates;
  }
  updateFormState(e){
    let form = this.state.form;
    form[e.target.id] = e.target.value;
    this.setState({ form });
  }
  submitForm(){
    this.queryGitHub();
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Main
          form={this.state.form}
          submitForm={this.submitForm}
          updateFormState={this.updateFormState}
          cards={this.state.results}
        />
      </div>
    );
  }
}

export default App;
