import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">MiLogo</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">Acerca</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
