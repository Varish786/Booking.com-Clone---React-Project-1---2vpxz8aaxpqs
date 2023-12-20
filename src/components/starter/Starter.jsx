import React from 'react';
import "./Starter.css";
import Img from "../asserts/recent.jpg";
import Img1 from "../asserts/img1.jpg";
import Img2 from "../asserts/img2.jpg";
import Img3 from "../asserts/img3.jpg";
import Img4 from "../asserts/img4.jpg";
import Img5 from "../asserts/img5.jpg";



function Starter() {
  return (
    <section className='mainstarter'>
          

      <section className='startercontainer'>
        <div className='box'>
          <input type="checkbox" className='checkboxstarter' />
          <label htmlFor="checkbox">I'm travelling for work</label>
        </div>

        <div className='box'>
          <input type="checkbox" className='checkboxstarter' />
          <label htmlFor="checkbox">I'm interester in flights</label>
        </div>
      </section>

      <section className='recent'>
        <h1>Your recent searches</h1>
        <div className='recentcard'>
          <img src={Img} alt="recent" />
          <div className='place_name'>
            <span>Mapusa</span>
            <p>11 Aug-18 Aug 2 people</p>
          </div>
        </div>
      </section>

      <div>
        <h1 className='trending'>Trending destinations</h1>
      </div>

      <section className='journey_card'>
        <div className='box_card'>
          <img src={Img1} alt="Img1" />
          <h1>New Delhi</h1>
        </div>

        <div className='box_card'>
          <img src={Img2} alt="Img2" />
          <h1>Bangalore</h1>
        </div>

      </section>

      <section className='trending_second'>

        <div className='box_card2'>
          <img src={Img3} alt="Img3" />
          <h1>Mumbai</h1>
        </div>

        <div className='box_card2'>
          <img src={Img4} alt="Img4" />
          <h1>Chennai</h1>
        </div>

        <div className='box_card2'>
          <img src={Img5} alt="Img5" />
          <h1>Hyderabad</h1>
        </div>

      </section>

      <footer className='footer'>
        <div className='top'>
          
          <div className='footer_top'>
            <div className='headingfooter'>
              <h1>Save Time Save Money</h1>
              <h3>Sing up and we'll send the best deals to you</h3>
            </div>
            <div className='footerbtn'>
            <input type="text" placeholder='your email address' id="inputmail" />
            <input type="submit" value="Subscribe" id='footerbtn'/>
            </div>
          </div>

        </div>


        <div className='footer_bottom'>
          <span>Copyright 2023</span>
          <span>Made by Varish Raja</span>
        </div>
      </footer>


    </section>
  )
}

export default Starter
