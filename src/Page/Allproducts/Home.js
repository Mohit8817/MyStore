import React from 'react'
import { cartdata } from '../../data';
import Itemcard from './Itemcard';

const Home = () => {

    return (
        <div>

            <section className='container'>
            <div className='shadow'></div>
            <h1 className='text text-center mt-5 m-5'>All products</h1>
                <div className="row ">
                    <div className="col">
                        <div className="row">
                            {
                                cartdata.map((item, index) => {
                                    return (
                                        <div className="col-md-3 ">
                                        
                                            <Itemcard                                                
                                                id={item.id}
                                                img={item.img}
                                                title={item.title}
                                                price={item.price}
                                                item={item}
                                                key={index} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                </div>


            </section>

        </div>
    )
}

export default Home