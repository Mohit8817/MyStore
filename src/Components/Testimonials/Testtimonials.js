import React, { useState } from 'react'
import { testimonials } from '../../data';

const Testtimonials = () => {
    const [index, setIndex] = useState(1)
    const { name, quote, job, avatar } = testimonials[index];

    // prev btn fun

    const prev = () => {
        setIndex(prev => prev - 1);

        if (index <= 0) {
            setIndex(testimonials.length - 1);
        }

    }
    // next btn fun

    const next = () => {
        setIndex(prev => prev + 1);

        if (index >= testimonials.length - 1) {
            setIndex(0);
        }
    }

    return (
        <div>


            <div className="container mt-5">
                <hr />
                <div className="row">
                    {/* background shadow div  */}
                    <div className="shadow"></div>
                    <h2 className='text-center  mt-5 text'> Testimonial</h2>
                    <div className="col">
                        {/* card  */}
                        <div className="card card-test ">
                            <div className="card-body test-body text-center ">
                                {/* aos div  */}
                                <div data-aos="fade-up"
                                    data-aos-duration="1200">
                                    <img src={avatar} alt="img" className='test-img' />
                                </div>
                                <p className=''>{quote}</p>
                                <h3 className='text-warning'>{name}</h3>
                                <h6>{job}</h6>


                                {/* slider btn left right  */}
                                <div className='text-center mt-4'>
                                    <button className='btn text-warning fs-2 fw-bold m-2' onClick={prev}><i className="bi bi-arrow-left-circle"></i></button>
                                    <button className='btn text-warning fs-2 fw-bold m-2' onClick={next}><i className="bi bi-arrow-right-circle"></i></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testtimonials
