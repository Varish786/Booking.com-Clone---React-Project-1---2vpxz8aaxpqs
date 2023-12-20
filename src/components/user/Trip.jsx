import React, { useEffect, useState } from 'react';
import "./Profile.css";
import Footer from '../footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { SuccessToast } from '../paymentportal/Toast';
import axios from 'axios';
import { format } from "date-fns";
import Model from '../model/Model';
import { createPortal } from 'react-dom';
import { Takeoff } from '../asserts/Icons';

function Trip() {
    const [tripdata, settripdata] = useState([]);
    const [loading, setloading] = useState(false);

    // console(format("2023-12-11T11:48:24.128Z","d LLL yyy"))

    async function TotalTrip() {
        const config = {
            headers: {
                projectID: "2vpxz8aaxpqs",
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
            }
        }
        try {
            setloading(true)
            const res = await axios.get("https://academics.newtonschool.co/api/v1/bookingportals/booking", config);
            settripdata(res.data.data);
        } catch (err) {
            throw ("trip", err)

        } finally {
            setloading(false);
        }
    }

    useEffect(() => {
        TotalTrip()
    },[])

    true 

    return (
        <section>
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
            <h1 className='trip_head'>My Trips</h1>
            {loading ? createPortal(<Model />, document.getElementById('portal'))
                :
                <>
                    {tripdata.length > 0 && tripdata.map((data, ind) => {

                        return <div className='trip_box' key={ind}>
                            <div className='trip_booking'>
                                <p>Booking Type: {data.booking_type}</p>
                                <p>Booking on: {(new Date(data.created_at)).toDateString()}</p>
                            </div>

                       {data.booking_type==="hotel"?
                            <div className='trip_hotel'>
                                <h1 className='hotel_name'>{data.hotel.name}</h1>
                                <p className='address'>{data.hotel.location}</p>
                            </div>
                            :
                            <div className='trip_hotel'>
                                 <h1 className='hotel_name'><Takeoff/></h1>
                                
                           </div>
                          
                          }

                            <div className='booking_status'>
                                <p className='status'>Booking Status: <span className='confirm'>{data.status}</span></p>
                                <p>Booking Id: {data._id}</p>
                            </div>
                        </div>
                    })
                    }
                </>
            }
            <Footer />

        </section>
    )
}


export default Trip
