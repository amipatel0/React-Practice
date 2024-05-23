import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message:"I am Ami Patel"
        }
        this.myeventmethod=this.myeventmethod.bind(this);
      }
      myeventmethod()
      {
          alert(`Hello ${this.state.message}`)
      }
  render() {
    return (
      <div>
        {this.state.message}
        <ChildComponent name={this.myeventmethod}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
