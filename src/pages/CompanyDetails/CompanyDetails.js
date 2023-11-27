import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const CompanyDetailsStyles = styled.div`
  display: flex;
  flex-direction: column;

  gap: 100px;
  padding: 50px;

  cursor: pointer;

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 30px;
  }

  @media ${devices.tabletsAndIpads} {
    gap: 30px;
  }
  @media ${devices.smallTabs} {
    padding: 20px;

    gap: 20px;
  }

  @media ${devices.smallMobiles} {
    padding: 20px;

    gap: 10px;
  }

  .companydetailsbox-1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 30px;
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
  }

  span {
    font-size: 25px;
    margin-bottom: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 22px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 18px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  li {
    font-size: 25px;
    margin-left: 50px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .companyboxheading {
    /* text-align: center; */
    font-size: 25px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .companyboxtext {
    font-size: 24px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }
  .companysidetext {
    /* text-decoration: underline; */
    font-size: 24px;
    /* font-weight: bolder; */
    text-decoration: underline;
    font-weight: bold;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .companyboxlist {
    margin-top: 15px;
    list-style: none;
    font-size: 25px;

    @media ${devices.bigLaptopsAndDesktops} {
      margin-top: 15px;
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      margin-top: 10px;
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      margin-top: 10px;
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 7px;
      font-size: 10px;
    }
  }

  .companylinks {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .companydetailsbox-2 {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    /* text-align: justify; */
    gap: 30px;
  }

  .companyservice {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .weblink {
    font-size: 25px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }
`;
