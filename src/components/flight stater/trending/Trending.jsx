import React from 'react'
import "./trending.css"
import newyork from "../../asserts/tour/international/newyork.jpg"
import newdelhi from "../../asserts/tour/domastic/newdelhi.jpg"
import kolkata from "../../asserts/tour/domastic/kolkata.jpg"
import london from "../../asserts/tour/international/london.jpg"
import dehradun from "../../asserts/tour/domastic/dehradun.jpg"

function Trending() {
  return (
    <sectioon className="trending_main">
      <div className='heading_trending'>
        <h1>Trending cities</h1>
        <p>Book flights to a destination popular with travelers from India</p>
      </div>

      <main className='trend_container'>
        <div className='card deadclick' title='Coming Soon'>
          <img src={newyork} alt="newyork" className='img' />
          <h3 className='des_place'>New York, USA</h3>
          <p className='des_date'>Dec 18-Dec 25.Round trip</p>
        </div>
        <div className='card deadclick' title='Coming Soon'>
        <img src={dehradun} alt="dehradun" className='img' />
        <h3 className='des_place'>Dehradun, India</h3>
        <p className='des_date'>Dec 18-Dec 25.Round trip</p>
      </div>

        <div className='card deadclick' title='Coming Soon'>
        <img src={newdelhi} alt="newdelhi" className='img' />
        <h3 className='des_place'>New Delhi, India</h3>
        <p className='des_date'>Dec 18-Dec 25.Round Trip</p>
      </div>

      <div className='card deadclick' title='Coming Soon'>
        <img src={kolkata} alt="kolkata" className='img' />
        <h3 className='des_place'>Kolkata, India</h3>
        <p className='des_date'>Dec 18-Dec 25.Round trip</p>
      </div>

      <div className='card deadclick' title='Coming Soon'>
          <img src={london} alt="london" className='img' />
          <h3 className='des_place'>London, UK</h3>
          <p className='des_date'>Dec 18-Dec 25.Round trip</p>
        </div>
  
      </main>
    </sectioon>
  )
}

export default Trending
