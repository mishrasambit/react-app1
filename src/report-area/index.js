import React from 'react'

import {ReportLine} from '../report-line';

export default function ReportArea(props){

    return (
        <div>
            {console.log(props.result)}
            <div className="container table-color" >
                <div className="row">
                    <div className="col col-sm">Name</div>
                    <div className="col col-sm">Email</div>
                    <div className="col col-sm">Phone</div>
                    <div className="col col-sm">Company</div>
                    <div className="col col-sm">City</div>
                </div>                
                {   
                    props.result && 
                    props.result.map(
                        (item, key)=>{
                        return  <ReportLine customer={item} key={key}></ReportLine>
                        })
                }
            </div>
        </div>
    );
}