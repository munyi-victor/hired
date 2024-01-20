/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef} from 'react';
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
            <Link to="/" scroll={false}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topnav
