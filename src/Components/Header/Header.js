import React from 'react'
import { Link } from 'react-router-dom';

import img from '../../Images/slider1.jpg';
import img1 from '../../Images/slider2.jpg';


const Header = () => {
  // header slider function
  const Images = [
    {
      "id": "1",
      "path": img,
    },

    {
      "id": "2",
      "path": img1,
    },

  ]
  return (
    <div>
      {/* black contianer  */}
      <div className="container-fluid">
        <div className="row">
          <div className='bg-dark p-1'>
            <p className='text-light text-center m-2 '>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
              <Link to="/allproducts" className='m-1' style={{ color: 'orange' }}>Shop Now</Link></p>
          </div>
        </div>
      </div>


      {/* header slider */}
      <div id="carouselExampleRide" className="carousel slide border" data-bs-ride="carousel">
        <div className="carousel-inner">
          {
            Images != null ? Images.map((item, index) => {
              return (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="5000">
                  <img src={item.path} className=" w-100 headimg" alt="..." />
                </div>
              )
            }) : ""
          }
        </div>
      </div>

<br />

      {/* three cards images */}

      <div className="container">    
        <div className="row mt-5 mx-5">
          <div className="col-md-4 mb-5">
            <h3 className='text text-center fs-3'>Men's Wear</h3>
            <div className="img1 i">
              <div className="content">
                <div className="z">
                  <Link to="/mens"><u>Shop Now</u></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <h3 className='text text-center  fs-3'>Women's Wear</h3>
            <div className="img2 i">
              <div className="content">
                <div className="z">
                  <Link to="/womens"><u>Shop Now</u></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">           
            <h3 className='text text-center  fs-3'>Kid's Wear</h3>
            <div className="img3 i">
              <div className="content">
                <div className="z">
                  <Link to="/kids"><u>Shop Now</u></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  )
}

export default Header
