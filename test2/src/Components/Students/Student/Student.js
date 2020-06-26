import React, { Component } from 'react';
import cssClassed from './Student.module.css';

const std = (props) => {
    // const rand = Math.rand();
    // if(rand<.7){
    //     throw new Error ("Fucked Up");
    // }

    return (


        <div className={cssClassed.class1} >
            {console.log(cssClassed)}
            <h3>Student Information:</h3>
            <button onClick={props.click} className={cssClassed.btn}>Delete</button>
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