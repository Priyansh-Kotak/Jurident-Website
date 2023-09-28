import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import log from '../../assets/new jd 2.png'
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import { Helmet } from "react-helmet-async";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const handleSignOut = () => signOutUser();
  const { currentUser } = useContext(UserContext);



  return (
    <>
    <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container ">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={log} className="navbar-icon" />
              JURIDENT
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
              {currentUser && 
                  <li className="nav-item">
                <NavLink
                  to="/Services"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>}

              
              <li className="nav-item">
                <NavLink
                  to="/Blogs"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Blogs
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink
                  to="/News"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  News
                </NavLink>
              </li>

              
              <li className="nav-item">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About us
                </NavLink>
              </li>

            
              <li className="nav-item">
                {currentUser ? (
                    <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={handleSignOut}
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Login
                  </NavLink>
                )}
            
          </li>
        
          
             
              

                
            </ul>
            
            
          </div>
         
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
