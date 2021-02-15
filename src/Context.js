// import React from "react";
// const myAppContext = React.createContext();

// const AppProvider = ({childern})

import React, { useState } from "react";
import { useContext } from "react";
import Sublinks from "./Components/data";
export const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  //defining all states that will be used through context api
  const [isSidebaropen, setisSidebaropen] = useState(false);
  const [isSubmenuopen, setisSubmenuopen] = useState(false);
  const [location, setlocation] = useState({});
  const [pagee, setpaage] = useState({ page: "", links: [] });
  //end of all states that will be used through context api

  //defining function for chnaging state values
  const opensidebar = () => {
    setisSidebaropen(true);
  };
  const closesidebar = () => {
    setisSidebaropen(false);
  };
  const opensubmenu = (text, coordinates) => {
    // setpage(page);
    const pagefind = Sublinks.find((val) => {
      console.log(val.page, "a val.page");
      console.log(text, "here is your text");
      return val.page.toLowerCase() === text.toLowerCase();
    });
    console.log(pagefind, "pagefinded");
    setisSubmenuopen(true);
    setlocation(coordinates);
    setpaage(pagefind);
  };
  const closesubmenu = () => {
    setisSubmenuopen(false);
  };
  //end of functions
  console.log(pagee);
  return (
    <AppContext.Provider
      value={{
        isSidebaropen,
        opensidebar,
        closesidebar,
        opensubmenu,
        closesubmenu,
        location,
        isSubmenuopen,
        pagee,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const UseGlobalContext = () => {
  return useContext(AppContext);
};
export { UseGlobalContext };
