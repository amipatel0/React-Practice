import React, { Component } from 'react'

export class OnClick extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           msg:"Click to Subscribe"
        }
      }
     //create function for change text
    change=()=>{
        this.setState({
            msg:"Subscribed Successfully...."
            
        });
        alert("Subscribed Successfully....");

    }
    
  render() {
    return (
      <div>
         {this.state.msg}
        <button onClick={this.change}>Subscribe</button>
      
      </div>
    )
  }
}

export default OnClick
