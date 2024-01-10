import './App.css';
// react alter popup ...
import { ToastContainer } from 'react-toastify';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Pagenotfound from './Page/Pagenotfound/Pagenotfound';
import Navbar from './Components/Navbar/Navbar';
import Home from './Page/Home/Home';
import Womens from './Page/Womens/Womens';
import Mens from './Page/Mens/Mens';
import Kids from './Page/Kids/Kids';
import Products from './Page/Allproducts/Products';
import Footer from './Components/Footer/Footer';

// Aos Animation 
import Aos from 'aos';
// cart Component
import Showcartcomponent from './Page/Allproducts/Showcartcomponent';
import Userlogin from './Page/Userlogin/Userlogin';
import Contact from './Page/Contact/Contact';
// import About from './Page/About/About';


function App() {
  // Aos Animation
  useEffect(() => {
    Aos.init();

    // scroll to top on page load
    // scroll button .......
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <div>

        <div>
          <BrowserRouter basename='MyStore'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/womens' element={<Womens />}></Route>
              <Route path='/mens' element={<Mens />}></Route>
              {/* <Route path='/about' element={<About />}></Route> */}
              <Route path='/' element={<Kids />}></Route>
              <Route path='/allproducts' element={<Products />}></Route>
              <Route path='/cartcomponent' element={<Showcartcomponent />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/userlogin' element={<Userlogin />}></Route>
              <Route path='*' element={<Pagenotfound />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>

        <ToastContainer />



        {/* 👇️ scroll to top on button click */}

        <div>
          <i className='fa fa-arrow-up fs-1' onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
            style={{
              position: 'fixed',
              bottom: '40px',
              right: '40px',
              cursor: 'pointer',
              color: 'orange'

            }}></i>
        </div>

      </div>

    </>
  );
}

export default App;
