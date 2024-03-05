import React, { useContext, useState } from 'react';
import './Search.css';
import { Stays, Calender, Person, Cross, DownArrow } from '../../asserts/Icons';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom';
import { hoteldata } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Search({ settitle, search_active, setsearch_active }) {
  const { options, setoptions, location, setlocation, date, setdate } = useContext(hoteldata)
  const navigate = useNavigate();
  const [datepop, setdatepop] = useState(false);
  const [optionspop, setoptionspop] = useState(false)



  function handleInput(e) {
    const { value, name } = e.target;
    setlocation({ ...location, [name]: value });

  }

  function handleoptions(name, operation) {
    setoptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  function HandleClickSearch() {
    if (location.hotel) {
      navigate("/stays",{state:location.hotel})
      settitle(false)
      setsearch_active(true)
    } else {
      toast.error('Enter a destination to start searching.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
   
  function handleCross(){
    setlocation({ ...location, hotel: "" })
  }


  return (
    <section className='parent'>
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

      <div className='mains'>
        <div className='mainsearch'>

          <div className="box">
            <div><Stays width="25px" height="25px" /></div>
            <input type="text" placeholder="Where are you going?" className="inputbox" onChange={handleInput} value={location.hotel} name='hotel' />
            {location.hotel ? <div onClick={handleCross}><Cross/></div> : null}
          </div>


          <div className="box">
            <Calender width="25px" height="25px" />
          <span className="inputbox" onClick={() => setdatepop(!datepop)}>{`${format(date[0].startDate, "dd/MM/yyy")} To ${format(date[0].endDate, "dd/MM/yyy")}`} </span>

            {datepop && <DateRange
              editableDateInputs={true}
              onChange={item => setdate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
            }
          </div>


          <div className="box">
            <Person width="22.3px" height="25px" />
            <div className='subbox'>
            <span onClick={() => setoptionspop(!optionspop)} className='room'>{options.adult} Adult . {options.children} Children . {options.rooms} Room</span>
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

          <button className='btnsearch' onClick={HandleClickSearch}>Search</button>
        </div>
      </div>

    </section>
  )
}

export default Search;



