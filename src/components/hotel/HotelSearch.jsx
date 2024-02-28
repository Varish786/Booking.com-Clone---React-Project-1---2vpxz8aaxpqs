import React, { useContext, useEffect, useState } from 'react';
import "../hotel/HotelSearch";
import BreadCrumbs from './breadcrumbs/BreadCrumbs';
import Asidehotel from './aside/Asidehotel';
import Hotelcard from './hotelcard/Hotelcard';
import "../hotel/HotelSearch.css";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { formodel, hoteldata } from '../App';
import Model from '../model/Model';
import { createPortal } from 'react-dom'


function HotelSearch() {

  const { options, setoptions, location, setlocation, date, setdate } = useContext(hoteldata)

  const [hoteldata_api, sethoteldata_api] = useState([]);
  const [loading, setloading] = useState(false);
  const loc = useLocation()



  //----------------------Hotel API Call-----------------------
  async function Hotel_Data_Api_Call(place) {
    const config = {
      headers: {
        projectID: "2vpxz8aaxpqs",
      },
    };

    try {
      setloading(true)
      const res = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${place}"}`, config)
      sethoteldata_api(res.data.data.hotels)

    } catch (err) {
      console.log("error_hotel_card_API", err)
    } finally {
      setloading(false)
    }

  }

  useEffect(() => {
    Hotel_Data_Api_Call(loc.state)

  }, [loc.state])

  
  const freecancel=hoteldata_api.filter((res)=>{
    return res.rooms.map((cancel)=>{
       return cancel.cancellationPolicy!==null
    })
  })


  //-----------------------------------------------------------


  return (
    <section >
      <BreadCrumbs />

    <section className='hotel_search_container'>
      <div className='asidewraper'>
         <Asidehotel/>
      </div>

      <div className='cardcontainer'>
        {loading ? createPortal(<Model />, document.getElementById('portal')) :


          <>
           {hoteldata_api.length>0 && <div className='headinghotel'>
              <h1>{loc.state}:{hoteldata_api.length} properties Found</h1>

              <div className='hotelfaccontainer deadclick' title='Coming Soon'>

                <div className='hotelfactlity'>
                  <p>Sort by:Top picks for long stays</p>
                </div>

                <div className='hotelfactlity'>
                  <p>Free cancellation({freecancel.length})</p>
                </div>

                <div className='hotelfactlity'>
                  <p>Hotels({hoteldata_api.length})</p>
                </div>

                <div className='hotelfactlity'>
                  <p>Breakfast included(26)</p>
                </div>

                <div className='hotelfactlity'>
                  <p>Very good:8+(11)</p>
                </div>

                <div className='hotelfactlity'>
                  <p>Apartments(1)</p>
                </div>

              </div>
            </div>
           }
          <div className='eachcard'>
            {
              hoteldata_api.length > 0 && hoteldata_api.map((res_data) => {
                return <Hotelcard data={res_data} key={res_data._id} />
              })
            }
          </div>
          </>
        }
      </div>
    </section>

    </section>
  )
}

export default HotelSearch
