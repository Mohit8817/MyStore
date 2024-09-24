import React, { useState } from 'react'
import Slider from "@mui/material/Slider";
import { menspro } from '../../data';

const Mens = () => {
  // range slider 
  const [range, setRange] = useState([50, 200]); // Set initial range

  const handleChanges = (event, newValue) => {
      setRange(newValue);
  };

  // Filter products based on the selected price range
  // const rangefilter = menspro.filter(
  //     (product) => parseFloat(product.price) >= range[0] && parseFloat(product.price) <= range[1]
  // );


  // more page 
  const [noOfement, setnoOfElement] = useState(6);

  const loadMore = () => {
    setnoOfElement(noOfement + noOfement);
    console.log(setnoOfElement)
  }
  const slice = menspro.slice(0, noOfement);



  // for filter Brand js 
  const [selectedBrand, setSelectedBrand] = useState('');

  // Filter products based on the selected brand
  const filteredProducts = selectedBrand
    ? menspro.filter(product => product.brand === selectedBrand)
    : menspro;

  return (
    <div>


      <div className="container">
        <div className="shadow"></div>
        <h2 className='text-center mt-5 text'>Mens products</h2>

        <div className="row">
          {/* right side col  */}
          <div className="col-md-3 mt-5 p-3">
            <div className="border mt-5 bg-light">


            <div>
            {/* Price filter box */}
            <p className="mx-5 text-dark"><b>Filter by price</b></p>
            <Slider
                className="mx-5 w-75 text-warning"
                value={range}
                onChange={handleChanges}
                valueLabelDisplay="auto"
                min={50}
                max={100}
            />
            <p className="mx-5">Selected Price is $ {range[0]} - {range[1]}</p>

            {/* Render filtered products */}
            {/* <div className="product-grid">
                {rangefilter.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Strike: ${product.strike}</p>
                        <p>Brand: {product.brand}</p>
                    </div>
                ))}
            </div> */}
        </div>



              {/* checkbox here  */}


              {/* second checkbox here  */}

              {/* filter by Bands option here  */}
              <div>
                <div className="mx-5 mt-4">
                  <p className='text-dark'><b>Filter by Brand</b></p>
                  <div className="form-check m-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onChange={() => setSelectedBrand('GUCCI')}
                      checked={selectedBrand === 'GUCCI'}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      GUCCI
                    </label>
                  </div>
                  <div className="form-check m-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      onChange={() => setSelectedBrand('NIKE')}
                      checked={selectedBrand === 'NIKE'}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      NIKE
                    </label>
                  </div>
                  <div className="form-check m-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      onChange={() => setSelectedBrand('ADIDAS')}
                      checked={selectedBrand === 'ADIDAS'}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                      ADIDAS
                    </label>
                  </div>
                  <div className="form-check m-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      onChange={() => setSelectedBrand('LOUIS VUITTON')}
                      checked={selectedBrand === 'LOUIS VUITTON'}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                      LOUIS VUITTON
                    </label>
                  </div>
                  <div className="form-check m-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                      onChange={() => setSelectedBrand('ARMANI')}
                      checked={selectedBrand === 'ARMANI'}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault5">
                      ARMANI
                    </label>
                  </div>
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


              <div className='p-3'>
                <select className="form-select w-75 mt-3 rounded-pill m-auto" >
                  <option>Dress</option>
                  <option>Jackets</option>
                  <option>Shoes</option>
                  <option>Kurtis </option>
                  <option>Watches</option>
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


            </div>

          </div>
          {/* left side col here  */}

          {/* products col */}
          <div className="col-md-9">
            <div className="row">
              {filteredProducts.map(({ id, img, name, price, strike }) => (
                <div className='col-md-4' key={id}>
                  <div className="w-75 text-center m-auto mt-5">
                    <img src={img} alt={name} className='w-100' />
                    <p className='m-2 fs-5 text-dark'>{name}</p>
                    <div className='d-flex mx-5'>
                      <h4 className='text-warning me-3'>${price}</h4>
                      <strike>${strike}</strike>
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
              ))}
            </div>

          <button className=' btn morebtn' onClick={() => loadMore()}>more Products</button>
          </div>


        </div>
      </div>
    </div>



  )
}

export default Mens
