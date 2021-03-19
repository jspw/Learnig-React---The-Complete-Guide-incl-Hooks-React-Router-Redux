import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Std from './Student/Student';
// import Radium, { StyleRoot } from 'radium'
import styled from 'styled-components'

const StyleButton = styled.button`

  background-color:   ${props => props.alt ? 'yellow' : 'green'} ;
  color: "white";
  font: inherit;
  font-size: 1.5em;
  border: 3px solid #eee;
  padding: 8px;
  cursor: pointer;
  margin: 10px;
  &:hover{
    background-color:  ${props => props.alt ? 'lightyellow' : 'lightgreen'};
    color:  ${props => props.alt ? 'blue' : 'lightgreen'};
  }

`;


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
    console.log("Clicked!")
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: "white",
      font: 'inherit',
      fontSize: '1.5em',
      border: '3px solid #eee',
      padding: '8px',
      cursor: 'pointer',
      margin: "10px",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    // let  classes = ['red','bold'].join(' ');

    console.log("Length = " + this.state.students.length);

    const classes = [];
    if (this.state.students.length <= 3) {
      classes.push('bold');
    }
    if (this.state.students.length < 1) {
      classes.push('red');
    } else {
      classes.push('large');
    }



    return (
      // <StyleRoot>
      <div>
        <StyleButton alt={this.state.check} onClick={this.show} >Click Me</StyleButton>

        <p className={classes.join(' ')} >Hello here </p>

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
              };

            </div>

            : null
        }
      </div>
      // </StyleRoot>
    )
  };
}

// export default Radium(App);
export default App;
