import React from 'react'

const Services = () => {
    return (
        <div>
            <br />
            <br /><br />
            <div className="container mt-5">
                <div className="row  ">
                    <div className="col-md-4 mb-2 m-auto ">
                        <div className='card text-center'>
                            <i className="bi bi-credit-card-2-front fs-1 text-warning m-2"></i>
                            <p>SECURE PAYMENT</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2 m-auto">
                        <div className='card text-center'>
                            <i className="bi bi-truck fs-1 text-warning m-2"></i>
                            <p> FAST AND FREE DELIVERY</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2 m-auto">
                        <div className='card text-center'>
                            <div className="bi bi-stopwatch fs-1 text-warning m-2"></div>
                            <p> DELIVERY ON TIME</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <b><br /><br /><br /></b>

        </div>
    )
}

export default Services
