import React, { useContext, useRef, useState } from 'react'
import "./Register.css"
import axios from 'axios';
import { getHeaderWithProjectId } from '../utils/services';
import { useNavigate } from 'react-router-dom';
import { formodel } from '../App';


function Register() {
  const { modelvisible, setmodelvisible, currency, listofproperty, setcurrency, setlistofproperty, header, setheader, signin, setsignin, register, setregister } = useContext(formodel)
   const navigate=useNavigate()
   const [rgerror,setrgerror]=useState("");
   const nameRef=useRef();
   const emailRef=useRef();
   const passwordRef=useRef();

  const createUser=async(user)=>{
    const config=getHeaderWithProjectId();
    try{
      const res=await axios.post("https://academics.newtonschool.co/api/v1/user/signup",{...user,appType:"bookingportals"},config);
      const token=res.data.token;
      if(token){
        sessionStorage.setItem("userToken",token);
        navigate("/login");
        setsignin(false)
        setregister(true)

      }
    }
    catch(err){
      setrgerror(err.response.data.message);
    }
    
  }


  function HandleResgister(e) {
    e.preventDefault();
    const useDetails={
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    const {name,email,password}=useDetails;
    if(name){
      if(email){
        if(password){
          createUser(useDetails)
          setrgerror("")
        }
        else{
          setrgerror("fill password")
        }
      }
      else{
        setrgerror("fill email")
      }
    }
    else{
      setrgerror("fill name ")
    }
  }


  return (
    <section className='register_container'>

      <div className='formbox'>
        <form className='form'>

          <h1>Create An Account</h1>
          <div className='namebox'>
            <label htmlFor="name" className='label'>Name</label>
            <input type="text" placeholder='Name' ref={nameRef}/>
          </div>

          <div className='emailbox'>
            <label htmlFor="email" className='label'>Email</label>
            <input type="email" placeholder='Email' ref={emailRef}/>
          </div>

          <div className='passwordbox'>
            <label htmlFor="password" className='label'>Password</label>
            <input type="password" placeholder='Password' ref={passwordRef}/>
          </div>

          <button onClick={HandleResgister} className='btn_register'>Register</button>
          <p className='error'>{rgerror}</p>
        </form>
        
      </div>

    </section>
  )
}

export default Register



