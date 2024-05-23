import React, { Component } from 'react'

 class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         click:true
      }
    }
    
  render() {
    let msg=''
    
    //using if-else statements
   /* if(this.state.click)
    return (<div>Ami</div>)
    else
    return (<div>Avni</div>)*/


   //using variable
  /* if(this.state.click)
    msg=<div>Ami</div>
    else
    msg=<div>Avni</div>
    return msg;*/
    
    //using ternary operator

   /* msg=this.state.click ? <div>Ami</div> : <div>Avni</div>
    return msg; */

    //using short-hand operator
   msg=this.state.click && <div>Ami</div>
    return msg;


     
    
  }
}

export default ConditionalRendering
