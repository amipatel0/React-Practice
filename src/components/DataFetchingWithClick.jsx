import React,{useState,useEffect} from 'react'
import axios from'axios'
function DataFetchingWithClick() {

    const[albums,setAlbums]=useState({})
    const[id,setId]=useState(1)     //create hook for id 
    const[idButtonClick,setIdButtonClick]=useState(1)  //create hook for button click
   
     const handleClick=()=>{
        setIdButtonClick(id)
     }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(res=>{
            console.log(res)
            setAlbums(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idButtonClick])
  return (
    <div style={{
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    }}>
      <input type="text" value={id} onChange={e=>setId(e.target.value)}/> &nbsp; &nbsp;
      <button type="button" onClick={handleClick}>Fetch Album Details</button>
      <div><b>User ID:</b>{albums.userId}</div>
      <div><b>Album Title:</b>{albums.title}</div>
      <div><b>ID:</b>{albums.id}</div>
    </div>
  )
}

export default DataFetchingWithClick