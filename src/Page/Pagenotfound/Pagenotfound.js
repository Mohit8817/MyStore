import React from 'react'
import { Link } from 'react-router-dom'
import './Pagefound.css'
const Pagenotfound = () => {
  return (
    <div>
        <div class="container">
          <div class="row mt-2">
            <div class="col-sm-12 text-center">
              <div class="bg404">
                <h1 class="text-center text ">404</h1>
                <Link to="/" className="btn btn-warning">Back to home</Link>
                <div class="contant_box_404">
                  <h3>Look like you're lost </h3>
                  <p>the page you are looking for not avaible!</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
 
  )
}

export default Pagenotfound
