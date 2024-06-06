import React, { Component } from 'react'

 class User1 extends Component {
  render() {
    return (
      <div>
        {this.props.name(true)}
      </div>
    )
  }
}

export default User1
