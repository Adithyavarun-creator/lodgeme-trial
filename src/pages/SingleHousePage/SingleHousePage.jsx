import React from "react";
import { SingleHousePageStyles } from "./SingleHousePageStyles";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import {
  FaArrowLeft,
  FaArrowRight,
  FaUsers,
  FaUsersSlash,
  FaBath,
} from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Spinner from "../../components/Spinner/Spinner";
import carouselImages from "../../datas/carouselImages";
import Button from "../../components/Button/Button";
import { PiShareFatFill } from "react-icons/pi";
import { MdFavoriteBorder, MdApartment } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { GiModernCity } from "react-icons/gi";
import { IoLocateSharp, IoBedSharp } from "react-icons/io5";
import { BsFillHouseFill } from "react-icons/bs";
import { PiArmchairFill } from "react-icons/pi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowRight
        style={{
          ...style,
          color: "#015151",
          fontSize: "30px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowLeft
        style={{
          ...style,
          color: "#015151",
          fontSize: "30px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

const SingleHousePage = () => {
  const { id } = useParams();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (!id) {
    return <Spinner />;
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title> Paris-Montparnasse: superb 34 m2 studio</title>
        </Helmet>
        <SingleHousePageStyles>
          <div className="singlepagetitlebox">
            <div>
              <h2>Paris-Montparnasse: superb 34 m2 studio</h2>
            </div>
            <div className="singlepagebookbox">
              <div>
                <Button title="Book Now" />
              </div>
              <div className="flex">
                <span>
                  <MdFavoriteBorder className="share-icon" />
                </span>
                <span className="sharetext">Save</span>
              </div>
              <div className="flex">
                <span>
                  <PiShareFatFill className="share-icon" />
                </span>
                <span className="sharetext">Share</span>
              </div>
            </div>
          </div>

          <div className="singlepageposition">
            <div>
              <Slider {...settings} className="singlehouseimagecalendarbox">
                {carouselImages.map((image) => (
                  <div key={image.id}>
                    <img src={image.imageSrc} alt="" className="main-image" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="fullviewbutton">
              <Button title="Click on full view" />
            </div>
          </div>

          <div className="singlepagelocations">
            <div className="singlepagelocation">
              <div className="singlepagelocationbox">
                <TiLocation className="singlepagelocationicons" />
                <span className="singlepagelocationtype">Country</span>
              </div>
              <div>
                <span className="singlepagelocationtext">USA</span>
              </div>
            </div>

            <div className="singlepagelocation">
              <div className="singlepagelocationbox">
                <IoLocateSharp className="singlepagelocationicons" />
                <span className="singlepagelocationtype">Location</span>
              </div>
              <div>
                <span className="singlepagelocationtext">
                  Centre of city at Paris
                </span>
              </div>
            </div>

            <div className="singlepagelocation">
              <div className="singlepagelocationbox">
                <MdApartment className="singlepagelocationicons" />
                <span className="singlepagelocationtype">Type</span>
              </div>
              <div>
                <span className="singlepagelocationtext">Apartment</span>
              </div>
            </div>

            <div className="singlepagelocation">
              <div className="singlepagelocationbox">
                <BsFillHouseFill className="singlepagelocationicons" />
                <span className="singlepagelocationtype">Type</span>
              </div>
              <div>
                <span className="singlepagelocationtext">House</span>
              </div>
            </div>

            <div className="singlepagelocation">
              <div className="singlepagelocationbox">
                <GiModernCity className="singlepagelocationicons" />
                <span className="singlepagelocationtype">Address</span>
              </div>
              <div>
                <span className="singlepagelocationtext">20, View Street</span>
              </div>
            </div>
          </div>

          <div className="singlepagehouserooms">
            <div className="singlepagehouseroomdetail">
              <PiArmchairFill />
              <span>1 Living room</span>
            </div>
            <div className="singlepagehouseroomdetail">
              <IoBedSharp />
              <span>2 Beds</span>
            </div>
            <div className="singlepagehouseroomdetail">
              <FaBath />

              <span>2 Baths</span>
            </div>
            <div className="singlepagehouseroomdetail">
              <FaUsers />

              <span> 2 Visitors Allowed</span>
            </div>
            <div className="singlepagehouseroomdetail">
              <FaUsersSlash />
              <span>Visitors Not allowed</span>
            </div>
          </div>

          <div className="">
            <div className="singlepagehousepublishbox">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="userimage"
                />
              </div>
              <div>
                <span className="singlepagehousepublishname">Jack</span>
              </div>
              <div>
                <span className="singlepagehousepublishsubname">
                  is responsible service provider for this house
                </span>
              </div>
            </div>
          </div>
          <div>
            <article>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos culpa fuga rerum quas? Harum ut, ab in dolorum
              delectus modi neque quaerat veniam velit non tempora, eum quos?
              Aliquam laboriosam dolores magnam earum atque, laudantium
              similique natus? Eligendi consectetur fugiat voluptatibus soluta
              voluptatem doloribus earum ducimus commodi, praesentium velit
              dolores quis in facere? Dolore aspernatur provident quis incidunt
              doloribus eveniet quas sunt, reiciendis at eius nemo ipsum
              pariatur ex delectus!
            </article>
          </div>
          <div>Calendar</div>
        </SingleHousePageStyles>
      </HelmetProvider>
    </>
  );
};

export default SingleHousePage;
