import React, { Component } from 'react'

export class RegularComponent extends Component {
  render() {
    console.log('Regular Comp....')
    return (
      <div>
                {this.props.name}
            <h1>Regular Component</h1>
      </div>
    )
  }
}

export default RegularComponent
