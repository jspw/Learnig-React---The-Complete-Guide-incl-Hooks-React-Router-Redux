import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import cssClasses from '../Components/Students/Student/Student.module.css';
import Std from '../Components/Students/Student/Student';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundry'

class App extends Component {
  state = {
    students: [
      { id: 1, name: "Shifat", roll: 2017831017, dept: "SWE" },
      { id: 2, name: "Sania", roll: 2017831051, dept: "SWE" },
      { id: 3, name: "Joga", roll: 2017831011, dept: "EEE" },
      { id: 4, name: "Foga", roll: 2017831027, dept: "MEE" },
      { id: 5, name: "Naium", roll: 2017831047, dept: "SWE" },
      { id: 6, name: "Autul", roll: 2017831001, dept: "CSE" },
      { id: 7, name: "Kafi", roll: 2017831001, dept: "CEP" },
    ],
    check: false,
  }


  nameChangeHandler = (event, id) => {
    const studentIndex = this.state.students.findIndex(s => {
      return s.id === id;
    });

    const student = {
      ...this.state.students[studentIndex]
    };

    student.name = event.target.value;

    const students = [...this.state.students];

    students[studentIndex] = student;

    this.setState({
      students: students
    })
  }


  show = () => {
    const bal = this.state.check;
    this.setState({
      check: !bal,
    })
  }

  delInfo = (index) => {
    // const student = this.state.students.slice();


    const student = [...this.state.students];
    student.splice(index, 1);
    this.setState({
      students: student
    })
  }

  render() {

    const classes = [];
    if (this.state.students.length <= 3) {
      classes.push(cssClasses.bold);
    }
    if (this.state.students.length < 1) {
      classes.push(cssClasses.red);
    } else {
      classes.push(cssClasses.large);
    }

    let btnClass = [cssClasses.Button];



    return (
      <div>
        <button className={btnClass.join(' ')} onClick={this.show} >Click Me</button>

        <p className={classes.join(' ')} >Hello here </p>

        {
          this.state.check ?
            <div>
              <h1>Hello I'm testing REACT!</h1>

            </div>

            : null
        }
      </div>
    )
  };
}


export default App;
