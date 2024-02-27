import React, { useEffect, useState } from 'react'
import "./Flight.css";
import Navflight from './navflight/Navflight'
import Asideflight from "./asideflight/Asideflight";
import FlightCard from "./flightcard/FlightCard";
import { NavLink, useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';
import { getHeaderWithProjectId } from '../utils/services';
import axios from 'axios';
import { createPortal } from 'react-dom';
import Model from '../model/Model';


function Flight() {
  const flocation = useLocation()
  const [fapidata, setfapidata] = useState([])
  const [loading, setloading] = useState(false)
  const { src, dst, date } = flocation.state


  async function FlightData() {

    try {
      setloading(true)
      const res = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/flight?day=${date}&search={"source":"${src}","destination":"${dst}"}`, getHeaderWithProjectId())
      setfapidata(res.data.data.flights)
    } catch (err) {
      console.log("flightapi", err)
    } finally {
      setloading(false)
    }

  }



  useEffect(() => {
    FlightData()
  }, [src, dst, date])


  return (
    <section className='flight_container'>
 

      <div className='aside_main'>
        <div className='asidewrapper'>
           <Asideflight/>
        </div>
       

  {loading? createPortal(<Model/>,document.getElementById('portal')) :
        <div className='card'>

          <div className='card_nav'>
            <NavLink className="border_common">Best</NavLink>
            <NavLink className="border_common">Cheapest</NavLink>
            <NavLink className="border_common">Fastest</NavLink>
          </div>
          {/* --------------------API Call------------------------------------------------ */}
          <div className='div_card'>
          {fapidata.length>0 && fapidata.map((res)=>{
                     return <FlightCard data={res} key={res._id}/>
            })
          } 
      
          </div>
          {/* ---------------------------------------------------------------------------- */}
        </div>
    }
      </div>
  
      <Footer />
    
    </section>
  )
}

export default Flight
