import React, { useContext, useState } from 'react'
import './payment.css'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { hoteldata } from '../App';
import { useNavigate } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SuccessToast, ErrorToast } from './Toast';
import { format } from "date-fns";
import axios from 'axios';



function Payment({ setpay, room_data }) {
    const { options, date } = useContext(hoteldata);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const start = format(date[0].startDate, "d LLL yyy")
    const end = format(date[0].endDate, "d LLL yyy")
    const { adult, children } = options;
    const { name, price, roomNumber, place,id } = room_data;


 
    async function Bookhotel() {
        const config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
                projectID: "2vpxz8aaxpqs"

            }
        }
        const body = {

            bookingType: "hotel",
            bookingDetails: {
                hotelId: id,
                startDate: date[0].startDate,
                endDate: date[0].endDate
            }
        }

        try {
            const res = await axios.post("https://academics.newtonschool.co/api/v1/bookingportals/booking", body, config);
            const data=res.data;
            return data
        } catch (err) {
            throw ("booking pay", err.response.data.message)
        }
    }

  
    function HandlePay(e) {
        e.preventDefault()
        if (formData.cardHolderName) {
            if (formData.cardNumber) {
                if (formData.expiryDate) {
                    if (formData.cvc) {
                        Bookhotel()
                        .then((res)=>{
                            if(res.message==="Booking successful"){
                                setpay(false)
                                SuccessToast("Payment Successful")
                                setindpay(true)
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


    function handleClose() {
        setpay(false)
    }
    //-----------------------------------------------------------------------------------------
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
    //-----------------------------------------------------------------------------------------



    return (
        <section className='payment_container'>
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

            <div className='payment_main'>
                <div className='cross_div' onClick={handleClose}>
                    <FontAwesomeIcon icon={faX} className='cross' />
                </div>

                <div className='detail_payment'>
                    <div className='HotelD'>
                        <p className='highlight'>{name}</p>
                        <p className='Hloc'>{place}</p>
                        <p className='Hroom'>Room Number: {roomNumber}</p>
                    </div>

                    <div className='HotelG'>
                        <p className='highlight'>Guest Details</p>
                        <ul className='guest'>
                            <li>{adult} Adult</li>
                            <li>{children} Children</li>
                        </ul>
                    </div>

                    <div className='HInout'>
                        <p className='highlight'>Check In & Check Out Date</p>
                        <p className='Hout'>{start} TO {end}</p>
                    </div>

                    <p className='highlight'>Total &#8377;{price}</p>

                    <div className='payc'>
                        <h3 className='ypay'>Your Payment</h3>
                        <p>simple,safe and secure</p>
                    </div>

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
        </section>
    )
}

export default Payment


