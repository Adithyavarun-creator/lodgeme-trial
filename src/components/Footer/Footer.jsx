import React from "react";
import { FooterStyles } from "./Footer";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer_contents">
        <div className="footer_grids">
          <div className="footer_grid1">
            <span>A Propos</span>
            <article>
              Et ullamcorper id dolor molestie aliquet eget. Duis ornare velit
              ipsuporttitor pretium et. Cursus etiam turpis ac felis, congue.
            </article>
            <span>Links Social</span>
          </div>
          <div className="footer_grid2">
            <span>Accueil de voyageurs</span>
            <li>Option d’annulation</li>
            <li>Resources</li>
            <li>Forum</li>
            <li>Aide</li>
          </div>
          <div className="footer_grid3">
            <span>Accueil de voyageurs</span>
            <li>Career</li>
            <li>About Us</li>
            <li>Amenities</li>
            <li>Services</li>
          </div>
          <div className="footer_grid4">
            <div>
              <span>Avez vous une question?</span>
            </div>
            <div className="footer-grid4-box">
              <div className="flex-gap10">
                <span>
                  <RiMapPin2Fill />
                </span>
                <span>263 santa marina, san Fransisco, California, USA</span>
              </div>
              <div className="flex-gap10">
                <span>
                  <IoCallSharp />
                </span>
                <span>000785665323</span>
              </div>
              <div className="flex-gap10">
                <span>
                  <IoMail />
                </span>
                <span> infos@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <hr className="footer_width" />
        </div>

        <div className="flex-center">
          <span className="footer_copyright">
            Copyright © 2023 Logde-me. Tout droit reservé
          </span>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
