import React, { useContext, useEffect } from 'react'
import { Navigate, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import "./Hoteldetails.css"
import Footer from '../../footer/Footer';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import Payment from '../../paymentportal/Payment';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { formodel } from '../../App';
import axios from 'axios';
import Model from '../../model/Model';


function HotelDetails() {
     const { isLogin, setisLogin } = useContext(formodel)
     const [pay, setpay] = useState(false);
     const [room_data, setroom_data] = useState({});
     const [loading, setloading] = useState(false);
     // const [Qlogin,setQlogin]=useSearchParams();
     //------------------------------------------------------------
     const [dataDetail, setdataDetail] = useState([])
     const { id } = useParams();

     async function HotelAPI_Id(idhotel) {
          const config = {
               headers: {
                    projectID: "2vpxz8aaxpqs",
               }
          };

          try {
               setloading(true)
               const res = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${idhotel}`, config)
               setdataDetail(res.data.data)
          } catch (err) {
               console.log("error_hotel_card_API", err)
          } finally {
               setloading(false)
          }
     }

     useEffect(() => {
          HotelAPI_Id(id)

          // Qlogin.set("log","hello")
          // setQlogin(Qlogin)

     }, [id])

     const { name, location: place } = dataDetail;
     const data = dataDetail.rooms;


     //------------------------------------------------------------

     // const img1=dataDetail.images[0]
     //  console.log("data",dataDetail)
     // const loc = useLocation();
     // console.log("detail",loc.state.islog)
     // const img1 = loc.state.images[0];
     // const { name, location: place } = loc.state;
     // const data = loc.state.rooms;
     // console.log("detail",loc)
     // useEffect(() => {


     // }, [])

     //-----------------------------------------------------
     function handleBookNow(room) {
          setpay(true)
          // console.log("room",room)
          setroom_data({ ...room, name, place,id:id})
     }


     return (
          <>
               {loading ? createPortal(<Model />, document.getElementById('portal'))
                    :
                    <section className='detailcontainer'>
                         <ToastContainer
                              position="top-center"
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


                         <h1 className='heading_room'>Rooms Available in {name}</h1>

                         {dataDetail && <div className='card_main'>
                              {data && data.map((room) => {

                                   return <div className='card_detail' key={room._id}>
                                        <div className='img_room_div'>
                                             <img src={dataDetail.images[0]} alt="img" className='img_room' />
                                        </div>

                                        <div className='room'>
                                             <p className='Rtype'>Room Type</p>
                                             <p className='Rtype'>{room.roomType}</p>
                                        </div>
                                        <div className='room'>
                                             <p className='Rtype'>Bed Details</p>
                                             <p className='Rtype'>{room.bedDetail}</p>
                                        </div>
                                        <div className='room'>
                                             <p className='Rtype'>Room Size</p>
                                             <p className='Rtype'>{room.roomSize}</p>
                                        </div>

                                        <p className='Rprice'>₹{room.price}</p>

                                        <p className='book_now' onClick={() => handleBookNow(room)}>Book Now</p>

                                   </div>


                              })

                              }
                              {pay && <Payment setpay={setpay} room_data={room_data} />}

                         </div>
                         }

                         <Footer />

                    </section>

               }
          </>

     )


}

export default HotelDetails
