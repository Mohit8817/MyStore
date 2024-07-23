import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../Images/m5.jpg'
import { Womendata } from '../../data'

function Womenscomp() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    {/* aos Animation  */}
                    <div data-aos="zoom-in"
                        data-aos-duration="1000">
                        {/* background shadow div  */}
                        <div className="shadow"></div>
                        <h2 className='text-center mt-5 text'>Women's wear</h2>
                    </div>
                    {/* Right side img  */}
                    <div className="col-md-3">
                        <div data-aos="fade-right"
                            data-aos-duration="2000">
                            <div>
                                <img src={img} alt="" className=' womensimg' />
                            </div>
                        </div>
                    </div>
                    {/* Left side slider  */}
                    <div className="col-md-9 p-5">
                        {/* main slider  */}
                        <div className="container">
                            <div className="row">
                                <div className="col">

                                {/* women data in Data.js Component Line no - 62 to 129   */}
                                    <Carousel responsive={responsive}>
                                        {
                                            Womendata.map(({ img, title, heading, price, index }) => {
                                                return (
                                                    <div className=' m-1' key={index}>
                                                        <div data-aos="zoom-in-down"
                                                            data-aos-duration="1000">
                                                            <div className='text-center p-0'>

                                                                <img src={img} alt="" className='w-75 m-auto' />
                                                                <br /><br />
                                                                <small className='text-secondary '>{title}</small>
                                                                <p className=' m-0 fs-5'>{heading}</p>
                                                                <h4 className='text-warning '>{price}</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};
export default Womenscomp;
