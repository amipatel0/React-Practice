import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    //for increment
    increment=()=>{
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log(this.state.count)
        }
    )
    }
    //for decrement
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        },
        ()=>{
            console.log(this.state.count)
        }

    )
    }
  render() {
    return (
      <div>
        {this.state.count}
        <button  style={{marginRight:'10px'}}onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        
      </div>
    )
  }
}

export default Counter
