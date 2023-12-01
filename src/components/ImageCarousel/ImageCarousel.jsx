import React from "react";
import { ImageCarouselStyles } from "./ImageCarouselStyles";
import { MdClose } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import carouselImages from "../../datas/carouselImages";
import { Carousel } from "flowbite-react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const ImageCarousel = ({ showImages, setShowImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ImageCarouselStyles>
      <div className="closecarousel">
        <MdClose
          className="closecarouselicon"
          onClick={() => setShowImages(false)}
        />
      </div>

      {carouselImages &&
        carouselImages.map((image) => (
          <div key={image.id} className="imgbox">
            <img className="img" src={image.imageSrc} />
          </div>
        ))}
    </ImageCarouselStyles>
  );
};

export default ImageCarousel;
