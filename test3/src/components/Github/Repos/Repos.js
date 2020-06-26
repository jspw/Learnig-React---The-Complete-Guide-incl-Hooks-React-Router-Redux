import React, { Component } from 'react';
import Repo from './Repo/Repo';
import cssClasses from './Repos.module.css'

const repos = (props) => {

    return (
        <div className={cssClasses.repos}>
            <h1>Here are my repositories : </h1>
            <ol>
                {
                    props.repos.map((repo, index) => {
                        return (
                            <Repo
                                name={repo.name}
                                link={repo.link}

                            />
                        );
                    }

                    )
                }
            </ol>
        </div>

    )
};


export default repos;