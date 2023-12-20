import React, { useEffect, useState } from 'react'
import "./Checkout.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorToast, SuccessToast } from '../../paymentportal/Toast';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({});
  const loc = useLocation()
  const { src, dst, date,jsdate} = loc.state.pass
  const { traveler } = loc.state.pass.traveller
  const { ticketPrice,_id} = loc.state.idapidata
  const isodate=new Date(jsdate).toISOString()


  //----------------API----------------------------------------------------
  async function BookFlightAPI(id) {
  
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        projectID: "2vpxz8aaxpqs",
      }
    }
    const body = {
      bookingType: "flight",
      "bookingDetails": {
          "flightId": id,
          "startDate": isodate,
          "endDate": isodate
      }
  }

    try {
      const res = await axios.post("https://academics.newtonschool.co/api/v1/bookingportals/booking",body,config)
      const data=await res.data
      return data
 
    } catch (err) {
      console.log("CheckPage",err.response.data.message)
    }
  }

  //------------------------------------------------------------------------------


  function HandlePay(e) {
    e.preventDefault()
    if (formData.cardHolderName) {
      if (formData.cardNumber) {
        if (formData.expiryDate) {
          if (formData.cvc) {
            BookFlightAPI(_id)
            .then((res)=>{
                if(res.message==="Booking successful"){
                    SuccessToast("Payment Successful")
                    navigate("/trip")
                }
            })

          } else {
            ErrorToast('Fill the CVC')
          }
        } else {
          ErrorToast('Fill the Expire Date')
        }
      } else {
        ErrorToast('Fill the Card Number')
      }
    } else {
      ErrorToast('Fill the Card Holder Name')
    }
  }
  //--------------------------------------------------------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?\/\\|`~0-9]/;

    if (regex.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });

  }

  const handleCardNumber = (e) => {
    const { name, value } = e.target;

    const digits = value.replace(/[^\d]/g, '');
    const formatCardNumber = (digits.match(/.{1,4}/g) || []).join('-').substr(0, 19);
    setFormData({ ...formData, [name]: formatCardNumber });

  }

  function handleExpiryDate(e) {
    const { name, value } = e.target;

    const digits = value.replace(/[^\d]/g, '');

    const formatExpiryDate = digits.replace(/(\d{2})(?=\d)/, '$1/').substr(0, 5);
    setFormData({ ...formData, [name]: formatExpiryDate });

  }

  function handleCVC(e) {
    const { name, value } = e.target;

    if (isNaN(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  }




  return (
    <section className='checkoutcont'>

      <ToastContainer
        position="top-center"
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

      <main className='checkkmain'>

        <div className='checkbasic'>
          <ul className='basiclis'>
            <li>{traveler} Traveller</li>
            <li>{date}</li>
          </ul>
          <h1>{src} To {dst}</h1>
        </div>


        <div className='ticketdetail'>
          <h1>Check and pay</h1>
          <div className='t1'>
            <p className='tickttrv'>Ticket({traveler} Traveller)</p>
            <div className='fareprice'>
              <p>Flight Fare</p>
              <p>INR {ticketPrice.toLocaleString()}</p>
            </div>
            <div className='faretax'>
              <p>Tax and charges</p>
              <p>INR {Math.floor(ticketPrice * traveler * 0.1)}</p>
            </div>
          </div>

          <div className='faretotal'>
            <h1>Total</h1>
            <h1>INR {(ticketPrice * traveler).toLocaleString()}</h1>
          </div>

          <div className='farehidden'>
            <p>Includes Taxes and Charges</p>
            <p className='Nofees'>No hidden fees</p>
          </div>
        </div>

        {/* ---------------------------------------------------------------------- */}

        <div className='paymentdetails'>

          <div className='payment'>
            <h1>Payment</h1>
            <p>Simple,safe and secure</p>
          </div>

          <div className='paymentcard'>
            <p>How would you like to pay</p>

            <div className='payopt'>
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/discover.svg" alt="pay" />
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/mc.svg" alt="pay" />
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/jcb.svg" alt="pay" />
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/visa.svg" alt="pay" />
            </div>
          </div>

          <form>
            <div className='payment_card'>
              <div className='Chname'>
                <p className='cname'>Card Holder's Name</p>
                <input type="text" className='cinp' name='cardHolderName' value={formData.cardHolderName} onChange={handleInputChange}
                  placeholder='Name On Card' required />
              </div>

              <div className='Chname'>
                <p className='cname'>Card Number</p>
                <input type="text" className='cinp' name='cardNumber' value={formData.cardNumber} pattern="\d{4}-\d{4}-\d{4}-\d{4}" maxLength='19' onChange={handleCardNumber} placeholder='XXXX-XXXX-XXXX-XXXX' required />
              </div>

              <div className='Expire_cvv'>
                <div className='ex_div'>
                  <label htmlFor="Expiry Number">Expiry Number</label>
                  <input type="text" className='excvv' pattern='\d{2}/\d{2}' name='expiryDate' value={formData.expiryDate} onChange={handleExpiryDate} placeholder='MM/YY' maxLength='5' required />
                </div>
                <div className='ex_div'>
                  <label htmlFor="CVV">CVV</label>
                  <input type="text" className='excvv' name='cvc' pattern='\d{3}' value={formData.cvc} onChange={handleCVC} maxLength='3' placeholder='XXX' required />
                </div>
              </div>
              <button className='btn_pay' onClick={HandlePay}>Pay Now</button>
            </div>
          </form>

        </div>


      </main>
    </section>
  )
}

export default Checkout
