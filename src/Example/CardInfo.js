import React from 'react'
import Card from './Card'
import './CardInfo.css'

function CardInfo() {

    const drinks=[
        {
            pname:'Mango',
            pimage:'images/fruits/mango.webp',
            pprice:'30',
            pdescription:'Healthy'
        },
        {
            pname:'Banana',
            pimage:'images/fruits/banana.webp',
            pprice:'30',
            pdescription:'Healthy'
        },
        {
            pname:'Guava',
            pimage:'images/fruits/guava.webp',
            pprice:'30',
            pdescription:'Healthy'
        },
    
        {
            pname:'Strawberry',
            pimage:'images/fruits/strawberry.webp',
            pprice:'30',
            pdescription:'Healthy'
        },
    
        {
            pname:'Kiwi',
            pimage:'images/fruits/kiwi.webp',
            pprice:'30',
            pdescription:'Healthy'
        },
        {
            pname:'Grapes',
            pimage:'images/fruits/grapes.jpeg',
            pprice:'30',
            pdescription:'Healthy'
        },
     
        {
            pname:'Orange',
            pimage:'images/fruits/orange.jpeg',
            pprice:'30',
            pdescription:'Healthy'
        },
    
        {
            pname:'Papaya',
            pimage:'images/fruits/papaya.jpeg',
            pprice:'30',
            pdescription:'Healthy'
        },
    
        {
            pname:'PineApple',
            pimage:'images/fruits/pineapple.jpeg',
            pprice:'30',
            pdescription:'Healthy'
        },
    
         {
            pname:'WaterMelon',
            pimage:'images/fruits/watermelon.jpeg',
            pprice:'30',
            pdescription:'Healthy'
        },
    
    
    ];


  return (
    <div>
        <div className="CardInfo">
        {/* <h1>Cold Drinks</h1> */}
        <div className="product-list">
        {drinks.map((product, index) => (
          <Card
            key={index}
            pname={product.pname}
            pimage={product.pimage}
           pprice={product.pprice}
            pdescription={product.pdescription}
          />
        ))}
      </div>
      </div>

    </div>
  )
}

export default CardInfo


