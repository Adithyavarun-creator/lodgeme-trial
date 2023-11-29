import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const SingleHousePageStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 50px;
  padding-bottom: 0;
  .singlepagetitlebox {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .singlepageposition {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: center;
    padding: 5px;
    cursor: pointer;
  }

  .item-1 {
  }

  .imgsubgrid {
    width: 100%;
    object-fit: fill;
    border-radius: 10px;
    transition: all 0.5s ease-in;
  }

  .imgsubgrid:hover {
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
  }

  .imgsubgrid2 {
    width: 100%;
    object-fit: fill;
    border-radius: 10px;
    transition: all 0.5s ease-in;
  }

  .imgsubgrid2:hover {
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
  }

  .flex-grid {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    gap: 10px;
  }

  .singlehouseimagecalendarbox {
    display: flex;
  }

  .singlepagebookbox {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  .share-icon {
    height: 35px;
    width: 35px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .sharetext {
    font-size: 22px;
  }

  .main-image {
    width: 100%;
    height: 800px;
    object-fit: fill;
    border-radius: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 500px;
    }
    @media ${devices.tabletsAndIpads} {
      height: 350px;
    }
  }

  .fullviewbutton {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 150;
  }

  .fullviewbtn {
    padding: 16px 20px;
    background-color: red;
    color: white;
  }

  .singlepagelocations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .singlepagelocation {
    display: flex;
    flex-direction: column;
  }

  .singlepagelocationicons {
    height: 30px;
    width: 30px;
  }

  .singlepagelocationbox {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
  }

  .singlepagelocation {
    display: flex;
    flex-direction: column;
    gap: 7px;
    border: 0.5px solid grey;
    padding: 14px 16px;
    border-radius: 20px;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s ease-in;
  }

  .singlepagelocation:hover {
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff !important;
  }

  .singlepagelocationtype {
    text-decoration: underline;
    text-underline-position: under;
    font-size: 20px;
    font-weight: bolder;
  }

  .singlepagelocationtext {
    font-size: 18px;
  }

  .singlepagehouserooms {
    display: flex;
    flex-direction: row;
    gap: 20px;
    /* padding: 10px; */
    align-items: center;
  }

  .singlepagehouseroomdetail {
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    offset: none;
    padding: 10px 14px;
    align-items: center;
    border-radius: 30px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
  }

  .userimage {
    object-fit: fill;
    height: 40px;
    border-radius: 50%;
  }

  .singlepagehousepublish {
    padding: 10px;
    border: 1px solid red;
    display: flex;
    align-items: center;
  }

  .singlepagehousepublishbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .singlepagehousepublishname {
    font-size: 22px;
    font-weight: bolder;
  }

  .singlepagehousepublishsubname {
    font-size: 20px;
    color: darkgray;
  }

  .singlepagecalendarcontent {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .amenities-box {
    border: 1px solid darkgrey;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .amenitiesheading {
    text-decoration: underline;
    font-size: 20px;
  }

  .amenities-singlebox {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }

  .amenities-icon {
    height: 20px;
    width: 20px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
  .amenities-list {
    display: flex;
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    align-items: center;
    color: darkgrey;
    justify-content: center;
  }

  .amenitieslist {
    font-size: 18px;
  }
`;
