import React from 'react';
import "./products.css";
import {Products } from '../../components/data/ApiData';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
const navigate=useNavigate();
  const handleClick=async()=>{
    try {
      navigate("/productsdetails/123");
    } catch (error) {
      
    }
  }
  return (
   <>
 <div className="container">
 <h1 className='prdct-title'>Products.</h1>
 
  <ul className="image-gallery">
 
  
  {Products.map((items=>{
    return (<>
      
        <li className='img-items' key={items.id} onClick={handleClick}>
      
        <img src={items.img}  alt="" className='img-item' />
       
       
         <div className='title-info'>
        
        {/* <h2>{items.title}</h2> */}
        <i className="fa fa-shopping-cart font-icon" aria-hidden="true"></i>
        <i class="fa fa-search font-icon" aria-hidden="true"></i>
        <i class="fa fa-heart font-icon" aria-hidden="true"></i>
        {/* <button className='btn-item'>Buy Now</button> */}
      
      </div>
      
    </li>
   
    
    </>)
  }))}
   


  </ul>
 
</div>

   </>
  )
}

export default Categories