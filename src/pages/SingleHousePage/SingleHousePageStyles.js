import styled from "styled-components";

export const SingleHousePageStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 50px;
  padding-bottom: 0; /* align-items: center; */

  .singlehouseimagecalendarbox {
    display: flex;
    width: 100%;
    /* border: 1px solid red; */
  }

  .main-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 30px;
  }
`;
