import React, { Component } from 'react';
import './ReactSample.css';

const Person = (props) => {
  return (
    <div className='Person'>
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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

    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App;
