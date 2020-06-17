import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Std from './Student/Student'


class App extends Component {
  state = {
    students: [
      { id: 1, name: "Shifat", roll: 2017831017, dept: "SWE" },
      { id: 2, name: "Sania", roll: 2017831051, dept: "SWE" },
      { id: 3, name: "Joga", roll: 2017831011, dept: "EEE" },
      { id: 4, name: "Foga", roll: 2017831027, dept: "MEE" },
      { id: 5, name: "Naium", roll: 2017831047, dept: "SWE" },
      { id: 6, name: "Autul", roll: 2017831001, dept: "CSE" },
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

    students[studentIndex] =  student;

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
    console.log("Clicked!")
  }

  render() {

    return (
      <div>
        <button onClick={this.show} >Click Me</button>

        {
          this.state.check ?
            <div>
              <h1>Hello I'm testing REACT!</h1>
              {
                this.state.students.map((student, index) => {
                  return <Std
                    click={() => this.delInfo(index)}
                    name={student.name}
                    roll={student.roll}
                    dept={student.dept}
                    key={student.id}
                    change={(event) => this.nameChangeHandler(event, student.id)}
                  />
                })
              }

            </div>
            : null
        }
      </div>
    )
  };
}

export default App;
