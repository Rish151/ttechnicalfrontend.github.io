import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const location = useLocation(); // Get the current path

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleNavLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Technical Twist</NavLink>
          </div>
          <nav className="nav-links1">
            <ul>
              <p>{user ? `Hi ${user.username} ` : ``}</p>
              {/* Only show Home link if the current path is not '/' */}
              {location.pathname !== "/" && (
                <li>
                  <NavLink to="/" onClick={handleNavLinkClick}>
                    Home
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/about" onClick={handleNavLinkClick}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" onClick={handleNavLinkClick}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleNavLinkClick}>
                  Contact
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" onClick={handleNavLinkClick}>
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" onClick={handleNavLinkClick}>
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" onClick={handleNavLinkClick}>
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <div className="mobMenu" onClick={handleToggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            {showMenu && (
              <ul className="mobile-nav-links">
                <p>{user ? `Hi ${user.username} ` : ``}</p>
                {location.pathname !== "/" && (
                  <li>
                    <NavLink to="/" onClick={handleNavLinkClick}>
                      Home
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/about" onClick={handleNavLinkClick}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/service" onClick={handleNavLinkClick}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={handleNavLinkClick}>
                    Contact
                  </NavLink>
                </li>
                {isLoggedIn ? (
                  <li>
                    <NavLink to="/logout" onClick={handleNavLinkClick}>
                      Logout
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li>
                      <NavLink to="/register" onClick={handleNavLinkClick}>
                        Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login" onClick={handleNavLinkClick}>
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
