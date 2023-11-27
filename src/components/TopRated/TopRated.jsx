import { TopRatedStyles } from "./TopRatedStyles";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TopRated = () => {
  const { t, i18n } = useTranslation();

  return (
    <TopRatedStyles>
      <div>
        <h1>{t("toprated")}</h1>
      </div>
      <div className="toprated_house_cardbox">
        <div className="toprated_house_card">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="toprated_house_cardimg"
            />
          </div>
          <div className="toprated_pricebox">
            <span className="toprated_price">$200/nuit</span>
          </div>

          <div className="toprated_house_cardsubs">
            <div className="toprated_locationbox">
              <span>
                <RiMapPin2Fill />
              </span>
              <span className="toprated_location"> 3517 W. Gray St. Utica</span>
            </div>
            <div>
              <h3 className="toprated_house_cardmaintext">Look</h3>
            </div>
            <div className="toprated_locationbox">
              <span className="toprated_desc">
                Duis aute irure dolor in velitrep
              </span>
            </div>
            <div className="toprated_reviewbox">
              <div className="flex">
                <FaStar className="toprated_staricon" />
                &nbsp; 9.1
              </div>
              <div>
                <span className="toprated_dates">09 - 14 Nov</span>
              </div>
            </div>
          </div>
        </div>
        <div className="toprated_house_card">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="toprated_house_cardimg"
            />
          </div>
          <div className="toprated_pricebox">
            <span className="toprated_price">$200/nuit</span>
          </div>

          <div className="toprated_house_cardsubs">
            <div className="toprated_locationbox">
              <span>
                <RiMapPin2Fill />
              </span>
              <span> 3517 W. Gray St. Utica</span>
            </div>
            <div>
              <h3 className="toprated_house_cardmaintext">Look</h3>
            </div>
            <div className="toprated_locationbox">
              <span>Duis aute irure dolor in velitrep </span>
            </div>
            <div className="toprated_reviewbox">
              <div className="flex">
                <FaStar className="toprated_staricon" />
                &nbsp; 9.1
              </div>
              <div>
                <span>09 - 14 Nov</span>
              </div>
            </div>
          </div>
        </div>
        <div className="toprated_house_card">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="toprated_house_cardimg"
            />
          </div>
          <div className="toprated_pricebox">
            <span className="toprated_price">$200/nuit</span>
          </div>

          <div className="toprated_house_cardsubs">
            <div className="toprated_locationbox">
              <span>
                <RiMapPin2Fill />
              </span>
              <span> 3517 W. Gray St. Utica</span>
            </div>
            <div>
              <h3 className="toprated_house_cardmaintext">Look</h3>
            </div>
            <div className="toprated_locationbox">
              <span>Duis aute irure dolor in velitrep </span>
            </div>
            <div className="toprated_reviewbox">
              <div className="flex">
                <FaStar className="toprated_staricon" />
                &nbsp; 9.1
              </div>
              <div>
                <span>09 - 14 Nov</span>
              </div>
            </div>
          </div>
        </div>
        <div className="toprated_house_card">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="toprated_house_cardimg"
            />
          </div>
          <div className="toprated_pricebox">
            <span className="toprated_price">$200/nuit</span>
          </div>

          <div className="toprated_house_cardsubs">
            <div className="toprated_locationbox">
              <span>
                <RiMapPin2Fill />
              </span>
              <span> 3517 W. Gray St. Utica</span>
            </div>
            <div>
              <h3 className="toprated_house_cardmaintext">Look</h3>
            </div>
            <div className="toprated_locationbox">
              <span>Duis aute irure dolor in velitrep </span>
            </div>
            <div className="toprated_reviewbox">
              <div className="flex">
                <FaStar className="toprated_staricon" />
                &nbsp; 9.1
              </div>
              <div>
                <span>09 - 14 Nov</span>
              </div>
            </div>
          </div>
        </div>
        <div className="toprated_house_card">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="toprated_house_cardimg"
            />
          </div>
          <div className="toprated_pricebox">
            <span className="toprated_price">$200/nuit</span>
          </div>

          <div className="toprated_house_cardsubs">
            <div className="toprated_locationbox">
              <span>
                <RiMapPin2Fill />
              </span>
              <span> 3517 W. Gray St. Utica</span>
            </div>
            <div>
              <h3 className="toprated_house_cardmaintext">Look</h3>
            </div>
            <div className="toprated_locationbox">
              <span>Duis aute irure dolor in velitrep </span>
            </div>
            <div className="toprated_reviewbox">
              <div className="flex">
                <FaStar className="toprated_staricon" />
                &nbsp; 9.1
              </div>
              <div>
                <span>09 - 14 Nov</span>
              </div>
            </div>
          </div>
        </div>
        <div className="toprated_house_card">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="toprated_house_cardimg"
            />
          </div>
          <div className="toprated_pricebox">
            <span className="toprated_price">$200/nuit</span>
          </div>

          <div className="toprated_house_cardsubs">
            <div className="toprated_locationbox">
              <span>
                <RiMapPin2Fill />
              </span>
              <span> 3517 W. Gray St. Utica</span>
            </div>
            <div>
              <h3 className="toprated_house_cardmaintext">Look</h3>
            </div>
            <div className="toprated_locationbox">
              <span>Duis aute irure dolor in velitrep </span>
            </div>
            <div className="toprated_reviewbox">
              <div className="flex">
                <FaStar className="toprated_staricon" />
                &nbsp; 9.1
              </div>
              <div>
                <span>09 - 14 Nov</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center mt-10 mb-20">
        <button className="toprated_button">{t("searchmore")}</button>
      </div>
    </TopRatedStyles>
  );
};

export default TopRated;
