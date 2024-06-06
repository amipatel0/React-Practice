import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'

export class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Ami'
    }
  }
  componentDidMount()
  {
    setInterval(()=>{
        this.setState({
            name:'Patel'
        })
    },4000)
  }
  
  render() {
    console.log('Parent Comp')
    return (
      <div>
        <h1>Parent Component</h1>
        <RegularComponent/>
        <PureComp/>
      </div>
    )
  }
}

export default ParentComp
