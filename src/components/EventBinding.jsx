import React, { Component } from 'react'

export class EventBinding extends Component {
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
        <h1 >{this.state.msg}</h1>
         <button style={{marginRight:'10px'}}onClick={this.changeEvent.bind(this)}>Click Me Using Bind method</button>
         <button style={{marginRight:'10px'}}onClick={()=>this.changeEvent()}>Click Me Using Arrow function</button>
         <button onClick={this.changeEvent}>Click Me Using simple method</button>
        
      </div>
    )
  }
}

export default EventBinding
