import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const RegisterPageStyles = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  @media ${devices.bigLaptopsAndDesktops} {
    margin-top: 50px;
  }

  @media ${devices.tabletsAndIpads} {
    margin-top: 80px;
  }
  @media ${devices.smallTabs} {
    margin-top: 100px;
  }

  @media ${devices.smallMobiles} {
    margin-top: 40px;
  }

  .register_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 45%;
    padding: 25px;
    border-radius: 20px;
    box-shadow: -2px 2px 16px 18px rgba(0, 0, 0, 0.1);
    height: 700px;
    @media ${devices.bigLaptopsAndDesktops} {
      gap: 30px;
      padding: 25px;
      height: 550px;
      width: 70%;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 20px;
      padding: 10px;
      height: 550px;
      width: 60%;
    }
    @media ${devices.smallTabs} {
      gap: 20px;
      padding: 10px;
      height: 400px;
      width: 80%;
    }

    @media ${devices.smallMobiles} {
      gap: 15px;
      padding: 20px;
      height: 300px;
      width: 80%;
    }
  }

  .register_title {
    font-size: 38px;
    font-weight: 700;

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

  .register_account_sub {
    font-size: 28px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.greyColor};

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 24px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .register_emailinput {
    height: 60px;
    width: 672px;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    offset: none;
    border-radius: 10px;
    outline: none;
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 60px;
      width: 600px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 50px;
      width: 500px;
    }
    @media ${devices.smallTabs} {
      height: 40px;
      width: 350px;
      font-size: 20px;

      /* width: 400px; */
    }

    @media ${devices.smallMobiles} {
      height: 30px;
      width: 180px;
      font-size: 12px;
    }
  }

  .register_emailinput:placeholder-shown {
    font-size: 28px;
    padding-left: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 26px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 24px;
    }
    @media ${devices.smallTabs} {
      font-size: 20px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }
`;
