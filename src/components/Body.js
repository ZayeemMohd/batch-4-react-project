import { resArray } from "../utils/mockData";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resArr, setResArr] = useState(resArray);

  const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   console.log("use effect ke andar ka code run hua");
  // }, []);

  console.log("fetch called")

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

        <button
          onClick={() => {
            setIsLogin(!isLogin);
          }}
          className="filter-btn"
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>

      <div className="res-container">
        {resArr.map((resObj) => (
          <RestaurantCard key={resObj.id} hotelData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
