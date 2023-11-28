import React, { useState, useEffect, useMemo } from "react";
import { HomepageStyles } from "./HomepageStyles";
import carouselImages from "../../datas/carouselImages";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import format from "date-fns/format";

import Select from "react-select";
import countryList from "react-select-country-list";

import { IoSearchSharp } from "react-icons/io5";
import { useRef } from "react";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaCalendarMinus, FaSearchLocation } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import HouseCard from "../../components/HouseCard/HouseCard";
import { useTranslation } from "react-i18next";
import { houseCards } from "../../datas/houseCards";
import { apartmentDatas } from "../../datas/apartmentDatas";

const Homepage = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    speed: 10000,
    cssEase: "linear",
    responsive: [],
  };

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  //for number
  const [noPersons, setnoPersons] = useState(1);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const personOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
  ];

  const styles = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#ffffff",
      };
    },
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#015151" : "#fff",
      backgroundColor: state.isSelected ? "#fff" : "#015151",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#015151",
      padding: "10px",
      border: "none",
      boxShadow: "none",
      color: "#ffffff",

      "@media only screen and (min-width: 1200px)": {
        ...styles["@media only screen and (min-width: 1200px)"],
        fontSize: "20px",
        height: "53px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        // width: "300px",
      },
      "@media (min-width: 768px) and (max-width: 1024px) ": {
        ...styles["@media (min-width: 768px) and (max-width: 1024px) "],
        fontSize: "12px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        textAlign: "center",
        width: "150px",
        //width: "300px",
      },
      "@media (min-width: 481px) and (max-width: 767px) ": {
        ...styles["@media (min-width: 481px) and (max-width: 767px) "],
        fontSize: "12px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        textAlign: "center",
        width: "150px",
        //width: "300px",
      },
      "@media (min-width: 280px) and (max-width: 480px) ": {
        ...styles["@media (min-width: 280px) and (max-width: 480px) "],
        fontSize: "14px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        textAlign: "center",
        width: "180px",
        padding: 0,
      },
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  const changeHandler = (value) => {
    setValue(value);
  };

  const changePersonHandler = (value) => {
    setnoPersons(value);
  };

  return (
    <HomepageStyles>
      <div className="homepage_header_image">
        <Slider {...settings}>
          {carouselImages.map((image) => (
            <div key={image.id}>
              <img
                className="homepage_header_img"
                src={image.imageSrc}
                alt={image.alt}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* <div>
        <h1>Un toit ou vous retrouver tous ensemble</h1>
      </div> */}
      <div>
        <div className="homepage_header_text">
          <h1>Un toit ou vous retrouver tous ensemble</h1>
        </div>

        <div className="homepage_search_container">
          <div className="search_select_width">
            <div className="search_labelbox">
              <span className="search_labeltitle"> {t("location")}</span>
              <span>
                <RiMapPin2Fill className="search_box_icon" />
              </span>
            </div>

            <Select
              className="select"
              placeholder={`${t("bookingdate")}`}
              options={options}
              value={value}
              onChange={changeHandler}
              styles={styles}
              name="location"
            />
          </div>

          <div>
            <div className="search_labelbox">
              <span className="search_labeltitle"> {t("bookingdate")}</span>
              <span>
                <FaCalendarMinus className="search_box_icon" />
              </span>
            </div>
            <input
              value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
                range[0].endDate,
                "MM/dd/yyyy"
              )}`}
              readOnly
              className="date_inputfield"
              onClick={() => setOpen((open) => !open)}
            />
          </div>

          <div className="datebox_range" ref={refOne}>
            {open && (
              <DateRangePicker
                className="date_range"
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction="horizontal"
                rangeColors={["#015151", "#6495ED", "#fed14c"]}
              />
            )}
          </div>

          <div>
            <div className="search_labelbox">
              <span className="search_labeltitle"> {t("persons")}</span>
              <span>
                <TbUsersGroup className="search_box_icon" />
              </span>
            </div>

            <Select
              className="select"
              placeholder={`${t("selectPersons")}`}
              options={personOptions}
              value={noPersons}
              onChange={changePersonHandler}
              styles={styles}
              name="person"
            />
          </div>
          <div>
            <div className="search_labelbox">
              <span className="search_labeltitle"> {t("submit")}</span>
              <span>
                <FaSearchLocation className="search_box_icon" />
              </span>
            </div>
            <button className="homepage_searchbtn">
              <IoSearchSharp className="" />
              {t("search")}
            </button>
          </div>
        </div>
      </div>

      {/* <div>
        <div>
          <h1 className="house_cardtexttitle">{t("searchbytype")}</h1>
        </div>
        <div className="house_cardbox">
          <div className="house_card">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="house_cardimg"
              />
            </div>
            <div className="house_cardsubs">
              <h3 className="house_cardmaintext">Look</h3>
              <span className="house_cardsubtext">For rent</span>
            </div>
          </div>
          <div className="house_card">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="house_cardimg"
              />
            </div>

            <div className="house_cardsubs">
              <h3 className="house_cardmaintext">Look</h3>
              <span className="house_cardsubtext">For rent</span>
            </div>
          </div>

          <div className="house_card">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="house_cardimg"
              />
            </div>

            <div className="house_cardsubs">
              <h3 className="house_cardmaintext">Look</h3>
              <span className="house_cardsubtext">For rent</span>
            </div>
          </div>

          <div className="house_card">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="house_cardimg"
              />
            </div>

            <div className="house_cardsubs">
              <h3 className="house_cardmaintext">Look</h3>
              <span className="house_cardsubtext">For rent</span>
            </div>
          </div>
          <div className="house_card">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="house_cardimg"
              />
            </div>
            <div className="house_cardsubs">
              <h3 className="house_cardmaintext">Look</h3>
              <span className="house_cardsubtext">For rent</span>
            </div>
          </div>
          <div className="house_card">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1700315990373-ecefbbe3e6bf?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="house_cardimg"
              />
            </div>
            <div className="house_cardsubs">
              <h3 className="house_cardmaintext">Look</h3>
              <span className="house_cardsubtext">For rent</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="mt-100"></div>

      <div>
        <HouseCard title="Top Rated Apartments" houseCards={apartmentDatas} />
      </div>

      <div>
        <HouseCard title="Top Rated Houses" houseCards={houseCards} />
      </div>
    </HomepageStyles>
  );
};

export default Homepage;

//    background-color: ${({ theme }) => theme.colors.numbering};
