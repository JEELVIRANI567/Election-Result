import React from 'react'
import './Navbar.css';
import photo from '../Assets/Hero/photo.jpg'
const Navbar = () => {
  return (
    <header>
      <div className='menu-container'>
        <div className='left'>
          <img src={photo} alt="" style={{ width: "50px", height: "50px" }} />
          <h3>Election Commission of India</h3>
        </div>
        <div className='right'>
          <ul>

            <li class="dropdown">
              <a href="/" class="menu" id="menu-tools"><i class="fa fa-home" aria-hidden="true"></i> Home</a>

            </li>
            <li class="dropdown">
              <a href="index.html" class="menu"><i class="fas fa-rotate" aria-hidden="true"></i> Refresh</a>
            </li>

          </ul>
        </div>
      </div>
      <div className="disclaimer">
        <p>Disclaimer: ECI is displaying the information as being filled in the system by the Returning Officers from their respective Counting Centres. The final data for each AC/PC will be shared in Form-20.</p>
      </div>
    </header>

  )
}

export default Navbar