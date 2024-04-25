import React from 'react'

function Pizza({name,  ingredients, price , photoName, soldOut}) {
   
  return (
    <div className={soldOut ? `pizza.sold-out pizza`:`pizza`}>
        <img src={photoName} alt="Pizza-photo" />
        <div>
            <h3>{name}</h3>
            <p>{ingredients}</p> 
            <span> {soldOut? `Sold Out` : ` price: ${price}`} </span>
        </div>
      
    </div>
  )
}

export default Pizza
