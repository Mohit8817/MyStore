import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>

            <div>
                <footer>
                    <div className="container-fluid footer_cont">
                        {/* input field row here  */}
                        <div className="row m-4">
                            <div className="col-md-8 mt-4">
                                <div className='d-flex from-group m-4'>
                                    <input type="text" placeholder='Enter your Email' className='w-50 p-3 form-control ' />
                                    <Link to="s" className='btn btn-danger p-3 mx-2 fs-6' > Subscribe </Link>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className=''>
                                    <h2 className='text fs-4 mt-4'> Subscribe Newsletter</h2>
                                    <p className='text-light'>Subscribe newsletter to get 5% on all products.</p>
                                </div>
                            </div>
                        </div>
                        {/* ................ */}

                        <hr />
                        {/* second row..... */}
                        <div className="row">
                            <div className="col-md-6 p-5">
                                <div >
                                    <Link to="/" className=' text-warning d-flex'>
                                        <i className="bi bi-shop  fs-2 mx-4"></i>
                                        <i className=""></i>    <h3 className='text fw-bold fs-3 m-2'>My Store</h3>
                                    </Link>
                                    <p className='text-light '>
                                    My passion is to support USA entrepreneurs and bring manufacturing back to our country. For years people have approached me with great products but have no way of marketing them. MyStore.com was created to give those people a voice and a platform!</p>
                                    <div className=' fs-4 footer-fa'>
                                        <a href="https://linkedin.com"><i className='fa fa-linkedin bg-light rounded p-2 '></i></a>
                                        <a href="https://facebook.com"><i className='fa fa-facebook m-2 bg-light rounded  p-2 '></i></a>
                                        <a href="https://twitter.com"><i className='fa fa-twitter bg-light rounded p-2 '></i></a>
                                        <a href="https://instagram.com"><i className='fa fa-instagram m-2 bg-light rounded p-2 '></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 ">
                                <div className=' footer_col'>
                                    <h4>Permalinks</h4>
                                    <Link to="/mens">Mens</Link>
                                    <Link to="womnes">Womens</Link>
                                    <Link to="/kids">Kids</Link>
                                    <Link to="/allproducts">Products</Link>
                                    <Link to="/contact">Contact</Link>
                                </div>
                            </div>

                            <div className="col-md-2 ">
                                <div className='footer_col'>
                                    <h4>Insights</h4>
                                    <Link to="/s">Blog</Link>
                                    <Link to="/s">Case Studies</Link>
                                    <Link to="/s">Events</Link>
                                    <Link to="/s">Communities</Link>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className='  footer_col'>
                                    <h4>Get in touch</h4>
                                    <Link to="/contact">Contact</Link>
                                    <Link to="/s">Support</Link>
                                </div>
                            </div>

                            <div className='text-center text-light fs-5 mb-3'>
                                <hr />
                                <small>2023 MY STORE WEBSITE &copy; All Right Reserved | This template is made ❤️ by Mohit</small>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer


