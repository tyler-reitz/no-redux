import React, { Component } from 'react'

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
      break
    case 'DECREMENT':
      return { count: state.count - 1 }
      break
    default:
      return state  
      break
  }    
}

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = counter(undefined, {})
  }

  dispatch = action => {
    this.setState(prevState => counter(prevState, action))
  }

  increment = e => {
    this.dispatch({ type: 'INCREMENT' })
  }

  decrement = e => {
    this.dispatch({ type: 'DECREMENT' })
  }

  render() {
    return <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
  }
  
}

export default Counter