import React from "react";
import { SingleHousePageStyles } from "./SingleHousePageStyles";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Spinner from "../../components/Spinner/Spinner";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowRight style={{ ...style, color: "#015151", fontSize: "30px" }} />
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
        }}
      />
    </div>
  );
}

const SingleHousePage = () => {
  const { id } = useParams();
  //console.log(id);

  const settings = {
    dots: true,
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
          <div>
            <h2 style={{ textAlign: "center" }}>
              Paris-Montparnasse: superb 34 m2 studio
            </h2>
          </div>
          <Slider {...settings} className="singlehouseimagecalendarbox">
            <div>
              <img
                src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="main-image"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=3750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="main-image"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="main-image"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="main-image"
              />
            </div>
          </Slider>

          <div>Calendar</div>
          <div>
            <div>
              <span>Country</span>
            </div>
            <div>
              <h4>Located at center of city</h4>
            </div>
            <div>
              <h4>Address of the house</h4>
            </div>
          </div>
          <div>
            <span>Published by Person</span>
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

          <div>
            <div>
              <span>Number of living room</span>
            </div>
            <div>
              <span>Number of beds</span>
            </div>
            <div>
              <span>Number of baths</span>
            </div>
          </div>
        </SingleHousePageStyles>
      </HelmetProvider>
    </>
  );
};

export default SingleHousePage;
