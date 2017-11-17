import React, { Component } from 'react';
import './ReactSample.css';
import Radium, { StyleRoot } from 'radium'

const Person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    }
  }
  return (
    <div className='Person' style={style}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

class App extends Component {
  state = {
    persons: [
      { id: 'asdasd', name: 'Max', age: 28 },
      { id: 'aaaasd', name: 'Manu', age: 29 },
      { id: 'aggasd', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  deletePersonHandler = (PersonIndex) => {
    const persons = [...this.state.persons]
    persons.splice(PersonIndex, 1) //remove person item in array
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    //ToSurvey
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    // console.log(personIndex)

    const person = {
      ...this.state.persons[personIndex]
    }
    // console.log(person)

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    this.setState(prevState => ({
      showPersons: !prevState.showPersons
    }))
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'gray',
      }
    }
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'pink',
        color: 'gray',
      }
    }
    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);
