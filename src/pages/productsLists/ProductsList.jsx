import React from 'react';
import "./productslists.css";
import Navbar from '../../components/navbar/Navbar';
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footer/Footer';
import Products from '../products/Products';


const ProductsList = () => {
  return (
  <>
    <Topbar />
    <Navbar/>
    <div className='filter-container'>
        <div>
        <span> Filter Products:</span>
        <select className='slct-optn'>
            <option disabled>color</option>
            <option>silver</option>
            <option>golden</option>
            <option>black</option>
            <option>white</option>
        </select>
        <select className='slct-optn'>
            <option disabled>Size</option>
            <option>5 </option>
            <option>9</option>
            <option>12</option>
            <option>15</option>
        </select>
      
        </div>
        <div>
        <span> Sort Products:</span>
        <select className='slct-optn'>
            <option disabled>Price</option>
            <option>10,000</option>
            <option>15,000</option>
            <option>20,000</option>
            <option>25,000</option>
        </select>
        </div>
    </div>
    <Products />
    <Footer />
  </>
  )
}

export default ProductsList