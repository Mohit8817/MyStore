import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const Deal = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMinutes] = useState(0);
    const [sec, setSeconds] = useState(0);

    const deadline = "may, 10, 2024"

    const gettime = () => {
        const time = Date.parse(deadline) - Date.now()
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor(time / (1000 * 60 * 60) % 24))
        setMinutes(Math.floor(time / (1000 / 60) % 60))
        setSeconds(Math.floor(time / (1000) % 60))
    }
    useEffect(() => {
        const interval = setInterval(() => gettime(deadline), 1000)
        return () => clearInterval(interval)


    }, [])
    return (
        <div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className='p-3'>
                            {/* bag background  img  div */}
                            <div className='bagimg'>
                                <div className='row'>
                                    <div productclassName="col">
                                        <h1 className='text-dark text fs-1 mb-3 '>Deal Of The Week</h1>
                                        <p>This isn't your typical duffle bag. It often transitions smoothly from being a travel <br /> bag to a gym bag. lightweight, water-repellent fabrication that's still durable <br />and well-structured with shoe storage compartment for  quick-access <br />and a   main compartment with ample space.</p>
                                        <div className='text-warning fs-3'>$35.00<span className='text-dark fs-6'>/Hang Bag</span></div>


                                        {/* count down timer section  */}
                                        <div className="row mt-3 ">
                                            <div className="col-lg-5">
                                                <div className="row d-flex justify-content-between fw-bold">
                                                    <div className="col-3 px-2 text-center fw-bold">
                                                        <div className='bg-light rounded-3 '>
                                                            <h1 className='text-warning '>{days < 10 ? "0" + days : days}</h1>
                                                            <span>DAYS</span>
                                                        </div>

                                                    </div>
                                                    <div className="col-3 px-2 text-center fw-bold">
                                                        <div className='bg-light rounded-3 '>
                                                            <h1 className='text-warning'>{hours < 10 ? "0" + hours : hours}</h1>
                                                            <span>HRS</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-3 px-2  text-center fw-bold">
                                                        <div className='bg-light rounded-3'>
                                                            <h1 className='text-warning'>{mins < 10 ? "0" + mins : mins}</h1>
                                                            <span>MINS</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-3 px-2  text-center fw-bold">
                                                        <div className='bg-light rounded-3'>
                                                            <h1 className='text-warning'>{sec < 10 ? "0" + sec : sec}</h1>
                                                            <span>SECS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7"></div>
                                        </div>
                                        <div>
                                        <Link to="/s" className="btn btn-warning  mt-3 ">Shop Now</Link>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    )
}

export default Deal
