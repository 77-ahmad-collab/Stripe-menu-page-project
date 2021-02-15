import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/logo.svg";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { UseGlobalContext } from "../Context";
import Submenu from "./Submenu";
const Mynavbar = () => {
  const data = UseGlobalContext();
  const { opensidebar, opensubmenu } = data;
  const displayitems = (e) => {
    const targettext = e.target.textContent;
    const temp = e.target.getBoundingClientRect();
    // console.log(temp);
    const center = temp.left;
    const bottom = temp.bottom + 10;
    // console.log(center, "i am center");
    console.log(targettext, "i am the page in navbar  ");

    opensubmenu(targettext, { center, bottom });
  };
  return (
    <div>
      <Submenu />
      <div className="container-fluid bb ">
        <img
          className="logo ml-5"
          src={logo}
          alt="ahamd"
          width="100px"
          height="100px"
        />
        <ul className={`linkscont `}>
          <li onMouseOver={displayitems}>Products</li>
          <li onMouseOver={displayitems}>developers</li>
          <li onMouseOver={displayitems}>Company</li>
        </ul>

        <button className="btn btn-sm btn-dark mr-5 hidebtn">Sign in</button>
        <button
          className="btn btn-md btn-dark show mr-2 "
          onClick={opensidebar}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Mynavbar;
