import React, { useContext } from 'react';
import { Flight, Stays, FlightHotel, CarRentals, Attractions, AirportTaxi } from "../../asserts/Icons";
import './Header.css';
import { NavLink} from 'react-router-dom';
import { formodel } from '../../App';


function header({settitle,search_active, setsearch_active}) {
  const {setmodelvisible,setcurrency,setlistofproperty,setheader,setsignin,setregister}=useContext(formodel)
  
  function handlestays(){
    setmodelvisible(true)
    settitle(true)
    setcurrency(true);
    setlistofproperty(true);

    // settitle(true)
    // setmodelvisible(true)
    // setheader(true)
    // setsignin(true)
    // setregister(true)
  }

  function handleflight(){
    setmodelvisible(false);
    settitle(false);
    setcurrency(false);
    setlistofproperty(false);
    setsearch_active(false)
  }

  function handleflighthotel(){
    settitle(false);
    setmodelvisible(false);
    setsearch_active(false)
  }

  function handlecarrentals(){
    settitle(false);
    setmodelvisible(false);
    setsearch_active(false)
  }

  function handleattractions(){
    settitle(false);
    setmodelvisible(false);
    setsearch_active(false)
  }

  function handleairpottaxis(){
    settitle(false);
    setmodelvisible(false);
    setsearch_active(false)
  }
  
  return (
    <div>
      <div className='headercontainer'>

        <NavLink className={`headerprop ${search_active?'active': ""}`} to="/" onClick={handlestays}>
          <Stays color="white"/>
          <p>Stays</p>
        </NavLink>

        <NavLink className='headerprop' to="/flights" onClick={handleflight}>
          <Flight />
          <p>Flights</p>
        </NavLink>

        <NavLink className='headerprop' to="/flights+hotel" onClick={handleflighthotel}>
          <FlightHotel />
          <p>Flight+Hotel</p>
        </NavLink>

        <NavLink className='headerprop' to="/carrentals" onClick={handlecarrentals}>
          <CarRentals />
          <p className='car'>Car rentals</p>
        </NavLink>

        <NavLink className='headerprop' to="/attractions" onClick={handleattractions}>
          <Attractions />
          <p>Attractions</p>
        </NavLink>

        <NavLink className='headerprop' to="/airporttaxis" onClick={handleairpottaxis}>
          <AirportTaxi />
          <p className='car'>Airport taxis</p>
        </NavLink>

      </div>
    </div>
  )
}

export default header
