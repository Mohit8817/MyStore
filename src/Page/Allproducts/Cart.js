import React from 'react'
import { useCart } from 'react-use-cart';
import './Cart.css'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1 className='emptycart'> <b>😒😒😒😒</b> Your cart is Empty <b>😒😒😒😒</b>
        <br /> <br /><br /><p>Please go product menu</p>
    </h1>
    
    return (

        <div className='container'>
            <div className='row'>
                <div className="shadow"></div>
                <h2 className='text text-center fs-1 mt-5 pt-5 '> 😍 Your Cart 😍</h2>
                <div className="col">
                    {/* shopping cart symbol */}
                    <div className='bagdiv'>
                        <h4><i className="bi bi-handbag-fill bag"> </i> <b>{totalUniqueItems}</b></h4>
                        <br />
                    </div>
                    <h4 className='mx-5 mt-4'> Total Items:({totalItems})</h4>


                    { /* show items div  */}
                    <div>
                        <table className='table table-hover   '>
                            <tbody className=''>
                                {
                                    items.map((item, index) => {
                                        return (
                                            <tr key={index} className='fs-5 row'>
                                                <td className='col-md-2'>
                                                
                                                    <img src={item.img} style={{ width: "5rem" }} alt='img' />
                                                </td>
                                                <td className='col-md-2'><strong>{item.title} </strong> </td>
                                                <td className='col-md-2'><b>${item.price}</b> </td>
                                                <td className='col-md-2'>Quantity <b>({item.quantity})</b></td>
                                                <td className='col-md-4'>
                                                    <div className="">
                                                        <i className='bi bi-dash-lg fs-4 text-danger btn' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}></i>
                                                        <i className='bi bi-plus-lg fs-4 text-success btn' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}></i>
                                                        <i className='btn btn' onClick={() => { removeItem(item.id); toast.error("Remove item Successfully") }}> <i className='bi bi-trash3 fs-2  text-danger'></i></i>
                                                    </div>

                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            {/* total amout div */}
            <div className='col m-2 text-center'>
                <h2 className='text-warning'>Total Price = <b className='text-dark'> $ {cartTotal}</b></h2>
                <hr />
            </div>

            <div className='text-center '>
                <button onClick={() => emptyCart()} className='btn btn-danger m-2'> Clear Cart
                </button>
                {/* <button className='btn btn-warning m-2'>Buy Now</button> */}

            </div>
        </div>


    )
}

export default Cart