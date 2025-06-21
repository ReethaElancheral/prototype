import { NavLink } from 'react-router-dom';
import brandimage from '../assets/images/completed.png';
import homeimg from '../assets/images/Home.png';
import productimg from '../assets/images/products.png';
import { useState } from 'react';

export default function Sidebar() {
   const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(prev => !prev);
  };
  return (
    <>
    
     <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${open ? 'open' : ''}`}>
      <div className="brand">
        <img src={brandimage} alt="VetriMarket" className="icon" />
        <h1 className="brand-title">Vetri Market</h1>
      </div>

      <nav className="nav-links">
        <NavLink to="/" className="nav-item" activeclassname="active">
          <img src={homeimg} alt="Home" className="icon" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/products" className="nav-item" activeclassname="active">
          <img src={productimg} alt="Products" className="icon" />
          <span>Products</span>
        </NavLink>
      </nav>
    </div>
    </>
  );
}
