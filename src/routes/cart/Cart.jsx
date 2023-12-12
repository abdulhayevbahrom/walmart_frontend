import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/header/Header'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { AddToCart, DecrementCart, RemoveFromCart } from '../../redux/addtoCart'

function Cart() {
    const cart = useSelector(s => s.AddToCart)
    const dispatch = useDispatch()
    console.log(cart);
    let cartLength = cart.reduce((a,b)=>a+b.quantity, 0)
    let totalPrice = Math.ceil(cart.reduce((a, b) => a + (b.price * b.quantity), 0))
    console.log(totalPrice);

    return (
        <div className='main_cart'>
            <Header totalPrice={totalPrice} length={cartLength} />
            <div className="cart_container">

                <div className="cart_heading">
                    <h3>Cart <span>({cartLength} items)</span></h3>
                </div>

                <div className="cart_items">
                    <div className="deliver_day">
                        Free shipping, arrivesThu, Dec 14 Fri, Dec 15
                    </div>

                    <div className="items">
                        {
                            cart.length > 0 && 
                            cart.map((item,index)=>
                            <div className='item'>
                                <img src={item.images[0]} alt="photo" />
                                <div className='item_title'>
                                    <p>{item.title}</p>
                                    <span>{item.price}</span>
                                    <p>{item.category}</p>
                                </div>
                                <div className="item_prices">
                                    <h4>{ item.price * item.quantity }</h4>
                                    <div>
                                        <button onClick={()=>{dispatch(RemoveFromCart({id:item.id}))}}>Remove</button>
                                        <button>Save for later</button>

                                            <div className="products__cards__item__addCart__inc">
                                                <FaMinus onClick={() => { dispatch(DecrementCart({ id: item.id })) }} />
                                                <b>{cart.find(p => p.id === item.id).quantity}</b>
                                                <FaPlus onClick={() => { dispatch(AddToCart({ product:item })) }} />
                                            </div>

                                    </div>
                                </div>
                            </div>
                            )

                        }
                    </div>

                </div>

                <div className="checkout">
                    <button>Continuo to checkout</button>
                    <p>For the best shopping experience, sign in</p>

                        <div>
                            <div>
                            <h4>Subtotal ({cartLength} items)</h4>
                            <p>{totalPrice}</p>
                            </div>   
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
