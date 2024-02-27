import React from 'react'
import "./Asidehotel.css"
import GoogleMap from './googlemap/GoogleMap'
import MultiRangeSlider from './multiRangeSlider/MultiRangeSlider'



function Asidehotel() {

  return (
    <section className='asidemain'>
      <div className='map'>
        <div className='ggmap'>
          <GoogleMap/>
        </div>

      </div>

      <section className='filter'>
        <div className='filterby'>
          <h4>Filter By:</h4>
        </div>

        <div className='budgetslider deadclick'>
          <h4>Your budget (per night)</h4>
          <span className='price'>&#8377; 500 - &#8377; 20000+</span>

          <MultiRangeSlider
            className="slider"
            min={0}
            max={1000}
            onChange={({ min, max }) => console.log("Asidehotel  min = ${min}, max = ${max}")}
          />
        </div>

        <div className='popular_filter'>

          <h1>Popular Filters</h1>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>Book withour credit card</p>
            </div>
            <span>18</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>No prepayment</p>
            </div>
            <span>30</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>Free cancellation</p>
            </div>
            <span>32</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>Apartment</p>
            </div>
            <span>1</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>Hotels</p>
            </div>
            <span>30</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>Homestays</p>
            </div>
            <span>1</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>5 starts</p>
            </div>
            <span>10</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>Twin beds</p>
            </div>
            <span>16</span>
          </div>

        </div>

        <div className='sustainability'>
          <h1>Sustainability</h1>
          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>Travel Sustainable properties Properties taking steps to make your stay more sustainable</p>
            </div>
            <span>26</span>
          </div>
        </div>


        <div className='propertyrating'>
          <h1>Property rating</h1>
          <p>lncludes starts and other ratings</p>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>2 stars</p>
            </div>
            <span>1</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>3 stars</p>
            </div>
            <span>12</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>4 stars</p>
            </div>
            <span>8</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>5 stars</p>
            </div>
            <span>10</span>
          </div>

          <div className='checkbox'>
            <div className='check'>
              <input type="checkbox" className='inputcheck deadclick' />
              <p>Unrated</p>
            </div>
            <span>1</span>
          </div>

        </div>

      </section>
    </section>
  )
}

export default Asidehotel
