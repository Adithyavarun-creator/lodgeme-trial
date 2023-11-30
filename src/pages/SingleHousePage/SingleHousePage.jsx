import React, { useEffect, useRef, useState } from "react";
import { SingleHousePageStyles } from "./SingleHousePageStyles";
import { Link, useParams } from "react-router-dom";
import { FaUsers, FaUsersSlash, FaBath, FaWifi, FaStar } from "react-icons/fa";
import { FaKitchenSet, FaTreeCity, FaElevator } from "react-icons/fa6";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";
import { PiElevatorLight, PiShareFatFill } from "react-icons/pi";
import { MdFavoriteBorder, MdApartment } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { GiModernCity, GiWashingMachine } from "react-icons/gi";
import { IoLocateSharp, IoBedSharp } from "react-icons/io5";
import { BsFillHouseFill } from "react-icons/bs";
import { PiArmchairFill } from "react-icons/pi";
import { RiTempHotFill } from "react-icons/ri";
import { TbHanger } from "react-icons/tb";
import Mapbox from "../../components/MapBox/MapBox";
import { DateRangePicker, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays, differenceInDays } from "date-fns";
import format from "date-fns/format";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Select from "react-select";

const SingleHousePage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [noPersons, setnoPersons] = useState(1);

  const [diffInDays, setDiffInDays] = useState(0);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  //date
  // const date1 = new Date(2020, 5, 1); // the later date
  // const date2 = new Date(2020, 2, 1); // the earlier date
  // const result = differenceInDays(range.startDate, range.endDate);
  //console.log(result);

  const dateRef = useRef();
  const reviewRef = useRef();

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

  const onClick = () => {
    dateRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const clickReview = () => {
    reviewRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const changePersonHandler = (value) => {
    setnoPersons(value);
  };

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
      border: "none",
      boxShadow: "none",
      color: "#ffffff",
      fontSize: "16px",
      height: "40px",
      textAlign: "center",
      width: "100%",

      "@media only screen and (min-width: 1200px)": {
        ...styles["@media only screen and (min-width: 1200px)"],
        fontSize: "14px",
        height: "40px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        padding: "0px",
        width: "100%",

        // width: "300px",
      },
      "@media (min-width: 768px) and (max-width: 1024px) ": {
        ...styles["@media (min-width: 768px) and (max-width: 1024px) "],
        fontSize: "12px",
        height: "25px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        textAlign: "center",
        padding: "0px",
        width: "100%",
      },
      "@media (min-width: 481px) and (max-width: 767px) ": {
        ...styles["@media (min-width: 481px) and (max-width: 767px) "],
        fontSize: "8px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        height: "30px",
        textAlign: "center",
        padding: "0px",
        width: "100%",
      },
      "@media (min-width: 280px) and (max-width: 480px) ": {
        ...styles["@media (min-width: 280px) and (max-width: 480px) "],
        fontSize: "6px",
        backgroundColor: "#015151",
        height: "25px",
        borderRadius: "10px",
        textAlign: "center",
        padding: "0px",
        width: "100%",
      },
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  if (!id) {
    return <Spinner />;
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Paris-Montparnasse: superb 34 m2 studio</title>
        </Helmet>
        <SingleHousePageStyles>
          <div>
            <Button title="&#171; Back to Home" />
          </div>
          <div className="singlepagetitlebox">
            <div className="">
              <h2 className="singlepagetitletext">
                Paris-Montparnasse: superb 34 m2 studio
              </h2>

              <div className="singlepagetitlecontent" onClick={clickReview}>
                <FaStar className="rating" />
                <span className="ratingnumber">4.3</span>
              </div>
            </div>
            <div className="singlepagebookbox">
              <div>
                <Button title="Book Now" onClick={onClick} />
              </div>
              <div className="flex">
                <span className="amenitieslist">
                  <MdFavoriteBorder className="share-icon" />
                </span>
                <span className="sharetext">Save</span>
              </div>
              <div className="flex">
                <span className="amenitieslist">
                  <PiShareFatFill className="share-icon" />
                </span>
                <span className="sharetext">Share</span>
              </div>
            </div>
          </div>
          {/* singlehouseimagecalendarbox */}
          <div>
            <div className="singlepageposition">
              <div className="item-1">
                <img
                  src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=3865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="imgsubgrid"
                />
              </div>

              <div className="flex-grid">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=3781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="imgsubgrid2"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="imgsubgrid2"
                  />
                </div>
                <div>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1663133484931-5964e69b9a75?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="imgsubgrid2"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="imgsubgrid2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="singlepagelocations">
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
          </div> */}

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
                <span className="singlepagehousepublishsubname">
                  <strong>Jack</strong>&nbsp; is responsible service provider
                  for this house
                </span>
              </div>
            </div>
          </div>
          <div className="singlepagecalendarcontent">
            <div>
              <article className="singlepagearticlecontent">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos culpa fuga rerum quas? Harum ut, ab in dolorum
                delectus modi neque quaerat veniam velit non tempora, eum quos?
                Aliquam laboriosam dolores magnam earum atque, laudantium
                similique natus? Eligendi consectetur fugiat voluptatibus soluta
                voluptatem doloribus earum ducimus commodi, praesentium velit
                dolores quis in facere? Dolore aspernatur provident quis
                incidunt doloribus eveniet quas sunt, reiciendis at eius nemo
                ipsum pariatur ex delectus!
              </article>
            </div>
          </div>

          <div className="amenities-box">
            <div>
              <h3 className="amenitiesheading">Amenities Included</h3>
            </div>
            <div className="amenities-list">
              <div className="amenities-singlebox">
                <FaTreeCity className="amenities-icon" />
                <span className="amenitieslist">City View</span>
              </div>

              <div className="amenities-singlebox">
                <FaWifi className="amenities-icon" />
                <span className="amenitieslist">Wifi</span>
              </div>

              <div className="amenities-singlebox">
                <FaKitchenSet className="amenities-icon" />
                <span className="amenitieslist">Kitchen</span>
              </div>

              <div className="amenities-singlebox">
                <GiWashingMachine className="amenities-icon" />
                <span className="amenitieslist">Washing Machine</span>
              </div>

              <div className="amenities-singlebox">
                <FaElevator className="amenities-icon" />
                <span className="amenitieslist">Elevator</span>
              </div>

              <div className="amenities-singlebox">
                <RiTempHotFill className="amenities-icon" />
                <span className="amenitieslist">Heating</span>
              </div>

              <div className="amenities-singlebox">
                <TbHanger className="amenities-icon" />
                <span className="amenitieslist">Hanger</span>
              </div>

              <div className="amenities-singlebox">
                <FaTreeCity className="amenities-icon" />
                <span className="amenitieslist">City View</span>
              </div>

              <div className="amenities-singlebox">
                <FaWifi className="amenities-icon" />
                <span className="amenitieslist">Wifi</span>
              </div>

              <div className="amenities-singlebox">
                <FaKitchenSet className="amenities-icon" />
                <span className="amenitieslist">Kitchen</span>
              </div>

              <div className="amenities-singlebox">
                <GiWashingMachine className="amenities-icon" />
                <span className="amenitieslist">Washing Machine</span>
              </div>

              <div className="amenities-singlebox">
                <FaElevator className="amenities-icon" />
                <span className="amenitieslist">Elevator</span>
              </div>

              <div className="amenities-singlebox">
                <RiTempHotFill className="amenities-icon" />
                <span className="amenitieslist">Heating</span>
              </div>

              <div className="amenities-singlebox">
                <TbHanger className="amenities-icon" />
                <span className="amenitieslist">Hanger</span>
              </div>
            </div>
          </div>

          {/* calendar */}
          {/* <div className="calendarcenter" ref={dateRef}>
            <DateRangePicker
              // className="date_range"
              onChange={(item) => setRange([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={2}
              direction="horizontal"
              rangeColors={["#015151", "#015151", "#fed14c"]}
              minDate={new Date()}
            />
          </div> */}

          {/* <div className="" style={{ width: "100%" }}>
            <Mapbox />
          </div> */}
          {/* review box */}
          <div className="singlepagereviewbox" ref={reviewRef}>
            <div>
              <h1 className="singlepagereviewheading">
                Customer Reviews based on stay (10 ratings)
              </h1>
            </div>
            <div className="reviewpersonsbox">
              <div className="reviewpersondetailbox">
                <div className="reviewuserbox">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="reviewpersonimg"
                    />
                  </div>

                  <div className="reviewwww">
                    <h2 className="reviewusername">John Doe</h2>
                    <span className="reviewusercountry">USA</span>
                  </div>
                </div>
                <div className="reviewuserating">
                  <FaStar className="reviewuserstar" />
                  <span className="reviewuserpostdate">4.2</span>
                  <span className="reviewuserpostdated">
                    Posted on October 4
                  </span>
                </div>
                <div>
                  <article className="reviewusercomments">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque omnis ex cupiditate animi neque. Rem, consequatur
                    accusantium quis soluta voluptates excepturi perferendis
                    eaque laboriosam temporibus? Qui officiis suscipit assumenda
                    molestias facilis sit consequatur aspernatur nostrum.
                  </article>
                </div>
              </div>

              <div className="reviewpersondetailbox">
                <div className="reviewuserbox">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="reviewpersonimg"
                    />
                  </div>

                  <div className="reviewwww">
                    <h2 className="reviewusername">John Doe</h2>
                    <span className="reviewusercountry">USA</span>
                  </div>
                </div>
                <div className="reviewuserating">
                  <FaStar className="reviewuserstar" />
                  <span className="reviewuserpostdate">4.2</span>
                  <span className="reviewuserpostdated">
                    Posted on October 4
                  </span>
                </div>
                <div>
                  <article className="reviewusercomments">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque omnis ex cupiditate animi neque. Rem, consequatur
                    accusantium quis soluta voluptates excepturi perferendis
                    eaque laboriosam temporibus? Qui officiis suscipit assumenda
                    molestias facilis sit consequatur aspernatur nostrum.
                  </article>
                </div>
              </div>

              <div className="reviewpersondetailbox">
                <div className="reviewuserbox">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="reviewpersonimg"
                    />
                  </div>

                  <div className="reviewwww">
                    <h2 className="reviewusername">John Doe</h2>
                    <span className="reviewusercountry">USA</span>
                  </div>
                </div>
                <div className="reviewuserating">
                  <FaStar className="reviewuserstar" />
                  <span className="reviewuserpostdate">4.2</span>
                  <span className="reviewuserpostdated">
                    Posted on October 4
                  </span>
                </div>
                <div>
                  <article className="reviewusercomments">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque omnis ex cupiditate animi neque. Rem, consequatur
                    accusantium quis soluta voluptates excepturi perferendis
                    eaque laboriosam temporibus? Qui officiis suscipit assumenda
                    molestias facilis sit consequatur aspernatur nostrum.
                  </article>
                </div>
              </div>

              <div className="reviewpersondetailbox">
                <div className="reviewuserbox">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="reviewpersonimg"
                    />
                  </div>

                  <div className="reviewwww">
                    <h2 className="reviewusername">John Doe</h2>
                    <span className="reviewusercountry">USA</span>
                  </div>
                </div>
                <div className="reviewuserating">
                  <FaStar className="reviewuserstar" />
                  <span className="reviewuserpostdate">4.2</span>
                  <span className="reviewuserpostdated">
                    Posted on October 4
                  </span>
                </div>
                <div>
                  <article className="reviewusercomments">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque omnis ex cupiditate animi neque. Rem, consequatur
                    accusantium quis soluta voluptates excepturi perferendis
                    eaque laboriosam temporibus? Qui officiis suscipit assumenda
                    molestias facilis sit consequatur aspernatur nostrum.
                  </article>
                </div>
              </div>

              <div className="reviewpersondetailbox">
                <div className="reviewuserbox">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="reviewpersonimg"
                    />
                  </div>

                  <div className="reviewwww">
                    <h2 className="reviewusername">John Doe</h2>
                    <span className="reviewusercountry">USA</span>
                  </div>
                </div>
                <div className="reviewuserating">
                  <FaStar className="reviewuserstar" />
                  <span className="reviewuserpostdate">4.2</span>
                  <span className="reviewuserpostdated">
                    Posted on October 4
                  </span>
                </div>
                <div>
                  <article className="reviewusercomments">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque omnis ex cupiditate animi neque. Rem, consequatur
                    accusantium quis soluta voluptates excepturi perferendis
                    eaque laboriosam temporibus? Qui officiis suscipit assumenda
                    molestias facilis sit consequatur aspernatur nostrum.
                  </article>
                </div>
              </div>

              <div className="reviewpersondetailbox">
                <div className="reviewuserbox">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="reviewpersonimg"
                    />
                  </div>

                  <div className="reviewwww">
                    <h2 className="reviewusername">John Doe</h2>
                    <span className="reviewusercountry">USA</span>
                  </div>
                </div>
                <div className="reviewuserating">
                  <FaStar className="reviewuserstar" />
                  <span className="reviewuserpostdate">4.2</span>
                  <span className="reviewuserpostdated">
                    Posted on October 4
                  </span>
                </div>
                <div>
                  <article className="reviewusercomments">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque omnis ex cupiditate animi neque. Rem, consequatur
                    accusantium quis soluta voluptates excepturi perferendis
                    eaque laboriosam temporibus? Qui officiis suscipit assumenda
                    molestias facilis sit consequatur aspernatur nostrum.
                  </article>
                </div>
              </div>

              <div className="reviewpersondetailbox">
                <div className="reviewuserbox">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="reviewpersonimg"
                    />
                  </div>

                  <div className="reviewwww">
                    <h2 className="reviewusername">John Doe</h2>
                    <span className="reviewusercountry">USA</span>
                  </div>
                </div>
                <div className="reviewuserating">
                  <FaStar className="reviewuserstar" />
                  <span className="reviewuserpostdate">4.2</span>
                  <span className="reviewuserpostdated">
                    Posted on October 4
                  </span>
                </div>
                <div>
                  <article className="reviewusercomments">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque omnis ex cupiditate animi neque. Rem, consequatur
                    accusantium quis soluta voluptates excepturi perferendis
                    eaque laboriosam temporibus? Qui officiis suscipit assumenda
                    molestias facilis sit consequatur aspernatur nostrum.
                  </article>
                </div>
              </div>

              <div className="reviewpersondetailbox">
                <div className="reviewuserbox">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="reviewpersonimg"
                    />
                  </div>

                  <div className="reviewwww">
                    <h2 className="reviewusername">John Doe</h2>
                    <span className="reviewusercountry">USA</span>
                  </div>
                </div>
                <div className="reviewuserating">
                  <FaStar className="reviewuserstar" />
                  <span className="reviewuserpostdate">4.2</span>
                  <span className="reviewuserpostdated">
                    Posted on October 4
                  </span>
                </div>
                <div>
                  <article className="reviewusercomments">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque omnis ex cupiditate animi neque. Rem, consequatur
                    accusantium quis soluta voluptates excepturi perferendis
                    eaque laboriosam temporibus? Qui officiis suscipit assumenda
                    molestias facilis sit consequatur aspernatur nostrum.
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="reviewownerdetail">
              {/* <div className="reviewownerdetailgrid-1">
                <div className="reviewownerdetailuserbox">
                  <div>
                    <img
                      className="hostimage"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="hostdetails">
                    <h2 className="hostdetailname">Serviced by John Doe</h2>
                    <span className="hostdetailsubname">
                      Joined on Feb 2023
                    </span>
                  </div>
                  <div className="verifybox">
                    <span>
                      <RiVerifiedBadgeFill />
                    </span>
                    <span>Verified</span>
                  </div>
                </div>

                <div>
                  <article className="reviewownerbio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque modi enim quos illo, minus vitae, perspiciatis labore
                    animi, laboriosam qui aperiam harum quidem sunt aut?
                    Consequuntur fuga non laborum voluptatibus!
                  </article>
                </div>
              </div> */}

              <div className="reviewownerdetailgrid-1">
                <div>
                  <span className='reviewdetailcontent'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, qui labore facere beatae dolor tenetur ratione unde
                    obcaecati, tempora hic dignissimos corporis corrupti alias
                    tempore laudantium vero? Nesciunt, commodi aliquam?
                  </span>
                </div>
                <div>
                  <span className='reviewdetailcontent'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, qui labore facere beatae dolor tenetur ratione unde
                    obcaecati, tempora hic dignissimos corporis corrupti alias
                    tempore laudantium vero? Nesciunt, commodi aliquam?
                  </span>
                </div>
                <div>
                  <span className='reviewdetailcontent'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, qui labore facere beatae dolor tenetur ratione unde
                    obcaecati, tempora hic dignissimos corporis corrupti alias
                    tempore laudantium vero? Nesciunt, commodi aliquam?
                  </span>
                </div>
                <div>
                  <span className='reviewdetailcontent'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, qui labore facere beatae dolor tenetur ratione unde
                    obcaecati, tempora hic dignissimos corporis corrupti alias
                    tempore laudantium vero? Nesciunt, commodi aliquam?
                  </span>
                </div>
                <div>
                  <span className='reviewdetailcontent'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, qui labore facere beatae dolor tenetur ratione unde
                    obcaecati, tempora hic dignissimos corporis corrupti alias
                    tempore laudantium vero? Nesciunt, commodi aliquam?
                  </span>
                </div>
              </div>

              <div className="reviewownerdetailgrid-2">
                <div className="">
                  <div className="reviewownerdetailuserbox">
                    <div>
                      <img
                        className="hostimage"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="hostdetails">
                      <h2 className="hostdetailname">Serviced by John Doe</h2>
                      <span className="hostdetailsubname">
                        Joined on Feb 2023
                      </span>
                    </div>
                    <div className="verifybox">
                      <span>
                        <RiVerifiedBadgeFill />
                      </span>
                      <span>Verified</span>
                    </div>
                  </div>

                  <div>
                    <article className="reviewownerbio">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque modi enim quos illo, minus vitae, perspiciatis
                      labore animi, laboriosam qui aperiam harum quidem sunt
                      aut? Consequuntur fuga non laborum voluptatibus!
                    </article>
                  </div>
                </div>

                <div className="reservation-card" ref={dateRef}>
                  <div>
                    <h2 className="reservation-card-title">0504 par unit</h2>
                  </div>
                  <div className="">
                    <div className="date-calendar-box">
                      <DateRange
                        onChange={(item) => setRange([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={1}
                        ranges={range}
                        direction="horizontal"
                        rangeColors={["#015151", "#015151", "#fed14c"]}
                        minDate={new Date()}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="date-calendar-box">
                      <Select
                        className="select"
                        placeholder="Select Persons"
                        options={personOptions}
                        value={noPersons}
                        onChange={changePersonHandler}
                        styles={styles}
                        name="person"
                      />
                    </div>
                  </div>
                  <div className="reservation-box">
                    <div className="reservation-details">
                      <div>
                        <span>4504 x 7 nuits</span>
                      </div>
                      <div>
                        <span>31526</span>
                      </div>
                    </div>
                    <div className="reservation-details">
                      <div>
                        <span>Frais de manage</span>
                      </div>
                      <div>
                        <span>1984</span>
                      </div>
                    </div>

                    <div className="date-calendar-box ">
                      <hr className="h-line" />
                    </div>

                    <div className="reservation-details">
                      <div>
                        <span>Total hors taxes</span>
                      </div>
                      <div>
                        <span>33510</span>
                      </div>
                    </div>

                    <div className="date-calendar-box ">
                      <hr className="h-line" />
                    </div>

                    <div className="date-calendar-box ">
                      <Button title="Book Now" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="reviewowneradds">
                    Registration number: 0*********0
                  </span>
                </div>
                <div>
                  <span className="reviewowneradds">
                    Languages: English, Français, Italiano, Español
                  </span>
                </div>
                <div>
                  <span className="reviewowneradds">Response rate: 100%</span>
                </div>
                <div>
                  <span className="reviewowneradds">
                    Response time: within a few hours
                  </span>
                </div>
                <div>
                  <Button title="Contact Service" />
                </div>
              </div>
            </div>
          </div>
        </SingleHousePageStyles>
      </HelmetProvider>
    </>
  );
};

export default SingleHousePage;
