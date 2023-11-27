import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const NavbarStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px;
  align-items: center;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.primaryColor};

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 30px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 20px;
  }
  @media ${devices.smallTabs} {
    display: none;
  }
  @media ${devices.smallMobiles} {
    display: none;
  }

  .navlogo {
    object-fit: contain;
    width: 281px;
    height: 50.56px;
    margin-left: 40px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      /* width: 201px; */
      height: 70px;
      margin-left: 20px;
    }

    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .navbuttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 10px;
    }

    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .navbutton {
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.bigScreens.navButtonFont};
    border: 2px solid ${({ theme }) => theme.colors.whiteColor};
    align-items: center;
    background-color: transparent;
    border-radius: 8px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: ${({ theme }) => theme.bigScreens.navButtonFont};
    }

    @media ${devices.tabletsAndIpads} {
      padding: 8px;
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.navButtonFont};
    }

    @media ${devices.smallTabs} {
      display: none;
    }

    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .navselect {
    /* width: 80px; */
    padding: 12px 16px;
    box-sizing: content-box;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.bigScreens.navButtonFont};
    align-items: center;
    background-color: transparent;
    border-radius: 8px;
    offset: none;
    border: 2px solid #fff;
    outline: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 22px;
      height: 28px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 12px;
      font-size: 12px;
    }

    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .langOption {
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 12px;
    width: 80px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 8px;
      font-size: 18px;
    }

    @media ${devices.smallTabs} {
      display: none;
    }
    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .mobile_nav {
    display: none;
    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      display: none;
    }

    @media ${devices.smallMobiles} {
      display: none;
    }
  }

  .mobile_navimg {
    display: none;
    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      display: none;
    }

    @media ${devices.smallMobiles} {
      display: none;
    }
  }
`;

export const MobileNavStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};

  @media ${devices.bigLaptopsAndDesktops} {
    display: none;
  }

  @media ${devices.tabletsAndIpads} {
    display: none;
  }

  @media ${devices.smallTabs} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
    position: relative;
  }

  @media ${devices.smallMobiles} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px;
    position: relative;
  }

  .mobile_navlogo {
    display: none;

    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      display: block;
      height: 55px;
      width: 70%;
      object-fit: contain;
    }

    @media ${devices.smallMobiles} {
      display: block;
      height: 30px;
      width: 100%;
      object-fit: contain;
    }
  }

  .mobile_menunav {
    display: none;

    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      height: 40px;
      width: 40px;
      color: ${({ theme }) => theme.colors.whiteColor};
      display: block;
    }

    @media ${devices.smallMobiles} {
      height: 30px;
      width: 30px;
      color: ${({ theme }) => theme.colors.whiteColor};
      display: block;
    }
  }

  .mobile_navbox {
    display: none;

    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: fixed;
      z-index: 150;
    }

    @media ${devices.smallMobiles} {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: fixed;
      z-index: 150;
    }
  }

  .mobile_menucloseiconbox {
    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      display: flex;
      justify-content: end;
      padding: 20px;
    }

    @media ${devices.smallMobiles} {
      display: flex;
      justify-content: end;
      padding: 20px;
    }
  }

  .mobile_menucloseicon {
    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      height: 50px;
      width: 50px;
      color: ${({ theme }) => theme.colors.whiteColor};
    }

    @media ${devices.smallMobiles} {
      height: 40px;
      width: 40px;
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }

  .mobile_navmenus {
    display: none;
    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 40px;
      margin-top: 2px;
      list-style: none;
    }

    @media ${devices.smallMobiles} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      margin-top: 2px;
      list-style: none;
    }
  }

  li {
    color: ${({ theme }) => theme.colors.whiteColor};
  }

  .navselect {
    /* width: 80px; */

    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      /* box-sizing: content-box; */
      /* background-color: ${({ theme }) => theme.colors.whiteColor}; */
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size: ${({ theme }) => theme.bigScreens.navButtonFont};
      align-items: center;
      background-color: transparent;
      border-radius: 8px;
      offset: none;
      border: 2px solid #fff;
      outline: 0px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
      padding: 8px;
      font-size: 18px;
    }
    @media ${devices.smallMobiles} {
      padding: 8px;
      font-size: 18px;
    }
  }

  .langOption {
    /* display: none; */

    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
      font-weight: bold;
      color: white;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      padding: 12px;
      width: 80px;
    }
    @media ${devices.smallMobiles} {
      padding: 8px;
      font-size: 14px;
    }
  }
`;