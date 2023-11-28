import { HouseCardStyles } from "./HouseCardStyles";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaHeart } from "react-icons/fa";
import Slider from "react-slick";
// import { dummyImages, houseCards } from "../../datas/houseCards";
import { IoHeartDislikeOutline } from "react-icons/io5";

const HouseCard = ({ houseCards, title }) => {
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
    <HouseCardStyles>
      <div>
        <h1>{title}</h1>
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

              {card.userImg && (
                <div className="toprated_favoriteuser">
                  <span className="">
                    <img src={card.userImg} alt="" className="toprated_user" />
                  </span>
                </div>
              )}

              <div className="toprated_house_cardsubs">
                <div className="housetitlebox">
                  {card.caption && (
                    <div>
                      <h3 className="toprated_house_cardmaintext">
                        {card.caption}
                      </h3>
                    </div>
                  )}
                  <div>
                    {card.ratingCount && (
                      <div className="flex">
                        <FaStar className="toprated_staricon" />
                        &nbsp;{" "}
                        <span className="toprated_ratingcount">
                          {card.ratingCount}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {card.location && (
                  <div className="toprated_locationbox">
                    <span>
                      <RiMapPin2Fill className="toprated_locationicon" />
                    </span>
                    <span> {card.location}</span>
                  </div>
                )}

                {card.subCaption && (
                  <div className="toprated_locationbox">
                    <span>{card.subCaption} </span>
                  </div>
                )}
                {card.subLocation && (
                  <div className="toprated_locationbox">
                    <span>{card.subLocation} </span>
                  </div>
                )}
                {card.country && (
                  <div className="toprated_locationbox">
                    <span>{card.country} </span>
                  </div>
                )}
                {card.priceperNight && (
                  <div className="flex">
                    <strong className="toprated_pricebox">
                      ${card.priceperNight}/night
                    </strong>
                  </div>
                )}
                <div className="toprated_reviewbox"></div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex-center mt-10 mb-20">
        <button className="toprated_button">{t("searchmore")}</button>
      </div>
    </HouseCardStyles>
  );
};

export default HouseCard;
