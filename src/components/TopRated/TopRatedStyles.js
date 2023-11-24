import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const TopRatedStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .toprated_house_cardbox {
    display: grid;
    grid-template-columns: 280px 280px 280px 280px;
    justify-content: center;
    column-gap: 30px;
    row-gap: 50px;
    margin-top: 40px;

    @media ${devices.bigLaptopsAndDesktops} {
      grid-template-columns: 280px 280px 280px;
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 220px 220px 220px;
      column-gap: 20px;
      row-gap: 40px;
    }

    @media ${devices.smallTabs} {
      grid-template-columns: 320px;
      column-gap: 20px;
      row-gap: 40px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 300px;
      column-gap: 20px;
      row-gap: 40px;
    }
  }

  .toprated_house_card {
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-shadow: 0px 5px 5px 0px rgba(82, 78, 78, 0.75);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(82, 78, 78, 0.75);
    -moz-box-shadow: 0px 5px 5px 0px rgba(82, 78, 78, 0.75);
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
    transition: all 0.6s;
  }

  .toprated_house_cardimg {
    height: 280px;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
    transition: all 0.6s;

    @media ${devices.tabletsAndIpads} {
      height: 200px;
    }

    @media ${devices.smallMobiles} {
      height: 180px;
    }
  }

  .toprated_house_cardimg:hover {
    transform: scale(1.1);
  }

  .toprated_pricebox {
    position: absolute;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    bottom: 150px;
    margin-left: 15px;
    height: 44px;
    border-radius: 8px;
    align-items: center;
    display: flex;

    @media ${devices.tabletsAndIpads} {
      bottom: 155px;
    }
  }

  .toprated_price {
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: 20px;
    font-weight: bolder;

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.cardprice};
    }
  }

  .toprated_locationbox {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: ${({ theme }) => theme.tabletAndIpadScreens.cardlocation};
    font-weight: 400;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.greyColor};

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.cardlocation};
    }
  }

  .toprated_house_cardsubs {
    margin-bottom: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media ${devices.tabletsAndIpads} {
      padding: 10px;
    }
  }

  .toprated_house_cardmaintext {
    font-weight: bold;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.tabletAndIpadScreens.cardtitle};
    font-weight: 700;
    line-height: 24px;

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.cardtitle};
    }
  }

  .toprated_house_cardsubtext {
    color: gray;
    font-size: ${({ theme }) => theme.bigScreens.cardlocation};
    font-weight: bold;

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.carddesc};
    }
  }

  .toprated_staricon {
    color: ${({ theme }) => theme.colors.ratingColor};
    height: 20px;
    width: 20px;

    @media ${devices.tabletsAndIpads} {
    }
  }

  .toprated_reviewbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.cardrating};
    }
  }

  .toprated_button {
    padding: 11px 14px 11px 14px;
    border-radius: 8px;
    border: 2px;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.bigScreens.btnFontsize};
    margin-top: 50px;
    margin-bottom: 50px;
    align-items: center;

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.btnFontsize};
      padding: 14px 16px;
    }
  }
`;
