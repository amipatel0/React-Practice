import React, { Component } from 'react'
import Counter1 from './Counter1'

 class CounterHover1 extends Component {
    
  render() {
    const {count,incrCount}=this.props

    return (
      <div>
        <h4>Using mouse over event</h4>
        <h1 onMouseOver={incrCount}>Increment {count} Value   </h1>
      </div>
    )
  }
}

export default CounterHover1
