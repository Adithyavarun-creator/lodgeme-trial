import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const NavbarStyles = styled.div`
  /* .homepage_navcontent { */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  z-index: 100;

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

  .homepage_navlogo {
    object-fit: contain;
    width: 281px;
    height: 50.56px;

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

  .homepage_navbuttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

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

  .homepage_navbutton {
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.bigScreens.navBtns};
    border: 2px solid ${({ theme }) => theme.colors.whiteColor};
    align-items: center;
    background-color: transparent;
    border-radius: 8px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: ${({ theme }) => theme.bigScreens.navBtns};
    }

    @media ${devices.tabletsAndIpads} {
      padding: 8px;
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.navBtns};
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
    padding: 40px;
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
    /* height: 50px;
    width: 100%;
    object-fit: contain;
    display: none; */

    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      height: 50px;
      width: 100%;
      object-fit: contain;
    }

    @media ${devices.smallMobiles} {
      height: 30px;
      width: 100%;
      object-fit: contain;
    }
  }

  .mobile_menunav {
    @media ${devices.bigLaptopsAndDesktops} {
      display: none;
    }

    @media ${devices.tabletsAndIpads} {
      display: none;
    }

    @media ${devices.smallTabs} {
      height: 40px;
      width: 40px;
      color: ${({ theme }) => theme.colors.primaryColor};
    }

    @media ${devices.smallMobiles} {
      height: 30px;
      width: 30px;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  .mobile_navbox {
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
`;
