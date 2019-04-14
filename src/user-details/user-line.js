import React from 'react'

import './user.css'

export function UserLine(props){
    return (
        // <div className="row"> 
        //     <div className="col col-sm"><img src={props.user.avatar}></img></div>
        //     <div className="col col-sm">{props.user.first_name+' '+ props.user.last_name}</div>            
        // </div>

        <div className="container" >
            <div className="row">
                <div className="col-lg-3 col-sm-6">

                    <div className="card hovercard">
                         <img className="cardheader" alt="" src={props.user.avatar} />
                        <div className="avatar">
                            <img alt="" src={props.user.avatar}/>
                        </div>
                        <div className="info">
                            <div className="title">
                                <a href="">{props.user.first_name+' '+ props.user.last_name}</a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}