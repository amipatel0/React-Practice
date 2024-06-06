import React, { Component } from 'react';

class  MouseEventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }

    
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.MouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.MouseMove);
  }

  MouseMove=event=> {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div>
        <p>Mouse coordinates using class: (x: {this.state.x}, y: {this.state.y})</p>
        
      </div>
    );
  }
}

export default MouseEventClass;
