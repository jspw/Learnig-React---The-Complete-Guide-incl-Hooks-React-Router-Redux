import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.module.css';
import Persons from '../components/Persons/Pesons'
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxilary'
import withClasses from '../hoc/withClasses'
import AuthContext from '../context/auth-context'


class App extends Component {

  constructor(props) {
    super(props);
    console.log("App.js constructor");
  };

  state = {
    persons: [
      { id: '12', name: "Shifat", age: 23 },
      { id: '14', name: "Proshi", age: 22 },
      { id: '15', name: "Sania", age: 22 },
    ],
    showPerson: false,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    console.log(state, props);
    return state;
  }

  // componentWillMount(){
  //   console.log("[App.js] componentWillMound " )
  // }


  componentDidMount() {
    console.log("[App.js] componentDidMount runing..");
  }



  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(s => {
      return s.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (index) => {
    // const student = this.state.students.slice();
    const person = [...this.state.persons];
    person.splice(index, 1);
    this.setState({
      persons: person
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

    console.log('[App.js] render');
    console.log("I want to know : ", this)

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (

      <Aux >
        <div className={classes.App}>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login:this.loginHandler,
          }} >

            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}
            />
            {persons}

          </AuthContext.Provider>
        </div>
        <div>
          Hello
        </div>
      </Aux>

    )
  }
}

export default withClasses(App, classes.App);
