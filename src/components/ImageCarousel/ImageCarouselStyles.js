import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const ImageCarouselStyles = styled.div`
  border-radius: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 20px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 20px;
    gap: 10px;
  }
  @media ${devices.smallTabs} {
    gap: 10px;
    padding: 20px;
  }

  @media ${devices.smallMobiles} {
    gap: 8px;
    padding: 10px;
  }

  .closecarousel {
    position: absolute;
    top: 50px;
    right: -80px;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 30;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      top: 10px;
      right: -50px;
    }
    @media ${devices.smallTabs} {
      top: 10px;
      right: -20px;
    }

    @media ${devices.smallMobiles} {
      top: 5px;
      right: -10px;
    }
  }

  .closecarouselicon {
    height: 75px;
    width: 75px;
    background-color: #fff;
    color: #fff;
    border-radius: 50%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
      height: 50px;
      width: 50px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 35px;
      width: 35px;
    }
    @media ${devices.smallTabs} {
      height: 40px;
      width: 40px;
    }

    @media ${devices.smallMobiles} {
      height: 25px;
      width: 25px;
      padding: 4px;
    }
  }

  .imgbox {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
      margin-top: 100px;
    }

    @media ${devices.tabletsAndIpads} {
      margin-top: 60px;
    }
    @media ${devices.smallTabs} {
      margin-top: 40px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 20px;
    }
  }

  .img {
    object-fit: fill;
    height: 900px;
    width: 100%;
    border-radius: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 400px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 300px;
    }
    @media ${devices.smallTabs} {
      height: 200px;
    }

    @media ${devices.smallMobiles} {
      height: 150px;
    }
  }
`;
