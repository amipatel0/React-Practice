import React, { Component } from 'react'

 class OnclickEvent extends Component {
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
        })
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

export default OnclickEvent
