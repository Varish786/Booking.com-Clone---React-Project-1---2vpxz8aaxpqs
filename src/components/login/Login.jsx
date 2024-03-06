import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Login.css"
import { formodel } from '../App'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { getHeaderWithProjectId } from '../utils/services';
import axios from 'axios';
import Footer from '../footer/Footer';

function Login() {
    const { setmodelvisible, setcurrency, setlistofproperty, setheader, setsignin, setregister, setisLogin, isLogin, settitle } = useContext(formodel)
    const navigate = useNavigate();
    const [sierror, setsierror] = useState();
    const navprev = useLocation();
    const emailRef = useRef();
    const passwordRef = useRef();

    const path = JSON.parse(sessionStorage.getItem("prev"));
    const copl = { ...navprev.state, logsDetails: { islog: true } }

    useEffect(() => {
        setsignin(false)
    }, [])

    const loginUser = async (user) => {
        const config = getHeaderWithProjectId();
        try {
            const res = await axios.post("https://academics.newtonschool.co/api/v1/user/login", { ...user, appType: "bookingportals" }, config);
            const token = res.data.token;
            const { name, email } = res.data.data;
            if (token) {
            
                sessionStorage.setItem("userToken", token);
                sessionStorage.setItem("user", JSON.stringify({ name, email }));


                if (path) {
                    navigate(path, { state: copl })
                    sessionStorage.removeItem("prev");
                    setisLogin(true)

                } else {
                    navigate("/")
                    setmodelvisible(true)
                    setheader(true)
                    setlistofproperty(true)
                    setcurrency(true)
                    setisLogin(true)
                    settitle(true)
                }
            }
        }
        catch (err) {
            if(err.response){
                setsierror(err.response.data.message);
                
            }else{
                setsierror(err.message);
            }
            
        }

    }


    function handleSignIn(e) {
        e.preventDefault()
        const usersiDetails = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        const { email, password } = usersiDetails;
        if (email) {
            if (password) {
                loginUser(usersiDetails)

                
            } else {
                setsierror("Enter Valid Password")
            }
        } else {
            setsierror("Enter Valid Email")
        }



    }
    return (
        <section className='login_container'>
            <div className='login_main'>

                <form className='form_signin'>
                    <h1>Sign In</h1>
                    <div className='email_signin'>
                        <label htmlFor="email" className='label'>Email</label>
                        <input type="email" placeholder='Email' ref={emailRef} />
                    </div>

                    <div className='password_signin'>
                        <label htmlFor="password" className='label'>Password</label>
                        <input type="password" placeholder='Password' ref={passwordRef} />
                    </div>
                    <button className='btn_signin' onClick={handleSignIn}>Sign In</button>
                    <p className='error'>{sierror}</p>
                </form>

            </div>
            <Footer/>
        </section>
    )
}

export default Login
