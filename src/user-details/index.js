import React from 'react'

import {UserLine} from './user-line';

export default function UserArea(props){
    
    return (
        <div>
            {console.log(props.result)}
            <div className="container " >
                               
                {   
                    props.result && 
                    props.result.map(
                        (user, key)=>{
                        return  <UserLine user={user} key={key}> </UserLine>
                        })
                }
            </div>
        </div>
    );
}