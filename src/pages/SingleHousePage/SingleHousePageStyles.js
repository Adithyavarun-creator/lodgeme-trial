import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const SingleHousePageStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 50px;
  padding-bottom: 0;

  @media ${devices.bigLaptopsAndDesktops} {
}

@media ${devices.tabletsAndIpads} {
 
}
@media ${devices.smallTabs} {
  
}

@media ${devices.smallMobiles} {
  
}

  .singlepagetitlebox {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${devices.bigLaptopsAndDesktops} {
}

@media ${devices.tabletsAndIpads} {
 
}
@media ${devices.smallTabs} {
  
}

@media ${devices.smallMobiles} {
  
}
  }

  .singlepageposition {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: center;
    padding: 5px;
    cursor: pointer;


    @media ${devices.bigLaptopsAndDesktops} {
}

@media ${devices.tabletsAndIpads} {
 
}
@media ${devices.smallTabs} {
  
}

@media ${devices.smallMobiles} {
  
}
  }

  .item-1 {
  }

  .imgsubgrid {
    width: 100%;
    object-fit: fill;
    border-radius: 10px;
    transition: all 0.5s ease-in;

    @media ${devices.bigLaptopsAndDesktops} {
}

@media ${devices.tabletsAndIpads} {
 
}
@media ${devices.smallTabs} {
  
}

@media ${devices.smallMobiles} {
  
}
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

    @media ${devices.bigLaptopsAndDesktops} {
}

@media ${devices.tabletsAndIpads} {
 
}
@media ${devices.smallTabs} {
  
}

@media ${devices.smallMobiles} {
  
}
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


    @media ${devices.bigLaptopsAndDesktops} {
}

@media ${devices.tabletsAndIpads} {
 
}
@media ${devices.smallTabs} {
  
}

@media ${devices.smallMobiles} {
  
}
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
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
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

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  /* .fullviewbutton {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 150;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  } */

  /* .fullviewbtn {
    padding: 16px 20px;
    background-color: red;
    color: white;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  } */

  .singlepagelocations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagelocation {
    display: flex;
    flex-direction: column;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagelocationicons {
    height: 30px;
    width: 30px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagelocationbox {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
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
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagelocation:hover {
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff !important;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagelocationtype {
    text-decoration: underline;
    text-underline-position: under;
    font-size: 18px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }
    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  .singlepagelocationtext {
    font-size: 16px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }
    @media ${devices.smallMobiles} {
      font-size: 7px;
    }
  }

  .singlepagehouserooms {
    display: flex;
    flex-direction: row;
    gap: 20px;
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

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .userimage {
    object-fit: fill;
    height: 40px;
    border-radius: 50%;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagehousepublish {
    padding: 10px;
    border: 1px solid red;
    display: flex;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagehousepublishbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagehousepublishname {
    font-size: 22px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagehousepublishsubname {
    font-size: 20px;
    color: darkgray;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagearticlecontent {
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }
    @media ${devices.smallMobiles} {
      font-size: 7px;
    }
  }

  .singlepagecalendarcontent {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
  }

  .calendarcenter {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    justify-content: center;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .amenities-box {
    border: 1px solid darkgrey;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .amenitiesheading {
    text-decoration: underline;
    font-size: 20px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .amenities-singlebox {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .amenities-icon {
    height: 20px;
    width: 20px;
    color: ${({ theme }) => theme.colors.primaryColor};
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }
  .amenities-list {
    display: flex;
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    align-items: center;
    color: darkgrey;
    justify-content: center;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .amenitieslist {
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }
`;
