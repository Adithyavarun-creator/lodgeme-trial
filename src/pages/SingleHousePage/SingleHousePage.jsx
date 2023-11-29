import React from "react";
import { SingleHousePageStyles } from "./SingleHousePageStyles";
import { Link, useParams } from "react-router-dom";
import { FaUsers, FaUsersSlash, FaBath, FaWifi } from "react-icons/fa";
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

const SingleHousePage = () => {
  const { id } = useParams();

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
            <Button title="&#171; Back to Home" />
          </div>
          <div className="singlepagetitlebox">
            <div>
              <h2>Paris-Montparnasse: superb 34 m2 studio</h2>
            </div>
            <div className="singlepagebookbox">
              <div>
                <Button title="Book Now" />
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
              <span className="amenitieslist">1 Living room</span>
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
          <div className="singlepagecalendarcontent">
            <div>
              <article>
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
            <div>Calendar</div>
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

          {/* <div className="" style={{ width: "100%" }}>
            <Mapbox />
          </div> */}
          <div></div>
        </SingleHousePageStyles>
      </HelmetProvider>
    </>
  );
};

export default SingleHousePage;
