import React from 'react';
import Aux from '../../hoc/Auxilary';
import cssClasses from  './Layout.module.css';

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar,SlideDrawer,Backdrop</div>
            <main className={cssClasses.Content}>
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;