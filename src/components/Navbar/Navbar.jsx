import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileNavStyle, NavbarStyles } from "./NavbarStyles";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavbarStyles>
        <div>
          <img className="homepage_navlogo" src={Logo} alt="brand-logo" />
        </div>
        <div className="homepage_navbuttons">
          <div>
            <button className="homepage_navbutton">
              AJOUTER VOTRE LOGEMENT
            </button>
          </div>
          <div>
            <button className="homepage_navbutton">S’INSCRIRE</button>
          </div>
          <div>
            <button className="homepage_navbutton">SE CONNECTER</button>
          </div>
        </div>
      </NavbarStyles>

      <MobileNavStyle>
        <div>
          <img className="mobile_navlogo" src={Logo} alt="logo" />
        </div>
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
                <li>Menu 1</li>
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
