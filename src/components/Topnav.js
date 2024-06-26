import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Logout from '../auth/Logout';

import Logo from "../images/hiredlogo.png";

// styles import
import { TopnavStyles } from '../styles/App.styles';

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
    <TopnavStyles>
      <div className="topnav shadow bg-light rounded z-index-3">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="hired logo" height="50px" />
          </a>
          {/* <h1 className="cursor-pointer">Hired</h1> */}
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
              <a href="/" onClick={() => (menu.current.style.right = "-250px")}>
                Home
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#about"
                onClick={() => (menu.current.style.right = "-250px")}
              >
                About
              </a>
            </li>
            {/* <li className="mt-2">
            <a
              href="#contact"
              onClick={() => (menu.current.style.right = "-250px")}
            >
              Contact
            </a>
          </li> */}

            <div className="btns mb-3">
              {isLoggedIn ? (
                <div className="auth-links">
                  <li>
                    <Link to={"/dashboard"} className="button">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Logout />
                  </li>
                </div>
              ) : (
                <div className="auth-links">
                  <li>
                    <Link to="/login" className="button">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="button">
                      Sign up
                    </Link>
                  </li>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </TopnavStyles>
  );
}

export default Topnav
