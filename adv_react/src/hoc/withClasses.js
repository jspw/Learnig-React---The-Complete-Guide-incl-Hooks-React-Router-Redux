import React from 'react'

const withClasses = (WrappedComponent,className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );

}

export default withClasses;