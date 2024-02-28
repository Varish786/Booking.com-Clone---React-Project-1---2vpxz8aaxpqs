import dehradun from "../../asserts/tour/domastic/dehradun.jpg"
import jaipur from "../../asserts/tour/domastic/jaipur.jpg"
import jammu from "../../asserts/tour/domastic/jammu.jpg"
import kolkata from "../../asserts/tour/domastic/kolkata.jpg"
import newdelhi from "../../asserts/tour/domastic/newdelhi.jpg"
import "./domastic.css"

function Domastic() {
  return (
    <section className='dom_main'>
      <main className='dom_container'>
      <div className='card deadclick' title='Coming Soon'>
        <img src={dehradun} alt="dehradun" className='img' />
        <h3 className='des_place'>Dehradun</h3>
        <p className='des_date'>Dec 18-Dec 25.Round trip</p>
      </div>
      <div className='card deadclick' title='Coming Soon'>
        <img src={jaipur} alt="jaipur" className='img' />
        <h3 className='des_place'>Jaipur</h3>
        <p className='des_date'>Dec 15-Dec 22.Round trip</p>
      </div>
      <div className='card deadclick' title='Coming Soon'>
        <img src={jammu} alt="jammu" className='img' />
        <h3 className='des_place'>Jammu</h3>
        <p className='des_date'>Dec 19-Dec 26.Round trip</p>
      </div>
      <div className='card deadclick' title='Coming Soon'>
        <img src={kolkata} alt="kolkata" className='img' />
        <h3 className='des_place'>Kolkata</h3>
        <p className='des_date'>Dec 18-Dec 25.Round trip</p>
      </div>
      <div className='card deadclick' title='Coming Soon'>
        <img src={newdelhi} alt="newdelhi" className='img' />
        <h3 className='des_place'>New Delhi</h3>
        <p className='des_date'>Dec 18-Dec 25.Round Trip</p>
      </div>

    </main>
    </section >
  )
}

export default Domastic
