import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import badregLogo from '../Images/BadregT.png';

function NavBars() {
  const [selectedLink, setSelectedLink] = useState('Home');
  const selectedStyle = {
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const defaultStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div style={{ paddingBottom: 70 }}>
      <Navbar style={{ height: 70, backgroundColor: '#f59028' }} fixed="top" bg="#fd671a" variant="#fd671a">
        <div className="container">
          <Navbar.Brand href="/Home">
            <img style={{ height: 70, width: 70 }} src={badregLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ paddingRight: 30 }}>
              <a style={window.location.pathname === '/Home' || window.location.pathname === '/' ? selectedStyle : defaultStyle} href="/Home">
                HOME
              </a>
            </Navbar.Text>
            <Navbar.Text style={{ paddingRight: 20 }}>
              <a style={window.location.pathname === '/AboutUs' ? selectedStyle : defaultStyle} href="/AboutUs">
              ABOUT-US
              </a>
            </Navbar.Text>
            <Navbar.Text style={{ paddingRight: 20 }}>
              <a style={window.location.pathname === '/Contact' ? selectedStyle : defaultStyle} href="/Contact">
                CONTACT
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBars;
