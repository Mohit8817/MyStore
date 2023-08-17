import React from 'react'
import './login.css'
import imge from '../../Images/login2.jpg'
const Userlogin = () => {
  return (
    <div>
      <div className="container bg-light shadow-md mt-5">
        <div className="row">
        <div className="col-md-2"></div>

          {/* right side col img  */}
          <div className="col-md-4">          
              <img src={imge} alt="loginimg" className='loginimg' />            
          </div>

          {/* left side col  */}
          <div className="col-md-6 mt-5">
            <div className="login-box">
              <h2>Sign Up</h2>
              <form>
                <div className="user-box">
                  <input type="text" name="" required="any" />
                  <label>Username</label>
                </div>
                <div className="user-box">
                  <input type="password" name="" required="any" />
                  <label>Password</label>
                </div>

                <a href="/"> Log in </a>

                {/* login icons  */}
                <div className='mt-5'>
                  <span className='m-0'>or login with</span>   &nbsp;
                  <i className='bi bi-facebook text-light m-2  bg-primary p-2 rounded-2'></i>               
                  <i className='bi bi-google text-light m-2 bg-danger p-2 rounded-2'></i>               
                  <i className='bi bi-twitter text-light m-2 bg-info p-2 rounded-2'></i>               
                </div>

              </form>
            </div>
          </div>
          <div className="col-md-2"></div>

        </div>
      </div>
    </div>
  )
}

export default Userlogin


