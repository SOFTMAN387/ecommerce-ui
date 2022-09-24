import React from 'react'
import "./navbar.css";
const Navbar = () => {
  return (
   <>
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" className='chk-box'  />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Menu</a></li>
                
            </ul>
          
        </div>
    </nav>

   </>
  )
}

export default Navbar