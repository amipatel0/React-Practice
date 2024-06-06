import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={props.pimage} alt="" className="img"/>
        <h2 className="pname">{props.pname}</h2>
        <p className="pprice">₹{props.pprice}</p>
        <p className="pdescription">{props.pdescription}</p>
        <button className="btn btn-dark">Buy Now</button>

      </div>
    </div>
  )
}

export default Card


