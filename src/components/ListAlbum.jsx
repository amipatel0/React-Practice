import React, { Component } from 'react'
import axios from 'axios'
class ListAlbum extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         albums:[]
      }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(response=>{
                console.log(response)
                this.setState({albums:response.data})
            })
            .catch(error=>{
                console.log(error)
            })
    }
  render() {
    const {albums}=this.state
    return (
      <div>
        <h1>List of Albums</h1>
        {albums.length?albums.map(album=><div key={album.id}><b><i><u>Album ID:</u></i></b>{album.id}<br></br>
            <b><i><u>Album Title:</u></i></b>{album.title}<br></br>
            <b><i><u>Album User ID:</u></i></b>{album.userId}
            </div>):null}
      </div>
    )
  }
}

export default ListAlbum
