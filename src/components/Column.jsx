import React from 'react'

function Column(){
    const list=[{'rno':'01','name':'ami','sem':'6'}];


return (
    <React.Fragment>
        {list.map(nm=><tr key={nm.rno}>
            <td>{nm.rno}</td>
            <td>{nm.name}</td>
            <td>{nm.sem}</td>
        </tr>)}
    </React.Fragment>
  )

}
export default Fragment
