// import { useContext } from "react";
// import { Navbarr } from "./Components/Navbarr";
import "./App.css";

import { UseGlobalContext } from "./Context";
import { AppContext } from "./Context";
import Sidebar from "./Components/Sidebar";
import Mynavbar from "./Components/Mynavbar";
import Hero from "./Components/Hero";
import Submenu from "./Components/Submenu";
import Sidemenu from "./Components/Sidemenu";
import { useContext } from "react";
// import { myAppProvider } from "./Context";

function App() {
  // const { isSidebaropen } = UseGlobalContext();
  const { isSidebaropen } = useContext(AppContext);

  return (
    <div className="mainbody">
      <div className={`${isSidebaropen ? "opacity" : "hideopaccity"}`}></div>
      <div className={`${isSidebaropen ? "showsidemenu p-3" : "hidesidemenu"}`}>
        <Sidemenu />
      </div>
      <Mynavbar />
      <Hero />
      {/* <Sidebar />
      <Hero />
      <Submenu /> */}
    </div>
  );
}

export default App;
