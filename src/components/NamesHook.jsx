import React,{useState} from 'react'

function NamesHook() {

    const [name,setName]=useState({'fname':'','lname':'','semester':'','branch':''})
    
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>

        
      Enter FirstName:<input type="text" value={name.fname} onChange={e=>setName({...name,fname:e.target.value})}/><br></br>
      Enter LastName:<input type="text" value={name.lname} onChange={e=>setName({...name,lname:e.target.value})}/><br></br>
      Enter Semester:<input type="text" value={name.semester} onChange={e=>setName({...name,semester:e.target.value})}/><br></br>
      Enter Branch:<input type="text"value={name.branch} onChange={e=>setName({...name,branch:e.target.value})}/>
      
      <h2>FirstName:{name.fname}</h2><br></br>

      <h2>LastName:{name.lname}</h2><br></br>
      <h2>Semester:{name.semester}</h2><br></br>
      <h2>Branch:{name.branch}</h2><br></br>
     <h3>Using Jason: {JSON.stringify(name)}</h3>

    </div>
  )
}

export default NamesHook
