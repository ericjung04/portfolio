import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">

        <div className='nav-left'>
            <a href="#hero" className="name">Eric Jung</a>
        </div>

        <div className='nav-right'>
            <ul className="links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        <button
          className="hamburger-menu"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>    
    </nav>
  );
}

export default Navbar;