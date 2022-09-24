import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import "./productsdetails.css";

const ProductsDetails = () => {
    return (
        <>
         <Topbar />
         <Navbar/>
    <div className='detais-container'>
        <div className='img-div'>
            <img className='img-url' src="https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='detais-div'>
       
        <h1>Title</h1>
        <h3>10002</h3>
        <span>lskdj;aslkdfasldkfasdlkfsdlfdkasdfdkassdfdk</span>
        <div className='options-menu'>
           <h3>Colors </h3>
           <span className='clr-white'></span>
           <span className='clr-black'></span>
           <span className='clr-silver'></span>
           <span className='clr-golden'></span>
            

            <h3 >Sort </h3>
            <select className='filter'>
            <option disabled>Size</option>
            <option>5</option>
            <option>10</option>
            <option>12</option>
            <option>15</option>
            </select>
        </div>
        <div className='inc-dec'>
        <div>
         <span className='inc-dec-btn'> <i class="fa-sharp fa-solid fa-minus"></i></span>
        <span><b>5</b></span>
       <span className='inc-dec-btn'> <i class="fa-sharp fa-solid fa-plus"></i></span>
        </div>
       <div> <button>Add To Cart</button></div>
      
        </div>

        </div>

     </div>
          <Footer />
        </>
      );
    };

export default ProductsDetails;