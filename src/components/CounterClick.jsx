import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

 class CounterClick extends Component {

    
  render() {
    const {count,incrCount}=this.props

    return (
      <div>
        <h4>Using button click</h4>
         <button onClick={incrCount}>{this.props.name}   Clicked {count}  times</button>
      </div>
    )
  }
}

export default UpdatedComponent(CounterClick,20)


