import React, { useContext } from 'react'
import "./Hotelcard.css";
import Image from "../../asserts/img1.jpg"
import { formodel } from '../../App';
import { useNavigate } from 'react-router-dom';



function Hotelcard({ data }) {
    const navigate = useNavigate()
    const { setmodelvisible } = useContext(formodel)

    function handelmodel() {
        setmodelvisible(false);
        navigate(`/hotelmodel/${data._id}`)
       
    }

    const dis=(Math.floor((data.rooms[0].price/(data.rooms[0].costPerNight+data.rooms[0].costDetails.baseCost))*100))

    const a='★'
    const start=(a.repeat(data.rating))

    
  
    return (
        <section className='cardmain'>

            <div className='card'>

                <div className='cardcontainer'>
                    <div className='hotelimg'>
                        <img src={data.images[0]} alt="pic" className='image' />
                    </div>

                    <div className='hoteldescription'>

                        <div className='left'>
                            <h1 className='hotel_name'>{data.name} <span>{start}</span> </h1>
                            <p className='hotel_feature'>Featured</p>
                            <p className='hotel_loc'>{data.location}. Show on map</p>
                            <p className='hotel_free_service'>Free airport taxi</p>
                        </div>

                        <div className='right'>
                            <div className='reviewscore'>
                                <div>
                                    <p className='review'>Review score</p>
                                    <p className='totalreview'>42 reviews</p>
                                </div>
                                <p className='rating'>{data.rating}</p>
                            </div>
                            <p className='comfort'>Comfort 8.3</p>
                            <p className='new_booking'>New to Booking.com</p>
                        </div>
                    </div>



                    <div className='lowercontainer'>
                        <div className='included_left'>
                            <p className='day_use'> Day Use Room For 6 hours Strictly From (12 PM to 6PM)</p>
                            <p className='bed_use'>{data.rooms[0].bedDetail}</p>
                            <p className='breakfast'>Breakfast included</p>
                            <p className='breakfast'>{data.rooms[0].cancellationPolicy}</p>
                            <p className='breakfast'>No prepayment-pay at the property</p>
                            <p className='left_rooms'>Only 4 rooms left at this price on our site</p>

                        </div>

                        <div className='included_right'>
                            <p className='week'>Per Night Cost</p>
                            <p className='dis'><span className='discount'>&#8377;{data.rooms[0].costPerNight+data.rooms[0].costDetails.baseCost} </span>{dis}%off</p>
                            <p className='price'>&#8377;{data.rooms[0].price}</p>
                            <p className='taxes'>+&#8377;{data.rooms[0].costDetails.taxesAndFees} taxes and charges</p>
                            <button className='availability_btn' onClick={handelmodel}>See availability</button>
                        </div>
                    </div>
                </div>

            </div>



        </section>
    )
}

export default Hotelcard


