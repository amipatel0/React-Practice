import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      fname:'',
      lname:'',
      email:'',
      contact:'',
      tech:'',
      dob: '',
      gender: '',
      interests: []


    }
  }
  //methods for input box
  changeFname=event=>{
    this.setState({
      fname:event.target.value
    })
  }

  changeLname=event=>{
    this.setState({
      lname:event.target.value
    })
  }
 

  changeEmail=event=>{
    this.setState({
      email:event.target.value
    })
  }
 

  changeContact=event=>{
    this.setState({
      contact:event.target.value
    })
  }
  changeTech=event=>{
    this.setState({
      tech:event.target.value
    })
  }

  changeDob = event => {
    this.setState({ dob: event.target.value })
  }

  changeGender = event => {
    this.setState({ gender: event.target.value })
  }

  changeInterests = event => {
    const { interests } = this.state
    if (event.target.checked) {
      this.setState({ interests: [...interests, event.target.value] })
    } else {
      this.setState({ interests: interests.filter(interest => interest !== event.target.value) })
    }
  }



  submitChange = event => {
    event.preventDefault(); // Prevent form from submitting
    alert(`Fname: ${this.state.fname}\nLname: ${this.state.lname}\nEmail: ${this.state.email} \nContact: ${this.state.contact} \nTechnology: ${this.state.tech}\nDOB: ${this.state.dob}\nGender: ${this.state.gender}\nInterests: ${this.state.interests.join(', ')}`)
  }
 
 
  
  render() {
    return (
      <div>
          <div className="container mt-5" style={{backgroundColor:'#0099ff'}}>
        <form onSubmit={this.submitChange}>
          <h5 style={{color:'black'}}>Enter First Name:</h5>
          <input type="text" name="fname" value={this.state.fname} onChange={this.changeFname}/>
          <h5 style={{color:'black'}}>Enter Last Name:</h5>
          <input type="text" name="lname" value={this.state.lname} onChange={this.changeLname}/>
          <h5 style={{color:'black'}}>Enter Email:</h5>
          <input type="email" name="email" value={this.state.email} onChange={this.changeEmail}/>
          <h5 style={{color:'black'}}>Enter Contact Number:</h5>
          <input type="phone" name="contact" value={this.state.contact} onChange={this.changeContact}/>
          <select name="hobby" value={this.state.tech} onChange={this.changeTech} style={{ marginTop: '20px' }}>
            <option value="">***Select Tech***</option>
            <option value="Listening">JavaScript</option>
            <option value="Reading">React</option>
            <option value="Games">PHP</option>
          </select>
          <br></br>

          <h5 style={{ color: 'black',marginTop: '20px' }}>Enter Date of Birth:</h5>
            <input type="date" name="dob" value={this.state.dob} onChange={this.changeDob} style={{ marginBottom: '20px' }} />

            <h5 style={{ color: 'black' }}>Select Gender:</h5>
            <label>
              <input type="radio" name="gender" value="Male" onChange={this.changeGender} checked={this.state.gender === 'Male'} /> Male
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input type="radio" name="gender" value="Female" onChange={this.changeGender} checked={this.state.gender === 'Female'} /> Female
            </label>

            <h5 style={{ color: 'black' }}>Select Interests:</h5>
            <label>
              <input type="checkbox" name="interests" value="Music" onChange={this.changeInterests} checked={this.state.interests.includes('Music')} /> Music
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input type="checkbox" name="interests" value="Sports" onChange={this.changeInterests} checked={this.state.interests.includes('Sports')} /> Sports
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input type="checkbox" name="interests" value="Travel" onChange={this.changeInterests} checked={this.state.interests.includes('Travel')} /> Travel
            </label>
            <br />

          <input type="submit" name="submit" value="Save" style={{ marginTop: '20px' ,color:''}}/>

        </form>
        </div>
        
      </div>
    )
  }
}

export default Form
