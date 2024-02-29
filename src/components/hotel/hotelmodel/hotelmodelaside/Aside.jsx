import React, { useContext, useState } from 'react'
import "./Aside.css"
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Calender, DownArrow,Person } from '../../../asserts/Icons';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import GoogleMap from '../../aside/googlemap/GoogleMap';
import { useNavigate } from 'react-router-dom';
import { formodel, hoteldata } from '../../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar } from 'react-date-range';
import { ErrorToast } from '../../../paymentportal/Toast';


function Aside() {
  
    const { options, setoptions,location, setlocation , date, setdate} = useContext(hoteldata);
    const {setmodelvisible} = useContext(formodel);
    const navigate=useNavigate();
    //-------------------------Date---------------------------------------------
    const [checkindatepop, setcheckindatepop] = useState(false);
    const [checkoutdatepop, setcheckoutdatepop] = useState(false);

    //--------------------------------------------------------------------------  
    const [optionspop, setoptionspop] = useState(false)
   

    function handleoptions(name,operation){
        setoptions(prev=>{return{
          ...prev,[name]:operation==="i"?options[name]+1 :options[name]-1,
        }})
     }

     function handleInput(e) {
        const { value, name } = e.target;
        setlocation({ ...location, [name]: value });
    
      }

     function handleSearchAside(){
        if (location.hotel) {
            navigate("/stays",{state:location.hotel})
            setmodelvisible(true)
          } 
        else {
            ErrorToast("Enter a destination to start searching.")
          }
       
     }

    return (
        <section className='aside_container'>
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
            <div className='asidediv'>
                <h1 className='searchbar'>Search</h1>

                <div className='aside_input1'>
                    <p>Destination/property name</p>
                    <div className='input_aside1'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" placeholder='whats your destination' onChange={handleInput} value={location.hotel} name='hotel'/>
                    </div>
                </div>

                <div className='aside_input1'>
                    <p>Check-in date</p>
                    <div className='input_aside_datestart'>
                        <Calender />


                        <span onClick={() => setcheckindatepop(!checkindatepop)} > {`${format(date[0].startDate, "dd/MM/yyy")}`} </span>

                        {checkindatepop && <DateRange
                            editableDateInputs={true}
                            onChange={item => setdate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />
                        }
                        <DownArrow/>
                    </div>
                </div>

                <div className='aside_input1'>
                    <p>Check-out date</p>
                    <div className='input_aside_datestart'>
                        <Calender className='logo' />
                        <span onClick={() => setcheckoutdatepop(!checkoutdatepop)}>{`${format(date[0].endDate, "dd/MM/yyy")}`} </span>

                        {checkoutdatepop && <DateRange
                            editableDateInputs={true}
                            onChange={item => setdate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"

                        />
                        }
                        <DownArrow />
                    </div>
                </div>


                <div className='aside_input1'>
                    <p>1-week stay</p>

                    <div className='box'>
                        <div className="input_aside1">
                            <Person/>
                            <span onClick={() => setoptionspop(!optionspop)} className='room'>{options.adult} Adult . {options.children} Children . {options.rooms} Room</span>
                            <div onClick={() => setoptionspop(!optionspop)} className='downrow'>
                                <DownArrow onClick={()=>{setoptions(true)}}/>
                            </div>

                            {optionspop &&
                                <div className='options'>

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

                                    <div className='optionsitem'>
                                        <span className='optionText'>Rooms</span>
                                        <div className='optioncounter'>
                                            <button className='optionbtn' onClick={() => handleoptions("rooms", "d")} disabled={options.rooms <= 1}>-</button>
                                            <span className='optionText'>{options.rooms}</span>
                                            <button className='optionbtn' onClick={() => handleoptions("rooms", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>

                </div>



                <div className='checkboxmodel'>
                    <div className='firstcheckbox'>
                        <input type="checkbox" className='checkbox deadclick' />
                        <p>Show me holiday rentals</p>
                    </div>

                    <div className='firstcheckbox'>
                        <input type="checkbox" className='checkbox deadclick' />
                        <p>I'm travelling for work</p>
                    </div>
                </div>
                <button className="searchbtn" onClick={handleSearchAside}>Search</button>
            </div>

            <div className='mapmodel'>
                <GoogleMap/>
            </div>

        </section>
    )
}

export default Aside


