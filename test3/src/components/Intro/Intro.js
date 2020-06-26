import React, { Component } from 'react'
import cssClasses from './Intro.module.css'


const intro = (props) => {
    return (props.users.map((user, index) => {
        return (
            <div key={user.name} >
                <h3>{user.name}</h3>
                <p><b>Username</b> : {user.username}</p>
                <p><b>Bio</b> : {user.bio}</p>
            </div>
        )
    })

    );
};

export default intro;