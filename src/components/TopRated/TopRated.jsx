import { TopRatedStyles } from "./TopRatedStyles";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
// import { dummyImages, houseCards } from "../../datas/houseCards";
import { IoHeartDislikeOutline } from "react-icons/io5";

const TopRated = ({ houseCards }) => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <TopRatedStyles>
      <div>
        <h1>{t("toprated")}</h1>
      </div>
      <div className="toprated_house_cardbox">
        {houseCards?.length &&
          houseCards?.map((card) => (
            <div className="toprated_house_card" key={card.id}>
              <Slider {...settings}>
                {card.images.map((image) => (
                  <div key={image.id}>
                    <img
                      src={image.imgSrc}
                      alt=""
                      className="toprated_house_cardimg"
                    />
                  </div>
                ))}
              </Slider>

              <div className="toprated_favorite">
                <span className="">
                  {card.favorite && (
                    <FaHeart className="toprated_favoriteicon" />
                  )}
                  {!card.favorite && (
                    <IoHeartDislikeOutline className="toprated_favoriteicon" />
                  )}
                </span>
              </div>

              <div className="toprated_favoriteuser">
                <span className="">
                  <img src={card.userImg} alt="" className="toprated_user" />
                </span>
              </div>

              <div className="toprated_house_cardsubs">
                <div className="housetitlebox">
                  <div>
                    <h3 className="toprated_house_cardmaintext">
                      {card.caption}
                    </h3>
                  </div>
                  <div>
                    <div className="flex">
                      <FaStar className="toprated_staricon" />
                      &nbsp;{" "}
                      <span className="toprated_ratingcount">
                        {card.ratingCount}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="toprated_locationbox">
                  <span>
                    <RiMapPin2Fill className="toprated_locationicon" />
                  </span>
                  <span> {card.location}</span>
                </div>

                <div className="toprated_locationbox">
                  <span>{card.subCaption} </span>
                </div>
                <div className="flex">
                  <strong className="toprated_pricebox">
                    ${card.priceperNight}/night
                  </strong>
                </div>
                <div className="toprated_reviewbox"></div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex-center mt-10 mb-20">
        <button className="toprated_button">{t("searchmore")}</button>
      </div>
    </TopRatedStyles>
  );
};

export default TopRated;
