import React, { useState } from 'react'
import "./Asideflight.css"
import { NavLink } from 'react-router-dom'

function Asideflight() {


  return (
    <section className='aside_container'>

      <div className='aside_Main'>
        <div className='heading'>
          <h4 className='heading_filter'>Filters</h4>
          <p className='total_results'>Showing 609 results</p>
        </div>

        <div className='stops'>
          <h4 className='heading_stops'>Stops</h4>
          <div className='stops_flight_box'>
            <div className='box_stops'>
              <input type="radio" className='stops_input deadclick' name='stops' />
              <p>Any <br /><span>From INR24,988.34</span></p>
            </div>
            <p>609</p>
          </div>

          <div className='stops_flight_box'>
            <div className='box_stops'>
              <input type="radio" className='stops_input deadclick' name='stops' />
              <p>Direct only <br /><span>From INR42,988.34</span></p>
            </div>
            <p>25</p>
          </div>


          <div className='stops_flight_box'>
            <div className='box_stops'>
              <input type="radio" className='stops_input deadclick' name='stops' />
              <p>1 stop max <br /><span>From INR31,988.34</span></p>
            </div>
            <p>443</p>
          </div>
        </div>

        <div className='airlines'>

          <div className='stops'>
            <h4 className='heading_stops'>Airlines</h4>

            <div className='stops_flight_box'>
              <div className='box_stops'>
                <input type="checkbox" className='stops_input deadclick' name='stops' />
                <p>Air Arbia</p>
              </div>
              <p>34</p>
            </div>

            <div className='stops_flight_box'>
              <div className='box_stops'>
                <input type="checkbox" className='stops_input deadclick' name='stops' />
                <p>Air Arbia AbuDhabi</p>
              </div>
              <p>124</p>
            </div>

            <div className='stops_flight_box'>
              <div className='box_stops'>
                <input type="checkbox" className='stops_input deadclick' name='stops' />
                <p>Air India</p>
              </div>
              <p>60</p>
            </div>

            <div className='stops_flight_box'>
              <div className='box_stops'>
                <input type="checkbox" className='stops_input deadclick' name='stops' />
                <p>Egyptair</p>
              </div>
              <p>1</p>
            </div>

            <div className='stops_flight_box'>
              <div className='box_stops'>
                <input type="checkbox" className='stops_input deadclick' name='stops' />
                <p>Etihad Airways</p>
              </div>
              <p>338</p>
            </div>
            <p className='show_all'>Show all</p>
          </div>
        </div>


        <div className='flight_times'>
          <div className='stops'>
            <h4 className='heading_stops'>Flight times</h4>

            <div className='flight_outbound'>
              <NavLink  className='navlink deadclick'>Outbound flight</NavLink>
              <NavLink className="navlink deadclick">Return flight</NavLink>
            </div>

            <div className='times_of_flights'>
              <p>Departs from Delhi International Airport</p>

              <div className='departs_box'>
                <div className='departs_time'>
                  <input type="checkbox" className='input_departs deadclick'/>
                  <p>00:00-05:59</p>
                </div>
                <p>59</p>
              </div>

              <div className='departs_box'>
                <div className='departs_time'>
                  <input type="checkbox" className='input_departs deadclick'/>
                  <p>00:00-05:59</p>
                </div>
                <p>59</p>
              </div>

              <div className='departs_box'>
                <div className='departs_time'>
                  <input type="checkbox" className='input_departs deadclick'/>
                  <p>00:00-05:59</p>
                </div>
                <p>59</p>
              </div>

              <div className='departs_box'>
                <div className='departs_time'>
                  <input type="checkbox" className='input_departs deadclick'/>
                  <p>00:00-05:59</p>
                </div>
                <p>59</p>
              </div>

              <div className='departs_box'>
                <div className='departs_time'>
                  <input type="checkbox" className='input_departs deadclick'/>
                  <p>00:00-05:59</p>
                </div>
                <p>59</p>
              </div>

            </div>

            <div className='times_Arrive'>
              <p>Arrives at Abu Dhabhi</p>

              <div className='departs_box'>
                <div className='departs_time'>
                  <input type="checkbox" className='input_departs deadclick'/>
                  <p>00:00-05:59</p>
                </div>
                <p>59</p>
              </div>

              <div className='departs_box'>
                <div className='departs_time'>
                  <input type="checkbox" className='input_departs deadclick'/>
                  <p>00:00-05:59</p>
                </div>
                <p>59</p>
              </div>

              <div className='departs_box'>
                <div className='departs_time'>
                  <input type="checkbox" className='input_departs deadclick'/>
                  <p>00:00-05:59</p>
                </div>
                <p>59</p>
              </div>

              <div className='departs_box'>
                <div className='departs_time'>
                  <input type="checkbox" className='input_departs deadclick'/>
                  <p>00:00-05:59</p>
                </div>
                <p>59</p>
              </div>

              <div className='departs_box'>
                <div className='departs_time'>
                  <input type="checkbox" className='input_departs deadclick'/>
                  <p>00:00-05:59</p>
                </div>
                <p>59</p>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Asideflight
