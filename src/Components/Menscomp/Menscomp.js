import React from 'react'
import img from '../../Images/m6.jpg'
import { mensdata } from '../../data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Menscomp = () => {

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
        <div>
            <div className="container mb-5 mt-5">
                <div className="row">
                    {/* aos Animation  */}
                    <div data-aos="zoom-in-down"
                        data-aos-duration="1000">
                        {/* background shadow div  */}
                        <div className="shadow"></div>

                        <h2 className='text-center mt-5 text'>Men's wear</h2>
                    </div>

                    {/* right side col  */}
                    <div className="col-md-9">
                        {/* main slider  */}
                        <Carousel responsive={responsive}>
                            {
                                mensdata.map(({ img, title, heading, price, index }) => {
                                    return (
                                        <div className=' mt-5' >
                                            <div data-aos="zoom-in-down"
                                                data-aos-duration="1000">
                                                <div className='text-center p-0' key={index}>
                                                    <img src={img} alt="" className='w-75 m-auto' />
                                                    <br /><br />
                                                    <small className='text-secondary '>{title}</small>
                                                    <p className=' m-0 fs-5'>{heading}</p>
                                                    <h4 className='text-warning'>{price}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>

                    {/* left side img  */}
                    <div className="col-md-3 p-2">
                        <div>
                            <img src={img} alt="" className='mensimg' />
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default Menscomp
