import React, { useEffect, useRef } from "react";
import { UseGlobalContext } from "../Context";
import "./Submenu.css";
const Submenu = () => {
  const data = UseGlobalContext();
  const { isSubmenuopen, location, pagee } = data;

  console.log(pagee, "i am the page yoho");
  const container = useRef(null);
  useEffect(() => {
    const subbb = container.current;
    const { center, bottom } = location;
    subbb.style.left = `${center}px`;
    subbb.style.top = `${bottom}px`;
  }, [location]);
  return (
    <div>
      <div
        ref={container}
        className={`submenuchat ${isSubmenuopen ? "showsub" : "hidesub"}`}
      >
        <div className="notchlinks d-flex ">
          {pagee.links.map((val) => {
            return <h6 className="mx-2">{val.label}</h6>;
          })}
        </div>
        <div className="notch"></div>
      </div>
    </div>
  );
};

export default Submenu;
