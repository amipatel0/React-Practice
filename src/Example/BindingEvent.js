import React, { Component } from 'react'

 class BindingEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"Binding event"
      }
      this.changeEvent=this.changeEvent.bind(this)
    }
    changeEvent(){
        this.setState({
            msg:"Event Binding"
        })
    }
    
  render() {
    return (
      <div>
         <h1>{this.state.msg}</h1>
         <button onClick={this.changeEvent.bind(this)}>Click Me Using Bind method</button>
         <button onClick={()=>this.changeEvent()}>Click Me Using Arrow function</button>
         <button onClick={this.changeEvent}>Click Me Using simple method</button>
        
      </div>
    )
  }
}

export default BindingEvent
