import React, { Component } from "react";

import styles from './App.module.css';
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  randomId = () => {
    return Math.floor(Math.random() * 100000);
  };

  state = {
    persons: [
      { id: this.randomId(), name: "Satyaki", age: 26 },
      { id: this.randomId(), name: "Shruti", age: 22 },
      { id: this.randomId(), name: "Goutam", age: 58 },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === personId);
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({
      persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    let persons = null;
    let btnClass = [styles.Button]

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={this.deletePersonHandler.bind(this, index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass.push(styles.Red);
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button className={btnClass.join(" ")} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
