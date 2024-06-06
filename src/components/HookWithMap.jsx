import React,{useState} from 'react'

function HookWithMap() {
    const[items,setItems]=useState([])
   
   
    const addItem = () =>{
        setItems([...items,{
            id:items.length+1,
            value:Math.floor (Math.random()*100)+1
        }])
    }
  return (
    <div>
      <button onClick={addItem}>Click to generate number</button>
      <ul>
        {
            items.map(item=><li key={item.id}>Index Value:{item.id}, Random Number:{item.value}</li>)
        }
      </ul>
    </div>
 )
}

export default HookWithMap
