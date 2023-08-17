import React from 'react'
import { blog } from '../../data'
import { Link } from 'react-router-dom'


const Blog = () => {
    return (
        <div>

            <div className="container mt-5">
                <div className="row ">
                    {/* background shadow div  */}
                    <div className="shadow"></div>
                    <h1 className='text-center mt-5 text'> From The Blog</h1>
                    <div className="col">
                        <div className="row">


                         {/* Blog card here  */}
                            {
                                blog.map(({ photo, icontext, headings, para, index}) => {
                                    return (    

                                        <div className="col-md-4 ">
                                            <div className=" mx-5 mt-5" key={index}>
                                                <img src={photo} alt="" className='w-100' />
                                                <div className='fs-5 mt-2 m-2'>
                                                    <i className='fa fa-calendar text-warning'>  <small className='text-secondary'>{icontext}</small></i>
                                                    <i className='bi bi-chat text-warning mx-2'></i><span className='text-secondary'>5</span>
                                                </div>
                                                <h4>{headings}</h4>
                                                <small className='text-secondary'>{para}</small>
                                                <br />
                                                <Link to="/" className='text-warning'>read more</Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
