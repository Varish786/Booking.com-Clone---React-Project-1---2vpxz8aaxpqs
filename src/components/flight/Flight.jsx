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
  const [act ,setact]=useState('')


  const Best=(data)=>{
     let best_data=data.sort((a,b)=>{
            return a.ticketPrice - b.ticketPrice
     })
     return best_data
  }
  const Fast=(data)=>{
     let fast_data=data.sort((a,b)=>{
            return a.duration - b.duration
     })
     return fast_data
  }

  async function FlightData() {

    try {
      setloading(true)
      const res = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/flight?day=${date}&search={"source":"${src}","destination":"${dst}"}`, getHeaderWithProjectId())
      
      if(act==='Cheapest'){
        setfapidata(Best(res.data.data.flights))
        
      }else if(act==='Fatest'){
        setfapidata(Fast(res.data.data.flights))
  
      }else{
        setfapidata(Best(res.data.data.flights))
        setact('Best')
      }
      
    } catch (err) {
      alert(err.message)
      console.log("flightapi", err.message)
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    FlightData()
  }, [src, dst, date,act])

//-------------------------------------------------------------------------------

const handleSort=(e)=>{
  e.preventDefault()
  const nm=e.target.getAttribute('name')
  setact(nm)

}
//-------------------------------------------------------------------------------


  return (
    <section className='flight_container'>
 

      <div className='aside_main'>
        <div className='asidewrapper'>
           <Asideflight/>
        </div>
       

  {loading? createPortal(<Model/>,document.getElementById('portal')) :
        <div className='card'>

          <div className='card_nav'>
            <NavLink className={`border_common ${act==='Best' && 'click'}`} name='Best' onClick={handleSort} >Best</NavLink>
            <NavLink className={`border_common ${act==='Cheapest' && 'click'}`} name='Cheapest' onClick={handleSort}>Cheapest</NavLink>
            <NavLink className={`border_common ${act==='Fatest' && 'click'}`} name='Fatest' onClick={handleSort}>Fastest</NavLink>
          </div>
          {/* --------------------API Call------------------------------------------------ */}
          <div className='div_card'>

          {
          fapidata.length>0 ?
          <>
          {
          fapidata.map((res)=>{
                     return <FlightCard data={res} key={res._id}/>
            })
          }
           </>
           :
           <h1 className='nodata'>No any flights try for different</h1>
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
