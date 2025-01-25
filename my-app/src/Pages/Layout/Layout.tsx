import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import { ActiveContext } from "../../context/Context";

const Layout = () => {
  const [active, setActive] = useState(false);

  return (
    <ActiveContext.Provider value={{isActive: active, SetIsActive: setActive}}>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </ActiveContext.Provider>
  );
};
export default Layout;
