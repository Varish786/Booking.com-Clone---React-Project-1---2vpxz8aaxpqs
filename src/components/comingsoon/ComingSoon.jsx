import React from 'react'
import './comingsoon.css'
import comingsoon from '../asserts/comingsoon.jpg'


const ComingSoon = () => {
  return (
  <main className='maindiv'>
    <div className='Soonpage'>
        <img src={comingsoon} alt="ComingSoon"  className='imgsoon'/>
    </div>
  </main>
  )
}

export default ComingSoon