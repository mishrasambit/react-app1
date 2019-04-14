import React from 'react'

export function ReportLine(props){
    return (
        <div className="row">            
            <div className="col col-sm">{props.customer.name}</div>
            <div className="col col-sm">{props.customer.email}</div>
            <div className="col col-sm">{props.customer.phone}</div>
            <div className="col col-sm">{props.customer.company.name}</div>
            <div className="col col-sm">{props.customer.address.city}</div>
        </div>
    );
}