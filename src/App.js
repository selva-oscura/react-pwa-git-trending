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
    };
    let dates = this.getDates();
    console.log(dates);
    api.gitHubTrending(dates)
      .then((res, err) => {
        if(res){
          console.log('res', res.data);
          this.setState({results: res.data.items.slice(0,30)});
        }
        if(err){
          console.log('err', err);
        }
      });
  }
  getDates(){
    let dates = {}, now = new Date();
    dates.endDate = now.toISOString().slice(0,10);
    dates.startDate = new Date(now.getTime() - 7 * 1000 * 60 * 60 * 24).toISOString().slice(0,10);
    return dates;
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Main
          cards={this.state.results}
        />
      </div>
    );
  }
}

export default App;
