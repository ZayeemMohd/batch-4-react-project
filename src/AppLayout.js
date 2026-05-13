import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import useOnlineStatus from "./utils/useOnlineStatus";
import OfflinePage from "./components/OfflinePage";
import UserContext from "./utils/UserContext";
import HotelListContext from "./utils/HotelListContext";
import { useState } from "react";

const AppLayout = () => {
  const [hotelList, setHotelList] = useState();
  const [filteredHotelList, setFilteredHotelList] = useState();

  //authentication

  const isOnline = useOnlineStatus();
  return (
    <div>
      <UserContext.Provider
        value={{ name: "Zayeem", email: "zayeemuddin123@gmail.com" }}
      >
        <HotelListContext.Provider
          value={{
            hotelList,
            setHotelList,
            filteredHotelList,
            setFilteredHotelList,
          }}
        >
          <Header />
          {isOnline ? <Outlet /> : <OfflinePage />}
          <Footer />
        </HotelListContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default AppLayout;
