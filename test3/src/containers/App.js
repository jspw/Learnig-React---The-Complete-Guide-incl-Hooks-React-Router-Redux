import React, { Component } from 'react';
import logo from '../logo.svg';
import cssClasses from './App.module.css';
import Basic from '../components/Intro/Basic'
import Intro from '../components/Intro/Intro'
import Repos from '../components/Github/Repos/Repos'



class App extends Component {

  state = {

    title: 'Welcome to My Portfolio!',

    repos: [

      { name: "Cleaner", link: "https://github.com/jspw/Cleaner" },
      { name: "VS-Code-Config", link: "https://github.com/jspw/VS-Code-Config" },
      { name: "Test-Hadoop", link: "https://github.com/jspw/Test-Hadoop" },
      { name: "shifat.com", link: "https://github.com/jspw/shifat.com" },
      { name: "Sahitto-Kothon", link: "https://github.com/jspw/Sahitto-Kothon" },
      { name: "CodeNerd", link: "https://github.com/jspw/CodeNerd" },
    ],
    showRepo: false,

    users: [
      {
        name: "5hifaT",
        username: 'jspw',
        bio: 'Love to write Code and learn new Technologies | Linux & information security enthusiast | Full  Stack Web Developer'
      },
    ],

  }

  render() {


    return (
      <div className={cssClasses.App}>

        <Basic
          title={this.state.title}
        />

        <Intro
          users={this.state.users}
        />

        <Repos
          repos={this.state.repos}
        />

      </div>
    )
  }
}

export default App;
