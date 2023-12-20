import React, { useEffect } from 'react';
import "./fstater.css";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Trending from './trending/Trending';
import Subfooter from './subfooter/Subfooter';
import Footer from "../footer/Footer"


function Fstater() {
    const navigate=useNavigate()
    useEffect(()=>{
        navigate("/flights/int")    
    },[])

    return (
        <section className="fstarter_main">
            <div className='heading'>
                <h1>Popular flights near you</h1>
                <p>Find deals on domestic and international flights</p>
            </div>

            <ul className='tour_type'>
                <li className='in'>
                    <NavLink className='btn inter' to="/flights/int" >International</NavLink>
                </li>
                <li className='dom'>
                    <NavLink className='btn' to="/flights/dom">Domastic</NavLink>
                </li>
            </ul>
            <hr className="line" />

            <Outlet />

            <Trending/>
            <Subfooter/>

            <Footer/>

        </section>
    )
}

export default Fstater;
