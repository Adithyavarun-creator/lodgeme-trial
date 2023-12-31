import React, { useState } from "react";
import LogoBlack from "../../assets/lodgmeblacklogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileNavStyle, NavbarStyles } from "./NavbarStyles";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("");

  const { t, i18n } = useTranslation();

  const selectedOption = (e) => {
    //console.log(e.target.value);
    const selected = i18n.changeLanguage(e.target.value);
    setSelect(selected);
    setToggle(false);
  };

  //   <motion.div
  //   initial={{ opacity: 0 }}
  //   animate={{ opacity: 1 }}
  //   transition={{ duration: 0.8, delay: 0.1 }}
  // >
  //   I have some content here
  // </motion.div>

  return (
    <>
      <NavbarStyles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Link to="/" className="linkStyle">
          <img className="navlogo" src={LogoBlack} alt="brand-logo" />
        </Link>
        <div className="navbuttons">
          <div>
            <Link to="/add-user-houses" className="navbutton linkStyle">
              {t("addAccommodation")}
            </Link>
          </div>
          <div>
            <Link to="/register-user-in" className="navbutton linkStyle">
              {t("register")}
            </Link>
          </div>
          <div>
            <Link to="/login-user-in" className="navbutton linkStyle">
              {t("login")}
            </Link>
          </div>
          {/* <div>
            <select
              className="navselect"
              value={select.name}
              onChange={selectedOption}
            >
              <option className="langOption" id="English" value="en">
                EN
              </option>
              <option className="langOption" id="French" value="fr">
                FR
              </option>
            </select>
          </div> */}
        </div>
      </NavbarStyles>

      <MobileNavStyle>
        <Link to="/">
          <img className="mobile_navlogo" src={LogoBlack} alt="logo" />
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
                  <li>{t("register")}</li>
                </Link>
                <li>Menu 2</li>
                <li>Menu 3</li>
                {/* <li>
                  <select value={select.name} onChange={selectedOption}>
                    <option className="langOption" id="English" value="en">
                      EN
                    </option>
                    <option className="langOption" id="French" value="fr">
                      FR
                    </option>
                  </select>
                </li> */}
              </ul>
            </div>
          </div>
        )}
      </MobileNavStyle>
    </>
  );
};

export default Navbar;
