import React, { Component } from 'react'

export class ClassProps extends Component {
    //constructor
    constructor(props) {
        super(props)
      
      //   this.state = {
           
      //   }
  
     // const{name,sem}=props
      }
  render() {
    const{name,sem}=this.props

    return (
      <div>
         Using Class Component Props: 
        {"Name="+this.props.name},{"Semester="+this.props.sem}

      </div>
    )
  }
}

export default ClassProps
