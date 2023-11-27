import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const CompanyDetailsStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media ${devices.bigLaptopsAndDesktops} {
    gap: 50px;
  }

  @media ${devices.tabletsAndIpads} {
    gap: 30px;
  }
  @media ${devices.smallTabs} {
    gap: 20px;
  }

  @media ${devices.smallMobiles} {
    gap: 10px;
  }

  .companyboxheading {
    font-size: 30px;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: underline;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 24px;
    }
    @media ${devices.smallTabs} {
      font-size: 22px;
    }

    @media ${devices.smallMobiles} {
      font-size: 20px;
    }
  }

  .companyboxtext {
    font-size: 28px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 28px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 18px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }

  .companyboxlist {
    margin-top: 15px;
    list-style: none;
    font-size: 28px;

    @media ${devices.bigLaptopsAndDesktops} {
      margin-top: 15px;
      font-size: 28px;
    }

    @media ${devices.tabletsAndIpads} {
      margin-top: 10px;
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      margin-top: 10px;
      font-size: 18px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 7px;
      font-size: 14px;
    }
  }

  .companylinks {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 28px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 22px;
    }
    @media ${devices.smallTabs} {
      font-size: 18px;
    }

    @media ${devices.smallMobiles} {
      font-size: 16px;
    }
  }
`;
