import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileNavStyle, NavbarStyles } from "./NavbarStyles";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavbarStyles>
        <Link to="/" className="linkStyle">
          <img className="navlogo" src={Logo} alt="brand-logo" />
        </Link>
        <div className="navbuttons">
          <div>
            <button className="navbutton">AJOUTER VOTRE LOGEMENT</button>
          </div>
          <div>
            <button className="navbutton">S’INSCRIRE</button>
          </div>
          <div>
            <button className="navbutton">SE CONNECTER</button>
          </div>
        </div>
      </NavbarStyles>

      <MobileNavStyle>
        <Link to="/">
          <img className="mobile_navlogo" src={Logo} alt="logo" />
        </Link>
        <div>
          <GiHamburgerMenu
            className="mobile_menunav"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {toggle && (
          <div className="mobile_navbox">
            <div className="mobile_menucloseiconbox">
              <MdClose
                className="mobile_menucloseicon"
                onClick={() => setToggle(false)}
              />
            </div>
            <div>
              <ul className="mobile_navmenus">
                <Link
                  to="/register-user-in"
                  className="linkStyle"
                  onClick={() => setToggle(false)}
                >
                  <li>Register</li>
                </Link>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
                <li>Menu 5</li>
              </ul>
            </div>
          </div>
        )}
      </MobileNavStyle>
    </>
  );
};

export default Navbar;
