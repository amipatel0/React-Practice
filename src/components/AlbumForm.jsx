import React, { Component } from 'react'
import axios from 'axios'

export class AlbumForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:''

      }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/albums',this.state)
        .then(response=>{
            console.log(response)

        })
        .catch(error=>{
             console.log(error)
         })
    }
  render() {

    const {userId,title}=this.state
    return (
      <div>
         <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Add Album Details</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'20px' }}>
          <form onSubmit={this.submitHandler} style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ marginBottom: '10px' }}>
              <input type="text" name="userId" placeholder="userID" value={userId} onChange={this.changeHandler} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <input type="text" name="title" placeholder="title" value={title} onChange={this.changeHandler} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div>
              <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: 'blue', color: '#fff', fontSize: '16px' }}>Submit</button>
            </div>
          </form>
        </div>
        </div>
      )
      
  }
}

export default AlbumForm
