import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Logout from '../auth/Logout';

const Topnav = () => {
  const { isLoggedIn } = useAuth();

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
        <h1 className='cursor-pointer'>Hired</h1>
      </div>

      <span onClick={openMenu} className="open-menu">
        &#9776;
      </span>

      <div className="menu" ref={menu}>
        <span onClick={closeMenu} className="close-menu">
          &times;
        </span>
        <ul className="mt-3">
          <li className="mt-2">
            <a href="/" scroll={false}>
              Home
            </a>
          </li>
          <li className="mt-2">
            <a href="#about">About</a>
          </li>
          <li className="mt-2">
            <a href="#contact">Contact</a>
          </li>

          <div className="btns mb-3">
            {isLoggedIn ? (
              <>
                <li>
                  <Logout />
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Topnav
