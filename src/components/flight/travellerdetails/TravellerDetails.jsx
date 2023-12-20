import React, { useContext } from 'react'
import "./travellerdetails.css"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../footer/Footer';



function TravellerDetails() {
  
  const navigate = useNavigate();
  const loc = useLocation();
  const { dst, src, date } = loc.state.pass
  const { seat } = loc.state
  const { id } = useParams()



  function handdelNextbtn(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get("email")
    const mob = formData.get("contact")
    const first = formData.get("firstnm")
    const last = formData.get("lastnm")
    const gender = formData.getAll("gender")

    if (email && mob && first && last && gender) {
  
      navigate(`/flights/result_flights/${id}/travellerdetails/payment`, { state: { pass: loc.state.pass, idapidata: loc.state.idapidata, seat: loc.state.seat} })
    } else {
      console.log("provide all details")
    }

  }



  return (
    <section>
      <main className='passengerdetails'>
        <form onSubmit={handdelNextbtn}>
          <ul className='trv'>
            <li>{loc.state.pass.traveller.traveler} Traveller</li>
            <li>{date}</li>
          </ul>

          <div className='plc'>
            <h2 className='trvelhed'>Traveler Details</h2>
            <h1 className='place'>{src} To {dst}</h1>
          </div>

          <div className='contactdetails'>
            <h3 className='conthead'>Contact Details</h3>
            <div className='contdetail'>

              <div className='cont1'>
                <p className='contemail'>Contact Email</p>

                <input type="email" placeholder='Enter your Email' className='contin' name="email" required />

                <p className='contpara'>We shall dispatch the confirmation of your flight shortly.</p>
              </div>

              <div className='cont2'>
                <p className='contnum'>Contact Number</p>
                <input type="text" placeholder='XXXXXXXXXX' className='contin' name="contact" pattern="[0-9]{10}"  required />

                <div className='contnot'>
                  <input type="checkbox" className='contcheck' />
                  <p className='notipara'>Receive complimentary SMS notifications regarding the status of your flight.</p>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------Traveler--------------------------------------------------------------- */}
          {seat.map((res, ind) => (

            <div className='contactdetails bugap' key={res}>
              <h3 className='conthead'>Traveller: {ind + 1}</h3>
              <div className='contdetail'>

                <div className='wrapper'>
                  <div className='cont3'>
                    <p className='contemail'>Last Name</p>
                    <input type="text" placeholder='First Name' className='contint' name="firstnm" required />
                    <p className='contpara'>As Per goverment Document</p>
                  </div>

                  <div className='cont3'>
                    <p className='contemail'>First Name</p>
                    <input type="text" placeholder='Last Name' className='contint' name="lastnm" required />
                    <p className='contpara'>As Per goverment Document</p>
                  </div>
                </div>

                <div className='cont2'>
                  <p className='contnum'>Gender</p>
                  <select name="gender" className='contin' required>
                    <option value="" disabled selected>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                  <p>*We are currently mandated by airlines and service providers to request this information</p>

                </div>
              </div>
            </div>
          ))
          }

          <button className='btnnext' type='submit'>Next</button>
        </form>
      </main>
      <Footer />

    </section>
  )
}

export default TravellerDetails
