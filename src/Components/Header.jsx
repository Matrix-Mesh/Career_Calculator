import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div id='main'>
        <div className='name'>
            <h2>STEP UP YOUR</h2>
            <h1><span>GOALS </span>WITH US</h1>
            <p className='details'>Build your dreams with Us</p>
            <div className='header-btns'>
                <a href="#Form" be onScroll="smooth" className='header-btn'>FILL UP</a>
            </div>
        </div>
    </div>
  )
}

export default Header;