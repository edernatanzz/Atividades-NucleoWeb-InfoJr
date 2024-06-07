// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  menuShow = () => {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      icon.src = "/src/assets/icons/menu-regular-24.png";
    } else {
      menuMobile.classList.add('open');
      icon.src = "/src/assets/icons/x-regular-24.png";
    }
  }

  render() {
    return (
      <section className='header-mobile'>
        <nav className="nav-bar">
          <div className="mobile-menu-icon">
            <button onClick={this.menuShow}>
              <img src="/src/assets/icons/menu-regular-24.png" alt="Menu Icon" className="icon" />
            </button>
          </div>
        </nav>
        <div className="mobile-menu">
          <ul>
            <li className="nav-item"><a href="#section1" className="nav-link">Section One</a></li>
            <li className="nav-item"><a href="#section2" className="nav-link">Section Tree</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Section</a></li>
          </ul>
          <div className="icons">
            <ul className="itens_img-mobile">
              <li><a href="#"><img src="/src/assets/img/twitter-icon.svg" alt="Twitter" /></a></li>
              <li><a href="#"><img src="/src/assets/img/Vector(1).svg" alt="Icon" /></a></li>
              <li><a href="#"><img src="/src/assets/img/instagram-icon.svg" alt="Instagram" /></a></li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
