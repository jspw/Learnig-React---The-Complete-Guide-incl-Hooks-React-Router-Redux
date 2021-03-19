import React from 'react';
import Aux from '../../hoc/Auxilary';
import cssClasses from  './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className={cssClasses.Content}>
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;