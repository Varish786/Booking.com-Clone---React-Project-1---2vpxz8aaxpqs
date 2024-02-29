import React, { useContext, useEffect, useState } from 'react';
import "../flightsearchbar/Flightsearch.css";
import { Takeoff, Takeon, Exchange } from "../../asserts/Icons"
import { FlightSeatContext, flightdata } from '../../App';
import { useNavigate } from 'react-router-dom';
import { ErrorToast } from "../../paymentportal/Toast"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import flightcodes from '../../asserts/airports.json'




function FlightSearchBar({ dropdown, options, setoptions }) {
    const { fdata, setfdata } = useContext(flightdata)
    const navigate = useNavigate()
    const [fcode,setfcode]=useState([])
    
    useEffect(()=>{
        setfcode(flightcodes.airports)
    },[])


    //----------------------------state mention------------------------------------------
    function handleInput(e) {
     
        setfdata((prev) => ({ ...prev, [e.target.name]: e.target.value.split(" ")[0] }))
    }
    //-------------------------------------------------------------------------------------

    function handleSearchFlight() {

        const { src, dst, jsdate } = fdata;
        if (src) {
            if (dst) {
                if (jsdate) {

                    const myDate = new Date(fdata.jsdate)
                    const dayOfWeek = myDate.toLocaleDateString('en-US', { weekday: 'short' });
                    const dayOfMonth = myDate.getDate();
                    const month = myDate.toLocaleDateString('en-US', { month: 'short' });
                    const checkdate = `${dayOfWeek} ${dayOfMonth} ${month}`;

                    const userfdetails = {
                        date: dayOfWeek,
                        src,
                        dst
                    }

                    setfdata((prev) => { return { ...prev, date: checkdate, class: dropdown, traveller: options } })

                    navigate("flights/result_flights", { state: userfdetails })


                } else {
                    ErrorToast("Enter date of Flight")
                }
            } else {
                ErrorToast("Enter destination of Flight")
            }
        } else {
            ErrorToast("Enter source of Flight")
        }

    }
    //-----------------------------------------------------------------------
    function handelSwap() {
        setfdata((prev) => {
            const { src, dst } = prev;
            return {
                ...prev,
                src: dst,
                dst: src
            }
        })
    }

    return (
        <section className='searchbar_container'>
            <ToastContainer
                position="top-right"
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


            <div className='searchbar_main'>

                <div className='from'>
                    <Takeoff />
                    <input type="text" className='inputfrom' placeholder='Where from ?' onChange={handleInput} name="src" value={fdata ? fdata.src : ""} list='fdata'/>
                    <datalist id='fdata'>
                        {fcode.map((op,ind)=>{
                             return <option key={ind}>{op.IATA_code + " "+ op.city_name}</option>
                        })}
                    </datalist>
                      
                </div>

                <div className='exchangebtn' onClick={handelSwap}>
                    <Exchange />
                </div>

                <div className='to'>
                    <Takeon />
                    <input type="text" placeholder='Where to ?' className='inputto' onChange={handleInput} name="dst" value={fdata ? fdata.dst : ""}  list='fdata'/>
                    <datalist id='fdata'>
                        {fcode.map((op)=>{
                             return <option>{op.IATA_code + " "+ op.city_name}</option>
                        })}
                    </datalist>
                </div>

                <div className='datebox'>
                    {/* <Calender width="25px" height="25px" /> */}
                    <input type="date" className="input-field  date" onChange={handleInput} name="jsdate" value={fdata ? fdata.jsdate : ""}  min={new Date().toISOString().split('T')[0]}/>

                </div>

                <button className='searchflightbtn' onClick={handleSearchFlight}>Search</button>

            </div>
        </section>
    )
}

export default FlightSearchBar


