import React from 'react'

export default function SearchArea(props){
    return (
        <div className="col-lg-4 col-lg-offset-4">
            <input type="search" id="search" value={props.text} onChange={props.searchHandler}
            className="form-control" placeholder="Search using Fuzzy searching"/>
            <button onClick={props.callUserApi} >search</button>
        </div>
    );
}