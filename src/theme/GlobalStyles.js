import { createGlobalStyle } from "styled-components";
import { devices } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fresca', sans-serif;
}

body {
  /* font-family: "Altone Trial", sans-serif; */
  scroll-behavior:smooth;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-button {
  background: #fff;
}
::-webkit-scrollbar-track-piece {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background:  ${({ theme }) => theme.colors.primaryColor};

}

.flex {
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
}

.mt-10 {
  margin-top: 10px;
}

.linkStyle{
  text-decoration: none;
  color: #333333;
}

.flex-center{
  display: flex;
  justify-content: center;
}

.register_btn {
    width: 672px;
    height: 60px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.whiteColor};
    offset: none;
    outline: none;
    cursor: pointer;
    font-size: 26px;
    border: none;



    @media ${devices.bigLaptopsAndDesktops} {
      width: 600px;

}

@media ${devices.tabletsAndIpads} {
  width: 500px;

 
}
@media ${devices.smallTabs} {
  width: 350px;
  font-size: 20px;
  height: 40px;



  
}

@media ${devices.smallMobiles} {
  width: 180px;
  font-size: 12px;
  height: 40px;
  
}
  }


  .register_loginbtn {
    width: 672px;
    height: 60px;
    text-align: center;
    background-color: transparent;
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.blackColor};
    offset: none;
    outline: none;
    cursor: pointer;
    font-size: 26px;


    @media ${devices.bigLaptopsAndDesktops} {
      width: 600px;
      font-size: 24px;


}

@media ${devices.tabletsAndIpads} {
  width: 500px;
  font-size: 24px;


 
}
@media ${devices.smallTabs} {
  width: 350px;
  font-size: 20px;
  height: 40px;

  
}

@media ${devices.smallMobiles} {
  width: 180px;
  font-size: 12px;
  height: 40px;
  
}
}
`;
