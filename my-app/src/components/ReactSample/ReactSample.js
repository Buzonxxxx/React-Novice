import React, { Component } from 'react';
import './ReactSample.css';
import Person from './Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdasd', name: 'Max', age: 28 },
      { id: 'aaaasd', name: 'Manu', age: 29 },
      { id: 'aggasd', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (PersonIndex) => {
    // const persons = this.state.persons
    const persons = [...this.state.persons]
    persons.splice(PersonIndex, 1) //remove person item in array
    this.setState({persons: persons})
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

    //ToSurvey
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value
    
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    this.setState(prevState => ({
      showPersons: !prevState.showPersons
    }))
    // const doesShow = this.state.showPersons
    // this.setState({showPersons: !doesShow})
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
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
      // persons = (
      //   <div>
      //     <Person
      //       name={this.state.persons[0].name}
      //       age={this.state.persons[0].age} />
      //     <Person
      //       name={this.state.persons[1].name}
      //       age={this.state.persons[1].age}
      //       click={this.switchNameHandler.bind(this, 'Max!')}
      //       changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
      //     <Person
      //       name={this.state.persons[2].name}
      //       age={this.state.persons[2].age} />
      //   </div>
      // )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
