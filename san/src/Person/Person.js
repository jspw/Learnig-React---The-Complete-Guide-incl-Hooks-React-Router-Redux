import React, { Component } from 'react';
import cssClasses from './Person.module.css'


const Person = (props) => {
    return (
        <div className={cssClasses.but}>
            <button onClick={props.click} >Hello</button>
            <ol>
                <li>Name : {props.name}</li>
                <li>Roll : {props.roll}</li>

            </ol>
        </div>
    )
}

export default Person;