import React, { useContext} from 'react';
import "./Main.css";
import { faCar, faCircleQuestion, faHeart, faLocationDot, faShareNodes, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { formodel } from '../../../App';


function Main({ data }) {
    const { isLogin} = useContext(formodel)
    const navigate = useNavigate();
    const { name, location, rating } = data;
    const [img1, img2, img3, img4] = data.images
    const st = '★'
    const star = (st.repeat(data.rating))

    function HandelReserve() {
        const logsDetails = {
            islog: isLogin
        }
        navigate(`/hoteldetails/${data._id}`, { state: { logsDetails: logsDetails } })
    }



    return (
        <section className='maincontainer'>


            <div className='navmain'>

                <div className='leftmain'>
                    <div className='subleft1'>
                        <p><span className='new_booking'>New to Booking.com </span> <span className='startcolor'>{star}</span></p>
                        <p className='airport'>Airport shuttle</p>
                    </div>
                    <h1 className='hotelname'>{name}</h1>

                    <div className='subleft2'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>{location} <span><a href="" className='deadclick'>Show  Map</a></span></p>
                    </div>

                    <div className='subleft3'>
                        <FontAwesomeIcon icon={faCar} />
                        <p>Book a stay over &#8377;{data.rooms[0].price} at this property and get a free airport taxi</p>
                        <FontAwesomeIcon icon={faCircleQuestion} />
                    </div>
                </div>

                <div className='rightmain'>

                    <div className='subright1'>
                        <FontAwesomeIcon icon={faHeart}  className='heartlogo'/>
                        <FontAwesomeIcon icon={faShareNodes}  className='heartlogo'/>
                        <button className='btnreserve' onClick={HandelReserve}>Reserve</button>
                    </div>

                    <div className='subright2'>
                        <FontAwesomeIcon icon={faTag} />
                        <p>We Price Match</p>
                    </div>

                </div>


            </div>
        <div>
            <div className='hotel_data_card'>

                <div className='grid1'>
                    <img src={img1} className='img1' />
                </div>
                <div className='grid2'>
                    <img src={img2} className='img2' />
                </div>
                <div className='grid3'>
                    <img src={img3} className='img3' />
                </div>
                <div className='grid4'>
                    <img src={img4} className='img4' />
                </div>
                <div className='grid5'>
                    <img src={img1} className='img5' />
                </div>
                <div className='grid6'>
                    <img src={img2} className='img6' />
                </div>
                <div className='grid7'>
                    <img src={img3} className='img7' />
                </div>
                <div className='grid8'>
                    <img src={img4} className='img8' />
                </div>

            </div>
        
        </div>

        </section>


    )
}

export default Main






