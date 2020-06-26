import React, { Component } from 'react'
import cssClasses from './Repo.module.css'


const repo = (props) => {

    return (
        <div >
            <li>
                <b><a className={cssClasses.link} href={props.link} >{props.name}</a></b>
            </li>
        </div>
    );
};


export default repo;