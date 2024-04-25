import React from 'react'

function Footer() {
    let time = new Date().getHours()
    const openHour = 10 ;
    const closeHour = 23;
    const open = time>=openHour&&time<=closeHour;
    console.log(open)





  return (
    <div className='footer'>
        <div className="order">
      <p>{open?`we are open until ${closeHour} come visit us or order online ` : `sorry ! we are closed but ypou can order online`}</p>
      <button className='btn'>order now</button>
        </div>
    </div>
  )
}

export default Footer
