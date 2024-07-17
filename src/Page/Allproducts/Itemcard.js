import React from 'react'
import { useCart } from 'react-use-cart';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Itemcard = (props) => {
    const { addItem } = useCart();

    return (
        <div>
            <div className="mx-5 mb-5 text-center" >

                <img className="w-100 " src={props.img} alt='imgs' />
                <h5 className=" mt-3">{props.title}</h5>
                <h4 className=''>${props.price}</h4>
                <button style={{ backgroundColor: "orange" }} className='btn text-light'
                    onClick={() => { addItem(props.item); toast.success("Add Item Successfully", { position: 'top-center' }) }}
                >Add to Cart</button>
             

            </div>
        </div>
    )
}

export default Itemcard