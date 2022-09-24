import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footer/Footer';
import "./cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <div className='cart-container'>
                <h2 className='cart-title'>Your Cart !</h2>
              
                <div className='cart-top'>
                    <button>Continue Shopping</button>
                    <span>
                        <Link to=''> cart(5)</Link><span>  </span>
                        <Link to=''>WishList(5)</Link>
                    </span>
                    <Link to="/checkout/123"> <button className='prcd-btn'>CheckOut</button></Link>


                </div>
                <hr></hr>
                <div className='cart-middle'>
                    <div className='img-fluid'>
                        <img src='https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='abc' />
                      <span className='cart-item-details'>
                      <span>title</span>
                       <span>Id:123</span>
                       <span>color</span>
                       <span>size</span>
                       <span><b>Rs/- 1000</b></span>
                       

                      </span>
                    </div>

                 <span className='inc-btn'>
                 <button><i class="fa-sharp fa-solid fa-minus"></i></button>
                 <span> 5 </span>
                 <button> <i class="fa-sharp fa-solid fa-plus"></i></button>
                   
                 </span>


            <i class="fa-sharp fa-2x fa-solid fa-xmark"></i>
            </div>
          

            <div className='cart-middle'>
                    <div className='img-fluid'>
                        <img src='https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='abc' />
                      <span className='cart-item-details'>
                      <span>title</span>
                       <span>Id:123</span>
                       <span>color</span>
                       <span>size</span>
                       <span><b>Rs/- 1000</b></span>
                       

                      </span>
                    </div>

                 <span className='inc-btn'>
                 <button><i class="fa-sharp fa-solid fa-minus"></i></button>
                 <span> 5 </span>
                 <button> <i class="fa-sharp fa-solid fa-plus"></i></button>
                   
                 </span>


                   <i class="fa-sharp fa-2x fa-solid fa-xmark"></i>
            </div>
          




                <div>

                </div>
                <br/>
                <div className='prcd-btn-div'>
                <Link to="/checkout/123"> <button className='prcd-btn'>Proceed To Order!</button></Link>
               
                </div>
               

            </div>
            <Footer />

        </>

    )
}

export default Cart;