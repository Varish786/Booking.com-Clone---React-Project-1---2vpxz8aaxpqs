import React, { useContext, useEffect, useState } from 'react';
import "./Nav.css";
import flag from '../asserts/flag.png';
import Header from './header/Header';
import Search from './searchbar/Search';
import Title from './header/Title';
import { useNavigate, useParams } from 'react-router-dom';
import { formodel, hoteldata } from '../App';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from "date-fns";
import { DatasetLinked } from '@mui/icons-material';


export function Nav() {
    const navigate = useNavigate();
    const [title, settitle] = useState(true);
    const [logout_model, setlogout_model] = useState(false);
    const [user, setuser] = useState({});
    const [search_active, setsearch_active] = useState(false);

    const { options, setoptions, location, setlocation, date, setdate } = useContext(hoteldata);
    const { modelvisible, setmodelvisible, currency, listofproperty, setcurrency, setlistofproperty, header, setheader, signin, setsignin, register, setregister, isLogin, setisLogin } = useContext(formodel)
    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setuser(JSON.parse(sessionStorage.getItem("user")));
        }
    }, [isLogin])

    // console.log(user)
    // -------------------Working on Title-----------------------------------------------------
    useEffect(() => {
        const saved_title = window.sessionStorage.getItem("title");
        if (saved_title != null) settitle(JSON.parse(saved_title))

    }, [])

    useEffect(() => {
        window.sessionStorage.setItem("title", JSON.stringify(title))
    }, [title])

    // ---------------------Woking For model and Search bar-------------------------------------
    useEffect(() => {
        const saved_model = window.sessionStorage.getItem("hotelmodel");
        if (saved_model != null) setmodelvisible(JSON.parse(saved_model))

    }, [])


    useEffect(() => {
        window.sessionStorage.setItem("hotelmodel", JSON.stringify(modelvisible))
    }, [modelvisible])
    // -----------------------------Currency-----------------------------------------------------------

    useEffect(() => {
        const saved_currency = window.sessionStorage.getItem("currency");
        if (saved_currency != null) setcurrency(JSON.parse(saved_currency))

    }, [])


    useEffect(() => {
        window.sessionStorage.setItem("currency", JSON.stringify(currency))
    }, [currency])

    //---------------------------------property---------------------------------------------------------------
    useEffect(() => {
        const saved_listofproperty = window.sessionStorage.getItem("listofproperty");
        if (saved_listofproperty != null) setlistofproperty(JSON.parse(saved_listofproperty))

    }, [])


    useEffect(() => {
        window.sessionStorage.setItem("listofproperty", JSON.stringify(listofproperty))
    }, [listofproperty])

    //---------------------------------header------------------------------------------------------------------
    useEffect(() => {
        const saved_header = window.sessionStorage.getItem("header");
        if (saved_header != null) setheader(JSON.parse(saved_header))

    }, [])


    useEffect(() => {
        window.sessionStorage.setItem("header", JSON.stringify(header))
    }, [header])
    //----------------------------------Signin----------------------------------------------------------------------
    useEffect(() => {
        const saved_signin = window.sessionStorage.getItem("signin");
        if (saved_signin != null) setsignin(JSON.parse(saved_signin))

    }, [])


    useEffect(() => {
        window.sessionStorage.setItem("signin", JSON.stringify(signin))
    }, [signin])
    //----------------------------------Register----------------------------------------------------------------------
    useEffect(() => {
        const saved_register = window.sessionStorage.getItem("register");
        if (saved_register != null) setregister(JSON.parse(saved_register))

    }, [])


    useEffect(() => {
        window.sessionStorage.setItem("register", JSON.stringify(register))
    }, [register])

    //------------------------------------isLogin----------------------------------------------------------------------
    useEffect(() => {
        const saved_isLogin = sessionStorage.getItem("isLogin");
        if (saved_isLogin != null) setisLogin(JSON.parse(saved_isLogin))

    }, [])


    useEffect(() => {
        sessionStorage.setItem("isLogin", JSON.stringify(isLogin))
    }, [isLogin])


    //------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        const saved_options = window.sessionStorage.getItem("options");
        const saved_location = window.sessionStorage.getItem("location");
        const saved_date = window.sessionStorage.getItem("date");
        if (saved_options != null) setoptions(JSON.parse(saved_options))
        if (saved_location != null) setlocation(JSON.parse(saved_location))
        if (saved_date != null) setdate([{ startDate: new Date(JSON.parse(saved_date)[0].startDate), endDate: new Date(JSON.parse(saved_date)[0].endDate) }])
    }, [])


    useEffect(() => {
        window.sessionStorage.setItem("options", JSON.stringify(options))
        window.sessionStorage.setItem("location", JSON.stringify(location))
        window.sessionStorage.setItem("date", JSON.stringify(date))
    }, [options, location, date])
    //------------------------------------------------------------------------------------------------------------

    function handleSignin() {
        navigate("/login")
        setmodelvisible(false)
        settitle(false)
        setheader(false)
        setsignin(false)
        setlistofproperty(false)
        setcurrency(false)
        setregister(true)

    }

    function handleRegister() {
        navigate("/register")
        setmodelvisible(false)
        settitle(false)
        setheader(false)
        setsignin(true)
        setlistofproperty(false)
        setcurrency(false)
        setregister(false)
    }

    function handleBookingcom() {
        navigate("/")
        settitle(true)
        setmodelvisible(true)
        setheader(true)
        setsignin(true)
        setregister(true)

        setcurrency(true);
        setlistofproperty(true);
    }

    function handleUser() {
        setlogout_model((prev) => !prev)
    }

    function handleLogout() {
        navigate("/login")
        setlogout_model(false)
        setisLogin(false)
        setmodelvisible(false)
        settitle(false)
        setheader(false)
        setsignin(false)
        setlistofproperty(false)
        setcurrency(true)
        setregister(true)
        sessionStorage.removeItem("user")
        sessionStorage.removeItem("userToken")
        setuser({})

    }
    function Common(trans) {
        setmodelvisible(false)
        setheader(true)
        setlistofproperty(false)
        setcurrency(true)
        setlogout_model(false)
        setsearch_active(false)
        settitle(false)
        navigate(`/${trans}`)
    }
    function handleProfile() {
        Common("profile")
    }
    function handleTrip() {
        Common("Trip")
    }

    return (
        <div className='main'>

            <div className='navcontainer'>
                <div className='leftnav' onClick={handleBookingcom}>
                    <h1 className='logo'>Booking.com</h1>
                </div>

                <div className='rightnav'>

                    {currency && <p className='currency'>&#8377;</p>}

                    <div className='flag'>
                        <img src={flag} alt="flag" />
                    </div>
                    <span className='ques'>?</span>

                    {listofproperty && <h4 className='listupro'>List your property</h4>}

                    {isLogin ?
                        <div>
                            <div className='user_icon' onClick={handleUser}>
                                <FontAwesomeIcon icon={faUser} />
                                <p className='name_user'>{user.name}</p>
                            </div>
                            {
                                logout_model &&
                                <div className='user_model'>
                                    <p className='option' onClick={handleTrip}>My Trip</p>
                                    <p className='option' onClick={handleProfile}>Profile</p>
                                    <p onClick={handleLogout} className='option'>Logout</p>
                                </div>
                            }

                        </div>
                        :
                        <div className='btnnav'>
                            {register && <button onClick={handleRegister} className='btnstyle'>Register</button>}
                            {signin && <button onClick={handleSignin} className='btnstyle'>Sign in</button>}
                        </div>

                    }
                </div>
            </div>
            {header && <Header settitle={settitle} search_active={search_active} setsearch_active={setsearch_active} />}
            {title && <Title />}
            {modelvisible && <Search settitle={settitle} search_active={search_active} setsearch_active={setsearch_active} />}
        </div>
    )
}

export default Nav;




