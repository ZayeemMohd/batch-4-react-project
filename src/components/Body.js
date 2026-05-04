// import { resArr } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

let resArr = [
  {
    id: "40377",
    resName: "Lucky Restaurant",
    cuisine: ["Biryani", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 36,
    costForTwo: "₹300 for two",
    imgId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
    location: "Santosh Nagar",
  },
  {
    id: "79706",
    resName: "Shah Ghouse Hotel & Restaurant",
    cuisine: ["Biryani", "Chinese", "Mughlai", "Tandoor"],
    avgRating: 4.8,
    delieveryTime: 30,
    costForTwo: "₹350 for two",
    imgId: "ggbuknqzqc4qoqfnl2cr",
    location: "Charminar",
  },
  {
    id: "150646",
    resName: "Cream Stone Ice Cream",
    cuisine: ["Ice Cream", "Desserts", "Beverages", "Ice Cream Cakes"],
    avgRating: 4.6,
    delieveryTime: 30,
    costForTwo: "₹250 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/24/de4e5459-06d1-4249-bf8f-7e9277fb5035_150646.JPG",
    location: "Himayath Nagar",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="filter-btn-div">
        <button
          onClick={() => {
            console.log("orginal array before filter: ", resArr)
            const filteredArr = resArr.filter((resObj) => {
              return resObj.avgRating >= 4.5;
            });
            console.log("Filtered array is: ", filteredArr)
            resArr = filteredArr;
            console.log("Original array: ", resArr)
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
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
