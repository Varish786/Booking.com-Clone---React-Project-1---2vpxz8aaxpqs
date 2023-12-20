import React, { useContext, useEffect, useState } from 'react';
import "../hotel/HotelSearch";
import BreadCrumbs from './breadcrumbs/BreadCrumbs';
import Asidehotel from './aside/Asidehotel';
import Hotelcard from './hotelcard/Hotelcard';
import "../hotel/HotelSearch.css";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { formodel, hoteldata } from '../App';
import { getHeaderWithProjectId } from '../utils/services';
import Model from '../model/Model';
import { createPortal } from 'react-dom'
import Footer from '../footer/Footer';





function HotelSearch() {
  // const location=useLocation();
  // console.log(location.pathname);   to get the URL data
  const { options, setoptions, location, setlocation, date, setdate } = useContext(hoteldata)

  const [hoteldata_api, sethoteldata_api] = useState([]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const loc=useLocation()
  


  //----------------------Hotel API Call-----------------------
  async function Hotel_Data_Api_Call(place) {
    // const token = sessionStorage.getItem('userToken')
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
  

 
  //-----------------------------------------------------------




  return (
    <section className='hotel_search_container'>
      <BreadCrumbs />

      <Asidehotel data={hoteldata_api} loc={loc.state}/>

      <div className='cardcontainer'>
        {loading? createPortal(<Model/>,document.getElementById('portal')) :
        
        <div className='eachcard'>
        {
          hoteldata_api.length > 0 && hoteldata_api.map((res_data) => {
                return  <Hotelcard data={res_data} key={res_data._id} />
          })
        }
        </div>

         }

        
      </div>
     
      
    </section>
  )
}

export default HotelSearch
