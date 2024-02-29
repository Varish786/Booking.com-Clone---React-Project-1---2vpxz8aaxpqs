import React, { useEffect, useState } from 'react';
import "./Profile.css";
import Footer from '../footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Model from '../model/Model';
import { createPortal } from 'react-dom';
import { Takeoff } from '../asserts/Icons';

function Trip() {
    const [tripdata, settripdata] = useState([]);
    const [loading, setloading] = useState(false);

    const [fil, setfil] = useState({ hotel: false, flight: false })

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

            let dd = res.data.data.filter((data) => {
                if (fil[data.booking_type]) {
                    return data
                }
            })

            if (dd.length > 0) {
                settripdata(dd);
            } else {
                settripdata(res.data.data)
            }

        } catch (err) {
            throw ("trip", err)

        } finally {
            setloading(false);
        }
    }

    useEffect(() => {
        TotalTrip()
    }, [fil])

    //----------------------------------------------------------------
    const filterdata = (e) => {
        const { name } = e.target
        if (name == 'hotel') {
            setfil({ ...fil, hotel: e.target.checked })
        } else if (name == 'flight') {
            setfil({ ...fil, flight: e.target.checked })
        }
    }


    //----------------------------------------------------------------



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
            {/* -------------------------filter-------------------------------------- */}
            <div className='mainfilter'>
                <div className='one' onClick={filterdata} name="hotel">
                    <label htmlFor="hotel">Hotel</label>
                    <input type="checkbox" name="hotel" id="hotelfil" />
                </div>
                <div className='one' onClick={filterdata} name="flight">
                    <label htmlFor="flight">Flight</label>
                    <input type="checkbox" name="flight" id="flightfil" />
                </div>
                <div className='one' onClick={filterdata} name="flight+hotel" title='Coming Soon'>
                    <label htmlFor="flight+hotel">Flight+Hotel</label>
                    <input type="checkbox" name="flight+hotel" id="hffil" disabled />
                </div>
                <div className='one' onClick={filterdata} name="carrental" title='Coming Soon'>
                    <label htmlFor="carrental">Carrental</label>
                    <input type="checkbox" name="carrenta" id="carrentfil" disabled/>
                </div>
                <div className='one' onClick={filterdata} name="attractions" title='Coming Soon'>
                    <label htmlFor="attractions">Attractions</label>
                    <input type="checkbox" name="attractions" id="attfil" disabled/>
                </div>
                <div className='one' onClick={filterdata} name="airporttaxis" title='Coming Soon'>
                    <label htmlFor="airporttaxis">AirportTaxi</label>
                    <input type="checkbox" name="airporttaxis" id="hotelfil" disabled/>
                </div>

            </div>
            {/* ---------------------------------------------------------------- */}

            {loading ? createPortal(<Model />, document.getElementById('portal'))
                :
                <>
                    {tripdata.length > 0 && tripdata.map((data, ind) => {

                        return <div className='trip_box' key={ind}>
                            <div className='trip_booking'>
                                <p>Booking Type: {data.booking_type}</p>
                                <p>Booking on: {(new Date(data.created_at)).toDateString()}</p>
                            </div>

                            {data.booking_type === "hotel" ?
                                <div className='trip_hotel'>
                                    <h1 className='hotel_name'>{data.hotel.name}</h1>
                                    <p className='address'>{data.hotel.location}</p>
                                </div>
                                :
                                <div className='trip_hotel'>
                                    <h1 className='hotel_name'><Takeoff /></h1>

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
