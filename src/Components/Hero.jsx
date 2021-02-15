import React from "react";
import "./Hero.css";
import Phone from "../Images/phone.svg";
import { UseGlobalContext } from "../Context";
const Hero = () => {
  const { closesubmenu } = UseGlobalContext();
  return (
    <div className="image" onMouseOver={closesubmenu}>
      {/* <img className="hero" src={Heroo} alt="ahamd" /> */}
      <div className="herobody">
        <h1>
          <span style={{ color: "rebeccapurple" }}>
            Payments infrastructure for the
          </span>{" "}
          internet
        </h1>
        <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn1">Start now</button>
          <button className="btn2">Contact Sales</button>
        </div>
      </div>
      <div className="phone">
        <img src={Phone} alt="phoimage" width="340px" />
      </div>
    </div>
  );
};

export default Hero;
