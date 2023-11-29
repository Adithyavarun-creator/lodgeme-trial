import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 16px 18px;
  border-radius: 10px;
  border: 1px solid #fff;
  offset: none;
  color: #fff;
  background: ${({ theme }) => theme.colors.primaryColor};
  font-size: 22px;
  text-transform: uppercase;
  font-weight: bolder;

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 0 14p2;
    font-size: 18px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 10px 12px;
    font-size: 16px;
  }
  @media ${devices.smallTabs} {
  }

  @media ${devices.smallMobiles} {
  }
`;
