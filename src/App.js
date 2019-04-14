import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import logo from './logo.svg';
import './App.css';

import SearchArea from './search-area';
import ReportArea from './report-area';
import {doSomething} from './api';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      searchtext : '',
      searchresult: undefined
    }
  }

  handleSearch = (event)=>{
    const criteria = event.target.value
    criteria && this.setState(
      function(preState, props){
        return{searchtext : criteria}
      }
    )
    criteria === '' && this.setState(
      function(preState, props){
        return{searchtext : criteria}
      }
    )
    doSomething().then(res=>{
        console.log(res.data);
        res.data && this.setState(
          function(preState, props){
            return{searchresult : res.data}
          }
        );

      }).catch(err=>{
        console.log(err);
      });
  };



  render() {
    return (
      <div className="App">
        <SearchArea text={this.state.searchtext} searchHandler={this.handleSearch}></SearchArea>
        <ReportArea result={this.state.searchresult}></ReportArea>
      </div>
    );
  }
}

export default App;
