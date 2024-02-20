import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/NavbarComponent.css'; // Import the CSS file
import catLogo from '../assets/images/cat-logo.jpg'

const NavbarComponent: React.FC = () => {
  return (
      <nav>
        <Link to="/" className="navbar-link logo">
          <img src={catLogo} width="80" height="80" alt="Cattery Logo" />
            <h5 className="logo-text"> Fluffy Fluffy</h5>
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
              Home
          </Link>
          <Link to="/kittens" className="navbar-link">
            Kittens
          </Link>
          <Link to="/our-cats" className="navbar-link">
            Our Cats
          </Link>
          <Link to="/owning" className="navbar-link">
            Owning
          </Link>
        </div>
      </nav>
  );
};

export default NavbarComponent;
