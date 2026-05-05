import { resArray } from "../utils/mockData";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // const [resArr, setResArr] = useState(resArray);
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.API_URL);
      const json = await response.json();
      console.log(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
      setHotelList(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
    };
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="filter-btn-div">
        <button
          onClick={() => {
            const filteredArr = resArr.filter((resObj) => {
              return resObj.avgRating >= 4.5;
            });

            setResArr(filteredArr);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {hotelList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} hotelData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
