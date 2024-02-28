import React, { useContext, useEffect, useRef, useState } from 'react'
import { DownArrow } from "../../asserts/Icons";
import "./Navflight.css";
import FlightSearchBar from '../flightsearchbar/FlightSearchBar';
import { Outlet } from 'react-router-dom';
import { flightdata} from '../../App';

function Navflight() {
    const { fdata,setfdata} = useContext(flightdata)
    const [dropdown,setdropdown]=useState("");


    const [options, setoptions] = useState({
        adult:1,
        children:0,
        traveler:1,
      })
       
    const [optionspop, setoptionspop] = useState(false)

    //-----------------------Store in Local-----------------------------------------------
    useEffect(() => {
        const saved_fdata = window.sessionStorage.getItem("fdata");
        const saved_options = window.sessionStorage.getItem("foptions");
        if (saved_fdata !== null) setfdata(JSON.parse(saved_fdata))
        if (saved_options != null) setoptions(JSON.parse(saved_options))
      }, [])
    
    
      useEffect(() => {
        window.sessionStorage.setItem("fdata", JSON.stringify(fdata))
        window.sessionStorage.setItem("foptions", JSON.stringify(options))
      }, [fdata,options])
    //-----------------------------------------------------------------------------
    //  console.log("navf",fdata)
    //-----------------------------------------------------------------------------


        


    function handleoptions(name,operation){
        setoptions((prev) => {
            const updatedOptions = {
              ...prev,
              [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1,
            };
            updatedOptions.traveler = updatedOptions.adult + updatedOptions.children;
        
            return updatedOptions;
          });
     }

    function handledropdown(e){
        setdropdown(e.target.value)
        
    }
 
    return (
        <>
        <section className='nav_container'>
            <div className='nav_main'>
                <div className='roundtrip' title='Coming Soon'>
                    <input type="radio" name='trip' className='input_radio deadclick'/>
                    <label htmlFor='roundtrip' className='fullspace'>Round trip</label>
                </div>

                <div className='oneway'>
                    <input type="radio" name='trip' className='input_radio' defaultChecked/>
                    <label htmlFor="One way" className='fullspace'>One way</label>
                </div>

                <div className='multicity' title='Coming Soon'>
                    <input type="radio" name='trip' className='input_radio deadclick' />
                    <label htmlFor="Multi-city" className='fullspace'>Multi-city</label>
                </div>

                <div className='selection_drive' onClick={() => setoptionspop(false)} title='Coming Soon'>
                    <select name='triplist' className='selectoption deadclick' onChange={handledropdown}>
                        <option value="Economy">Economy</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Business">Business</option>
                        <option value="First-class">First-class</option>
                    </select>
                </div>

                <div className='dropdown'>
                    
                    <div className="box">
                      <div className='traveler'>
                        <span onClick={() => setoptionspop(!optionspop)} className='room'>{options.traveler} {options.adult>1?"Traveler":"Adult"}</span>
                        <div onClick={() => setoptionspop(!optionspop)} className='downrow'>
                            <DownArrow />
                        </div>
                       </div>
                        {optionspop &&
                            <div className='options_nav'>

                                <div className='optionsitem'>
                                    <span className='optionText'>Adult</span>
                                    <div className='optioncounter'>
                                        <button className='optionbtn' onClick={() => handleoptions("adult", "d")} disabled={options.adult <= 1}>-</button>
                                        <span className='optionText'>{options.adult}</span>
                                        <button className='optionbtn' onClick={() => handleoptions("adult", "i")}>+</button>
                                    </div>
                                </div>

                                <div className='optionsitem'>
                                    <span className='optionText'>Children</span>
                                    <div className='optioncounter'>
                                        <button className='optionbtn' onClick={() => handleoptions("children", "d")} disabled={options.children <= 0}>-</button>
                                        <span className='optionText'>{options.children}</span>
                                        <button className='optionbtn' onClick={() => handleoptions("children", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                 
                </div>


                <div className='checkboxflight' title='Coming Soon'>

                    <input type="checkbox" className='input_radio deadclick' />

                    <p className='fullspace'>Direct Flight only</p>
                </div>
                
            </div>
            <FlightSearchBar dropdown={dropdown} options={options} setoptions={setoptions}/>
        </section>
        <Outlet/>
        </>
    )
}

export default Navflight;
