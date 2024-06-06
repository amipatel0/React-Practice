import React,{useState,useEffect} from 'react'
import axios from'axios'
function DataFetchingThirdPartyAPI() {

    const[albums,setAlbums]=useState([])
   
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res=>{
            console.log(res)
            setAlbums(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
  return (
    <div>
      
    <ul>
      {
            albums.map(album=>(<li key={album.id}>{album.id},<h2>{album.title}</h2></li>))
      }
    </ul>
    </div>
  )
}

export default DataFetchingThirdPartyAPI
