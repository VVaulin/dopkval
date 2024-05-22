import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '../pages/About';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import FAQ from '../pages/FAQ';
import Contacts from '../pages/Contacts';
import styles from './Nav.module.css'; // Импортируем CSS модули 
import Home from '../pages/Home'
import logo from '../img/logo.svg'
import calc from '../img/calculation.svg'
import req from '../img/measering.svg'



const Navigation = () => {
  return (
    <Router>
      <div>
        {/* Навигационное меню */}
        <nav className={`navbar ${styles.navbar}`}>
          <ul>
            <li><Link to="/" className={styles.navLink}><img src={logo} alt='home' ></img></Link></li>
            <li><Link to="/Services" className={styles.navLink}>Services</Link></li>
            <li><Link to="/Products" className={styles.navLink}>Products</Link></li>
            <li><Link to="/About" className={styles.navLink}>About us</Link></li>
            <li><Link to="/portfolio" className={styles.navLink}>Portfolio</Link></li>
            <li><Link to="/faq" className={styles.navLink}>FAQ</Link></li>
            <li><Link to="/contacts" className={styles.navLink}>Contacts</Link></li>
            <button className={styles.btn1}><img src={req} alt='logo'></img> Make request</button>
            <button className={styles.btn2}><img src={calc} alt='logo'></img> Calculation</button>
          </ul>
          
        </nav>
        <div>
          
        </div>

        {/* Контент страниц */}
        <div className={styles.pageContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Navigation;