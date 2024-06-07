/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      clicked: false
    };
  }

  toggleDarkMode = () => {
    const { darkMode } = this.state;
    this.setState({ darkMode: !darkMode }, () => {
      if (this.state.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked
    }));
  };

  render() {
    const { darkMode, clicked } = this.state;

    return (
      <header className={darkMode ? `${styles.header} ${styles.dark}` : styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.itens_nav1}>
            <a className={styles.logo} href="#">
              Eder Natan
            </a>
            <ul className={styles.itens_nav2}>
              <li><a href="#section1">Section Segund</a></li>
              <li><a href="#section2">Section three</a></li>
              <li><a href="#">Section four</a></li>
            </ul>
          </div>
          <div>
            <ul className={styles.itens_nav2}>
              <div className={styles.itens_img}>
                <li><a href="#"><img src="/src/assets/img/twitter-icon.svg"alt="Twitter" className={darkMode ? styles.iconDark : ''}/></a></li>
                <li><a href="#"><img src="/src/assets/img/Vector(1).svg" alt=""className={darkMode ? styles.iconDark : ''}/></a></li>
                <li><a href="#"><img src="/src/assets/img/instagram-icon.svg"alt=""className={darkMode ? styles.iconDark : ''}/></a></li>
              </div>

              <div className={styles.itens_dark}><h6>Dark Mode :</h6>
                <div className={styles.itens_checkbox}>
                  <input type="checkbox" className={styles.checkbox} id="chk"checked={darkMode}onChange={this.toggleDarkMode}/>
                  <label className={styles.label} htmlFor="chk">
                    <div className={styles.ball}></div>
                  </label>
                </div>
              </div>
            </ul>
          </div>
          <div className={styles.icon_navbar}>
            <i onClick={this.toggleMenu}>
              <box-icon name={clicked ? 'x' : 'menu'}></box-icon>
            </i>
          </div>
        </nav>

        
      </header>
    );
  }
}

export default Header;
