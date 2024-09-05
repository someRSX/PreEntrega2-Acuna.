import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-left">
        <Link to="/" className="navbar-brand"> TiendaRandom </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/category/nuevosproductos"> NUEVOS Productos Random </Link></li>
        <li><Link to="/category/productosrandom"> Productos Random </Link></li>
        <li><Link to="/category/otrosproductos"> Otros Productos Random </Link></li>
      </ul>

      <div className="navbar-cart">
        <a href="/cart">
        <img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="Cart" />
        </a>
      </div>

    </nav>
  );
}

export default Navbar;