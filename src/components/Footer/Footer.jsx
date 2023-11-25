import { FooterStyles } from "./FooterStyles";
import {
  MdOutlineLanguage,
  MdOutlineEuro,
  MdOutlineFacebook,
} from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer_grids">
        <div className="footer_grid">
          <div>
            <span className="footer_heading">Assistance</span>
          </div>
          <div>
            <span className="footer_subheading">Help Centre</span>
          </div>
          <div>
            <span className="footer_subheading">AirCover</span>
          </div>
          <div>
            <span className="footer_subheading">Anti-discrimination</span>
          </div>
          <div>
            <span className="footer_subheading">Disability support</span>
          </div>
          <div>
            <span className="footer_subheading">Cancellation options</span>
          </div>
          <div>
            <span className="footer_subheading">
              Report neighbourhood concern
            </span>
          </div>
        </div>

        <div className="footer_grid">
          <div>
            <span className="footer_heading">Hosting</span>
          </div>
          <div>
            <span className="footer_subheading">Lodgeme your home</span>
          </div>
          <div>
            <span className="footer_subheading">AirCover for Hosts</span>
          </div>
          <div>
            <span className="footer_subheading">Hosting resources</span>
          </div>
          <div>
            <span className="footer_subheading">Community forum</span>
          </div>
          <div>
            <span className="footer_subheading">Hosting responsibly</span>
          </div>
        </div>

        <div className="footer_grid">
          <div>
            <span className="footer_heading">Lodgeme</span>
          </div>
          <div>
            <span className="footer_subheading">Newsroom</span>
          </div>
          <div>
            <span className="footer_subheading">New features</span>
          </div>
          <div>
            <span className="footer_subheading">Careers</span>
          </div>
          <div>
            <span className="footer_subheading">Investors</span>
          </div>
          <div>
            <span className="footer_subheading">
              Lodgeme.org emergency stays
            </span>
          </div>
          <div>
            <span className="footer_subheading">
              Report neighbourhood concern
            </span>
          </div>
        </div>
      </div>

      <div className="footer_copyright">
        <div className="footer_center">
          <span className="footer_centertext">© 2023 Lodgeme</span>
          <span className="footer_centertext">Privacy</span>
          <span className="footer_centertext">Terms</span>
          <span className="footer_centertext">Sitemap</span>
          <span className="footer_centertext">Company Details</span>
        </div>

        <div className="footer_socialicons">
          <div className="footer_socialiconbox">
            <MdOutlineLanguage className="social_icon" />
            <span>Francais</span>
          </div>
          <div className="footer_socialiconbox">
            <MdOutlineEuro className="social_icon" />
            <span>EUR</span>
          </div>
          <div className="footer_socialiconbox">
            <MdOutlineFacebook className="social_icon" />
            <RiTwitterXFill className="social_icon" />
            <FaInstagramSquare className="social_icon" />
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;

/**
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
          <div className="footer_grid1">
            <span>Accueil de voyageurs</span>
            <li>Option d’annulation</li>
            <li>Resources</li>
            <li>Forum</li>
            <li>Aide</li>
          </div>
          <div className="footer_grid1">
            <span>Accueil de voyageurs</span>
            <li>Career</li>
            <li>About Us</li>
            <li>Amenities</li>
            <li>Services</li>
          </div>
          <div className="footer_grid1">
            <div>
              <span>Avez vous une question?</span>
            </div>
            <div className="footer-grid4-box">
              <div className="flex-gap10">
                <span>
                  <RiMapPin2Fill className="footer_icons" />
                </span>
                <span>263 santa marina, san Fransisco, California, USA</span>
              </div>
              <div className="flex-gap10">
                <span>
                  <IoCallSharp className="footer_icons" />
                </span>
                <span>000785665323</span>
              </div>
              <div className="flex-gap10">
                <span>
                  <IoMail className="footer_icons" />
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
 */
