

import React, { Component } from 'react'
import Counter1 from './Counter1'

 class CounterClick1 extends Component {

    
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

export default CounterClick1


