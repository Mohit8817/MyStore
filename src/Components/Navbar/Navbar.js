import React from 'react'
import './Navbar.css'
import { links } from '../../data'
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbarManage');
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // Add or remove the 'scrolled' class based on the scroll position
            (scrollTop > 200) ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="navbarManage" className='container-fluid nav_pos'>
                <div className="row">
                    <div className="col-12 px-0">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                {/* toggle btn  */}
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                                    <i className='fa fa-bars text-dark'></i>
                                </button>
                                {/* logo img  */}
                                <div className='text-center text-sm-center text-lg-start '>
                                    <Link to="/" className=' text-warning d-flex'>
                                        <i className="bi bi-shop  fs-2 mx-4"></i>
                                        <i className=""></i>    <h3 className='text fw-bold fs-3 m-2'>My Store</h3>
                                    </Link>
                                </div>

                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className='navbar-nav left_nav'>
                                        {/* Nav link data and path in Data.js component line NO.26-60   */}
                                        {
                                            links.map(({ name, path }, index) => {
                                                return (
                                                    <li className='nav-item' key={index}>
                                                        <NavLink className="nav-link fs-6 m-2 text-dark" to={path}>{name}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>


                                {/* user logo  for log in page */}
                                <Link to="/userlogin">
                                    <i className='bi bi-person-circle  text-dark fs-2 me-4'></i>
                                </Link>
                                {/* cart logo for cart page  */}
                                <div className=''>
                                    <Link to="/cartcomponent">
                                        <i className='bi bi-cart3 fs-1 cart' ></i>
                                    </Link>
                                </div>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
