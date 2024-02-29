import React, { useContext } from 'react'
import "./FlightCard.css"
import { Battery, Luggage, Takeoff, Takeon, Travelluggage } from '../../asserts/Icons'
import { useNavigate } from 'react-router-dom'
import { FlightSeatContext, flightdata } from '../../App'


function FlightCard({ data }) {
  const { flightcont, EditMovies } = useContext(FlightSeatContext)
  const navigate = useNavigate()
  const { source, destination, departureTime, arrivalTime, duration, stops, ticketPrice, _id } = data
  const { fdata, setfdata } = useContext(flightdata)
  const myDate = new Date(fdata.jsdate);
  const dayOfMonth = myDate.getDate();
  const month = myDate.toLocaleDateString('en-US', { month: 'short' });
  const checkdate = `${dayOfMonth} ${month}`;


    
  function handleSeeFlightbtn() {
    navigate(`/flights/result_flights/${_id}`, { state: { data: fdata } })
    EditMovies({ ...flightcont, trvel: fdata.traveller.traveler })
  }

  return (
    <section className='flight_card'>

      <div className='flight_card_main'>

        <div className='card_data'>

          <div className='left_flight_data'>

            <div className='flight_one'>
              <div className='flight_hr'>
                <div className='flight_icon'>
                  <Takeoff />
                  <h1>{departureTime}</h1>
                </div>

                <p>{duration} Hr</p>
                <div className='flight_icon'>
                  <Takeon />
                  <h1>{arrivalTime}</h1>
                </div>

              </div>

              <div className='line_flight'>
                <hr className='line_hr' />
              </div>


              <div className='flight_hr'>
                <p>{source}-{checkdate}</p>
                <p>{stops == 0 ? "Direct" : stops + " Stops"}</p>
                <p>{destination}-{checkdate}</p>
              </div>
            </div>
          </div>

          <div className='right_flight_data'>

            <div className='wrapdiv'>
              <div className='icons_flight'>
                <Battery />
                <Luggage />
                <Travelluggage />
                <p className='included'>Included:cabin bag</p>
              </div>
          

              <div className='wrapperprice'>
                <h1 className='price'>INR {ticketPrice.toLocaleString()}</h1>
                <p className='total'>Total price for all travellers</p>
              </div>
            </div>

         
            <button className='see_flight_btn' onClick={handleSeeFlightbtn}>See flight</button>
          </div>

        </div>


      </div>

    </section>
  )
}

export default FlightCard
