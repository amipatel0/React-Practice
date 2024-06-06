import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure Component....')
    return (
      <div>  {this.props.name}
            <h1>Pure Component</h1>
      </div>
    )
  }
}

export default PureComp
