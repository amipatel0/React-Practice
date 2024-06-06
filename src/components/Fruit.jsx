import React from 'react'

function Fruit({fruitName}) {

    if(fruitName === 'Tomato')
        throw new Error('Not a fruit!')
  return (
    <div>
      {fruitName}
    </div>
  )
}

export default Fruit
