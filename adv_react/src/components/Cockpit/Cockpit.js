import React, { useEffect } from 'react'
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

  // useEffect(() => {
  //   alert("Shit!")

  // },[props.persons]);  //if the persons is effected then the useEffect() funtion will call! 



  useEffect(() => {
    alert("Shit!")

  },[]);  // the useEffect() funtion will call just once ! 


  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default Cockpit;