import React from "react";
import { SpinnerStyles } from "./SpinnerStyle";
import Logo from "../../assets/logo.png";

const Spinner = () => {
  return (
    <SpinnerStyles>
      <div className="spinnerlogobox">
        <img src={Logo} className="spinnerlogo" alt="" />
      </div>
      <div className="loader"></div>
    </SpinnerStyles>
  );
};

export default Spinner;
