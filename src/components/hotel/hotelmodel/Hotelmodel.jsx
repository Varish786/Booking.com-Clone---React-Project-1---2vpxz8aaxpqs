import React, { useState, useEffect, useContext } from 'react'
import BreadCrumbs from '../breadcrumbs/BreadCrumbs'
import "./Hotelmodel.css"
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aside from './hotelmodelaside/Aside'
import Main from './hotelmodelmain/Main'
import Footermodel from './hotelmodelfooter/Footermodel'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Model from '../../model/Model'
import Footer from '../../footer/Footer'
import { createPortal } from 'react-dom'




function Hotelmodel() {

  const [searchhide, setsearchhide] = useState(true)
  const [loading, setloading] = useState(false);

  //-------------------API Calling Hotel id--------------------------------------------------------------

  const [databyid, setdatabyid] = useState([])
  const { id } = useParams();

  async function HotelAPI_Id(idhotel) {
    const config = {
      headers: {
        projectID: "2vpxz8aaxpqs",
      },
    };

    try {
      setloading(true)
      const res = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${idhotel}`, config)
      setdatabyid(res.data.data)
    } catch (err) {
      console.log("error_hotel_card_API", err)
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    HotelAPI_Id(id)

  }, [])
  //-------------------------------------------------------------------------------------

  return (

    <section className='main_container_model'>
   {loading ? createPortal(<Model/>,document.getElementById('portal')) :
      <>
        <div className='conatiner_nav_model'>
          <BreadCrumbs search={searchhide} />
          <p className='hotelname'>{databyid.name}</p>
        </div>

        <div className='container_nav_btn' title='Coming Soon'>
          <button className='btn deadclick'><FontAwesomeIcon icon={faTag} /> We Price Match</button>
          <button className='btn deadclick'>Info&prices</button>
          <button className='btn deadclick'>Facilities</button>
          <button className='btn deadclick'>House rules</button>
          <button className='btn deadclick'>Guest reviews(42)</button>
        </div>

        <div className='main_model_data'>
          <div className='asidemodel'>
              <Aside />
          </div>
        
          {Object.entries(databyid).length > 0 && <Main data={databyid} />}
        </div>

        <div className='footer'>
          <Footermodel  data={databyid}/>
        </div>
        <Footer/>
      </>
    }
    </section>


  )

}

export default Hotelmodel
