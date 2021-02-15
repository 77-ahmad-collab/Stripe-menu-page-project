import React from "react";
import Sublinks from "./data";
import { VscChromeClose } from "react-icons/vsc";
import { UseGlobalContext } from "../Context";
const Sidemenu = () => {
  const data = UseGlobalContext();
  const { closesidebar } = data;
  return (
    <div className="d-block">
      <span
        className="close"
        style={{ fontSize: "25px" }}
        onClick={closesidebar}
      >
        <VscChromeClose />
      </span>
      {Sublinks.map((val) => {
        const { page, links } = val;
        const upage = page.toUpperCase();
        return (
          <div className="d-block">
            <h5>{upage}</h5>
            <div className=" subb">
              {links.map((val2) => {
                const { label, icon } = val2;
                return (
                  <>
                    <span className="m-2" style={{ fontSize: "20px" }}>
                      <span className="mr-2" style={{ color: "#00ff91" }}>
                        {icon}
                      </span>
                      {label}
                    </span>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="footer">
        <button className="btn btn-block btn-dark  ">Sign in</button>
      </div>
    </div>
  );
};

export default Sidemenu;
