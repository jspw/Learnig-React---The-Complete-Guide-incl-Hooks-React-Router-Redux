import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { name: "Sania", reg: 2017831051 },
      { name: "Shifat", reg: 2017831017 },
      { name: "Shifat", reg: 2017831017 },
      { name: "Shifat", reg: 2017831017 },
    ],
    check: false,

  }

  show = () => {
    const shs = this.state.check;
    this.setState({
      check: !shs
    })
  }


  delete = () => {
    console.log("Hello");
  }


  render() {

    let san = '';

    if (this.state.check) {
      san =(< div >
        {
          this.state.persons.map((p) => {
            return <Person
              name={p.name}
              roll={p.reg}
              click={this.show}
              key={p.roll}
            />
          })

        }
      </div >)
        


    }

    return (
      <div>
        <h1>Hello {this.state.persons[0].name}</h1>
        <button onClick={this.show} >Show</button>

        <san />
      </div>
    )
  };
}

export default App;
