import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';

class App extends Component {

  getDates(){
    let dates = {}, now = new Date();
    dates.endDate = now.toISOString().slice(0,10);
    dates.startDate = new Date(now.getTime() - 7 * 1000 * 60 * 60 * 24).toISOString().slice(0,10);
    return dates;
  }

  render() {
    let dates = this.getDates();
    console.log(dates);
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
