import React, { Component } from 'react'
import './Student.css'


const std = (props) => {
    return (
        <div className="class1">
            <h3>Student Information:</h3>
            <button onClick={props.click} className="btn">Delete</button>
            <ul>
                <li>Name : {props.name} </li>
                *<input onChange={props.change} value={props.name}></input>
                <li>Registration No : {props.rull}</li>
                <li>Department : {props.dept}</li>
            </ul>
        </div>
    )
}

export default std;