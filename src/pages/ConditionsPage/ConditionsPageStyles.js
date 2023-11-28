import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const ConditionPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 80px;
  text-align: justify;

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 60px;
    gap: 30px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 40px;
    gap: 20px;
  }
  @media ${devices.smallTabs} {
    padding: 25px;
    gap: 15px;
  }

  @media ${devices.smallMobiles} {
    padding: 30px;
    gap: 8px;
    text-align: none;
  }

  .condition-gaps {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 17px;
    }
    @media ${devices.smallTabs} {
      gap: 12px;
    }

    @media ${devices.smallMobiles} {
      gap: 8px;
    }
  }

  .conditionheading {
    text-align: center;
    font-size: 34px;
    text-decoration: underline;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 32px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 24px;
    }
    @media ${devices.smallTabs} {
      font-size: 18px;
    }
    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

  span {
    font-size: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 28px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 24px;
    }
    @media ${devices.smallTabs} {
      font-size: 18px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  li {
    font-size: 30px;
    list-style: disc;
    margin-left: 50px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 28px;
      margin-left: 50px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 24px;
      margin-left: 50px;
    }
    @media ${devices.smallTabs} {
      font-size: 18px;
      margin-left: 40px;
    }
    @media ${devices.smallMobiles} {
      font-size: 10px;
      margin-left: 25px;
    }
  }

  .condition-listheading {
    font-size: 31px;
    font-weight: bolder;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 29px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 24px;
    }
    @media ${devices.smallTabs} {
      font-size: 18px;
    }
    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }
`;
