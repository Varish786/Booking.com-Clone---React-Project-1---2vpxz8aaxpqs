import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Nav from './nav/Nav';
import Starter from "./starter/Starter";
import HotelSearch from "./hotel/HotelSearch";
import Hotelmodel from "./hotel/hotelmodel/Hotelmodel";
import { createContext, useEffect, useState } from "react";
import Flight from "./flight/Flight";
import Register from "./register/Register";
import Login from "./login/Login";
import HotelDetails from "./hotel/hoteldetails/HotelDetails";
import { AuthNavigator } from "./navigator/AuthNavigator";
import Profile from "./user/Profile";
import Trip from "./user/Trip";
import Fstater from "./flight stater/Fstater";
import Navflight from "./flight/navflight/Navflight";
import International from "./flight stater/international/International";
import Domastic from "./flight stater/domastic/Domastic";
import FlightDetails from "./flight/flightDetails/FlightDetails";
import TravellerDetails from "./flight/travellerdetails/TravellerDetails";
import Checkout from "./flight/checkout/Checkout";
import ComingSoon from "./comingsoon/ComingSoon";



export const formodel = createContext()
export const hoteldata = createContext()
export const flightdata = createContext()
export const FlightSeatContext = createContext()

function App() {
  const [modelvisible, setmodelvisible] = useState(true);
  const [currency, setcurrency] = useState(true);
  const [listofproperty, setlistofproperty] = useState(true);
  const [header, setheader] = useState(true);
  const [signin, setsignin] = useState(true);
  const [register, setregister] = useState(true);
  const [isLogin, setisLogin] = useState(false);
  //--------------------------------------------
  const [fdata, setfdata] = useState(null);

  const [flightcont, EditMovies] = useState({
    seatNumbers: [],
    trvel: 0
  })

  //--------------------------------------------
  const [options, setoptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1
  })

  const [location, setlocation] = useState({
    hotel: ""
  });

  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);


  return (
    <div className="App">

      <FlightSeatContext.Provider value={{ flightcont, EditMovies }}>
        <flightdata.Provider value={{ fdata, setfdata }}>

          <hoteldata.Provider value={{ options, setoptions, location, setlocation, date, setdate }}>
            <formodel.Provider value={{ modelvisible, setmodelvisible, currency, setcurrency, listofproperty, setlistofproperty, header, setheader, signin, setsignin, register, setregister, isLogin, setisLogin }}>
              <Nav />
              <Routes>
                <Route path="/" element={<Starter/>} />    
                <Route path="/stays" element={<HotelSearch />} />
                <Route path="/hotelmodel/:id" element={<Hotelmodel />} />


                <Route path="/flights" element={<Navflight />}>
                  <Route path="/flights" element={<Fstater />}>
                    <Route path="/flights/int" element={<International />} />
                    <Route path="/flights/dom" element={<Domastic />} />
                  </Route>
                  <Route path="flights/result_flights" element={<Flight />} />
                </Route>
                <Route path="/flights/result_flights/:id" element={<FlightDetails />} />
                <Route path="/flights/result_flights/:id/travellerdetails" element={
                 <AuthNavigator>
                   <TravellerDetails />
                 </AuthNavigator>
                } />
                <Route path="/flights/result_flights/:id/travellerdetails/payment" element={<Checkout />} />

                {/* ----------------------------------------------------------------------------- */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/profile" element={<Profile />} />
                <Route path="/trip" element={<Trip />} />

                <Route path="/hoteldetails/:id" element={
                  <AuthNavigator>
                    <HotelDetails />
                  </AuthNavigator>
                } />


                {/* <Route path="/hoteldetails/:id" element={<Payment/>}/> */}
                <Route path="/flights+hotel" element={<ComingSoon/>} />
                <Route path="/carrentals" element={<ComingSoon/>} />
                <Route path="/attractions" element={<ComingSoon/>} />
                <Route path="/airporttaxis" element={<ComingSoon/>} />
                <Route path="*" element={<h1>Error Not Found</h1>} />
              </Routes>

            </formodel.Provider>
          </hoteldata.Provider>
        </flightdata.Provider>
      </FlightSeatContext.Provider>

    </div>
  )

}

export default App;
