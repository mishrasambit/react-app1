import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import logo from './logo.svg';
import './App.css';

import SearchArea from './search-area';
import ReportArea from './report-area';
import UserArea from './user-details';
import {doSomething, callUserApi} from './api';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      searchtext : '',
      searchresult: undefined,
      userdetails: undefined
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

  callUserApi=()=>{
    callUserApi().then(res=>{
      console.log(res.data);
      res.data && this.setState(
        function(preState, props){
          return{userdetails : res.data.data}
        }
      );
    });
  }


  render() {
    return (
      <div className="App">
        <SearchArea text={this.state.searchtext} searchHandler={this.handleSearch} callUserApi={this.callUserApi}></SearchArea>
        {this.state.searchresult && <ReportArea result={this.state.searchresult} ></ReportArea>}
        {this.state.userdetails && <UserArea result={this.state.userdetails} ></UserArea>}
      </div>
    );
  }
}

export default App;
