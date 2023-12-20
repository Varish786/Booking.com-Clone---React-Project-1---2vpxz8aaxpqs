import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { getHeaderWithProjectId } from '../../utils/services'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import "./flightdetails.css"
import Seatmatrix from '../seatselect/Seatmatrix'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FlightSeatContext, formodel } from '../../App'
import Model from '../../model/Model'
import { createPortal } from 'react-dom'
import { ErrorToast } from '../../paymentportal/Toast'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../footer/Footer'




function FlightDetails() {
  const { isLogin, setisLogin } = useContext(formodel)
  const { flightcont, EditMovies } = useContext(FlightSeatContext)
  const [loading, setloading] = useState(false)
  const [apiid, setapiid] = useState(null)
  const [dropdown, setdropdown] = useState(false)
  const locflightdetails = useLocation();
  const navigate = useNavigate()
  const { id } = useParams()
  const { traveller } = locflightdetails.state.data
  const { date } = locflightdetails.state.data
   
  
  //---------------------API---------------------------------------
  async function handleAPibyID(flightId) {
    try {
      setloading(true)
      const res = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/flight/${flightId}`, getHeaderWithProjectId())
      setapiid(res.data.data)
    } catch (err) {
      console.log("err in apii id", err)
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    handleAPibyID(id)
  }, [id])

  //------------------------Dropdown-----------------------------
  function handleSeatSelect() {
    setdropdown((prev) => !prev)

  }
  //----------------------Effect to reset the seat----------------
  useEffect(() => {
    EditMovies({ ...flightcont, trvel: traveller.traveler ,seatNumbers:[]})
  }, [])
   
  //----------------------Confirm Btn-----------------------------
  function handleConfirmSeatBtn() {
    const logsDetails={
      islog:isLogin,
      
   }

    if (flightcont.trvel === 0) {
      navigate(`/flights/result_flights/${id}/travellerdetails`,{state:{pass:locflightdetails.state.data,seat:flightcont.seatNumbers,idapidata:apiid,logsDetails:logsDetails}})
    } else {
      ErrorToast("Please select all the seats")
    }
  }





  return (
    <section className='fdetail_container'>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {loading ? createPortal(<Model />, document.getElementById('portal')) :

        apiid && <main className='fdetail_main'>
          <ul className='fpasssub'>
            <li className='ftravel'>{traveller.traveler} Traveller</li>
            <li className='fdate'>{date}</li>
          </ul>


          <div className='fsrcdstdet'>
            <h1 className='fsrds'>{apiid.source} to {apiid.destination}</h1>
            <button className='fconfbtn' onClick={handleConfirmSeatBtn}>Next</button>
          </div>

          <div className='fotherd'>
            <h3 className='h1sele'>Select your seat</h3>
            <div className={dropdown ? "dropdown" : "ticksum"}>
              <p className='fsrds'>{apiid.source}-{apiid.destination}</p>
              <div className={dropdown ? "up" : 'ftimetake'}>
                <p>3 hour</p>

                <div onClick={handleSeatSelect} className='cur'>
                  {
                    dropdown ? <FontAwesomeIcon icon={faAngleUp} /> :
                      <FontAwesomeIcon icon={faAngleDown} />
                  }
                </div>

              </div>
              <p className='seatbook'>Seat number:{(flightcont.seatNumbers).join(",")}</p>
              {dropdown && <Seatmatrix />}
            </div>
          </div>

          {/* -------------------------------------------------------------- */}

          <div className='fotherd'>
            <h3 className='h1sele'>Ticket Summary</h3>
            <div className="ticksum">
              <p className='fsrds'>{apiid.source}-{apiid.destination}</p>
              <p className='seatbook'>Flight Departure Time: {apiid.departureTime}</p>
              <p className='seatbook'>Flight Arrival Time: {apiid.arrivalTime}</p>
              <p className='seatbook'>Duration: {apiid.duration} Hour</p>

              <div className='ameties'>
                <p className='seatbook'>Amenities:</p>
                <ul className='seatbook lis'>
                  <li>{apiid.amenities[0]}</li>
                  <li>{apiid.amenities[1]}</li>
                </ul>
              </div>

              <p className='seatbook'>Flight ID: {apiid.flightID}</p>
            </div>
          </div>

          {/* -------------------------------------------------------------- */}

          <div className='fotherd'>
            <h3 className='h1sele'>Fare Summary</h3>
            <div className="ticksum">
              <p className='fsrds'>Ticket(Traveller)</p>
              <p className='seatbook dim'>Flight Fare: INR {apiid.ticketPrice.toLocaleString()}</p>
              <p className='seatbook dim'>Taxes and Charges:INR {Math.floor(apiid.ticketPrice * traveller.traveler*0.1)}</p>
              <h1 className='seatbook'>Total: INR {(apiid.ticketPrice * traveller.traveler).toLocaleString()}</h1>
              <p className='seatbook dim'>Includes taxes and charges</p>
              <p className='seatbook fees'><FontAwesomeIcon icon={faCheck} /> No Hidden Fees</p>
              <button className='fconfbtn' onClick={handleConfirmSeatBtn}>Next</button>
            </div>
          </div>



        </main>


      }

      <Footer/>

    </section>

  )
}

export default FlightDetails
