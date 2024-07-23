import React, { useState } from 'react'
import Slider from "@mui/material/Slider";
import { women } from '../../data';

const Womens = () => {
  // range slider 
  const [range, setRange] = React.useState([5, 20]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  // more page 
  const [noOfement, setnoOfElement] = useState(6);

  const loadMore = () => {
    setnoOfElement(noOfement + noOfement);
    console.log(setnoOfElement)
  }
  const slice = women.slice(0, noOfement);
  return (
    <div>


      <div className="container">
        <div className="shadow"></div>
        <h2 className='text-center mt-5 text'>Women's products</h2>

        <div className="row">
          {/* right side col  */}
          <div className="col-md-3 mt-5 p-3">

            <div className="border mt-5 bg-light">

              <div className='p-3'>
                <select className="form-select w-75 mt-3 rounded-pill m-auto" >
                  <option value="">Dress</option>
                  <option value="">Jackets</option>
                  <option value="">Shoes</option>
                  <option value="">Kurtis </option>
                  <option value="">Watches</option>
                </select>

                <br />
                <select className="form-select w-75  rounded-pill m-auto">
                  <option value="">Shoes</option>
                  <option value="">Type 1</option>
                  <option value="">Type 2</option>
                  <option value="">Type 3</option>
                  <option value="">Type 4</option>
                </select>
                <br />

                <select className="form-select w-75 rounded-pill m-auto">
                  <option value="">Size</option>
                  <option value="">XXL</option>
                  <option value="">XL</option>
                  <option value="">LG</option>
                  <option value="">M</option>
                </select>
                <br />
              </div>

              {/*price filter box here  */}

              <div className="">
                <p className='mx-5 text-dark'><b>Filter by price</b></p>
                <div className=''>
                  <Slider className='mx-5 w-75 text-warning' value={range} onChange={handleChanges} valueLabelDisplay="auto" />
                  <p className='mx-5'> selected Price is $ {range[0]} - {range[1]}</p>
                </div>
              </div>


              {/* checkbox here  */}
              <div className="mx-5">
                <p className='text-dark'><b>Filter by Brand</b></p>
                <div className="form-check m-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    GUCCI
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" for="flexRadioDefault2">
                    NIKE
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                  <label className="form-check-label" for="flexRadioDefault3">
                    ADIDAS
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                  <label className="form-check-label" for="flexRadioDefault4">
                    LOUIS VUITTON
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                  <label className="form-check-label" for="flexRadioDefault5">
                    CHANEL
                  </label>
                </div>

              </div>


              {/* second checkbox here  */}
              <div className="mx-5 mt-4">
                <p className='text-dark'><b>Filter by Brand</b></p>
                <div className="form-check m-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    GUCCI
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" for="flexRadioDefault2">
                    NIKE
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                  <label className="form-check-label" for="flexRadioDefault3">
                    ADIDAS
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                  <label className="form-check-label" for="flexRadioDefault4">
                    LOUIS VUITTON
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                  <label className="form-check-label" for="flexRadioDefault5">
                    CHANEL
                  </label>
                </div>

              </div>

              <div className="mb-5">
                <p className='mx-5 mt-3 text-dark'><b>Products</b></p>
                <div className='mx-5 fs-5'>
                  <ul>
                    <li>Shoes</li>
                    <li>Towel</li>
                    <li>Coat</li>
                    <li>Trouser</li>
                    <li>BackPack</li>

                  </ul>
                </div>

              </div>
            </div>

          </div>
          {/* left side col here  */}

          {/* products col */}
          <div className="col-md-9">
            <div className="row">

              {
                slice.map(({ index, img, name, price, strike, star }) => {
                  return (
                    <div className='col-md-4' key={index}>
                      <div className=" w-75 text-center  m-auto mt-5">
                        <img src={img} alt="" className='w-100' />
                        <p className='m-2 fs-5 text-dark'>{name}</p>
                        <div className='d-flex mx-5'>
                          <h4 className='text-warning me-3'>${price}</h4><strike>${strike}</strike>
                        </div>
                        <div className="text-warning">
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star-half-o'></i>
                          <i className='fa fa-star-half-o'></i>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        
              <button className='btn morebtn' onClick={() => loadMore()}>more Products</button>
          </div>
        
        </div>
      </div>
    </div>



  )
}

export default Womens
