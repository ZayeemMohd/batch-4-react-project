import { resArray } from "../utils/mockData";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import HotelListContext from "../utils/HotelListContext";
import { useContext } from "react";

const Body = () => {
  // const [resArr, setResArr] = useState(resArray);

  const { hotelList, setHotelList } = useContext(HotelListContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.API_URL);
      const json = await response.json();
      console.log(json?.data);
      if (json?.data.cards.length > 11) {
        setHotelList(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
      } else {
        setHotelList(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
      }
    };
    fetchData();
  }, []);

  if (!hotelList) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-btn-div">
        <button
          onClick={() => {
            const filteredArr = hotelList.filter((resObj) => {
              return resObj.avgRating >= 4.5;
            });

            setHotelList(filteredArr);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {hotelList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            <RestaurantCard hotelData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
