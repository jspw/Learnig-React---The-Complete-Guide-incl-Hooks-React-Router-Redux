import React, { Component } from 'react';

import classes from './Person.module.css';

import { render } from '@testing-library/react';

import PropTypes from 'prop-types';



class Person extends Component {

  // var name = "shifat";

  static getDerivedStateFromProps(props, state) {
    console.log("[Person.js] getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("[Person.js] componentDidUpdate");
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }

};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};


export default Person;