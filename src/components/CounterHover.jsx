import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

 class CounterHover extends Component {
    
  render() {
    const {count,incrCount}=this.props

    return (
      <div>
        <h4>Using mouse over event</h4>
        <h1 onMouseOver={incrCount}>Increment {count} Value by <b><i>RollNo:</i></b>{this.props.rno} from <b><i>Semester:</i></b>{this.props.sem}   </h1>
      </div>
    )
  }
}

export default UpdatedComponent(CounterHover,7)
