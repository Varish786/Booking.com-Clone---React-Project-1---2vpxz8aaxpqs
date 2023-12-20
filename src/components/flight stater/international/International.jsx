
import bangkok from "../../asserts/tour/international/bangkok.jpg"
import dubai from "../../asserts/tour/international/dubai.jpg"
import jeddah from "../../asserts/tour/international/jeddah.jpg"
import london from "../../asserts/tour/international/london.jpg"
import newyork from "../../asserts/tour/international/newyork.jpg"
import "./international.css"

function International() {
  return (
    <section className='inter_main'>

      <main className='inter_container'>

        <div className='card'>
          <img src={bangkok} alt="bangkok" className='img'/>
          <h3 className='des_place'>Bankok</h3>
          <p className='des_date'>Dec 18-Dec 25.Round trip</p>
        </div>
        <div className='card'>
          <img src={dubai} alt="dubai" className='img' />
          <h3 className='des_place'>Dubai</h3>
          <p className='des_date'>Dec 15-Dec 22.Round trip</p>
        </div>
        <div className='card'>
          <img src={jeddah} alt="jeddah" className='img' />
          <h3 className='des_place'>Jeddah</h3>
          <p className='des_date'>Dec 19-Dec 26.Round trip</p>
        </div>
        <div className='card'>
          <img src={london} alt="london" className='img' />
          <h3 className='des_place'>London</h3>
          <p className='des_date'>Dec 18-Dec 25.Round trip</p>
        </div>
        <div className='card'>
          <img src={newyork} alt="newyork" className='img' />
          <h3 className='des_place'>New York</h3>
          <p className='des_date'>Dec 18-Dec 25.Round Trip</p>
        </div>

      </main>

    </section>
  )
}

export default International
