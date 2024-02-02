import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Topnav = () => {
  const menu = useRef();

  const openMenu = () => {
    menu.current.style.right = "0px";
  };
  
  const closeMenu = () => {
    menu.current.style.right = "-250px";
  }

  return (
    <div className="topnav shadow bg-light rounded z-index-3">
      <div className="logo">
        <h1>Hired</h1>
      </div>

      <span onClick={openMenu} className="open-menu">
        &#9776;
      </span>

      <div className="menu" ref={menu}>
        <span onClick={closeMenu} className="close-menu">
          &times;
        </span>
        <ul>
          <li>
            <a href="/" scroll={false}>
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <div className="btns">
            <li>
              <Link to="/login" className="button">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="button">
                Signup
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Topnav
