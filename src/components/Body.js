import { resArr } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


 
 const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {resArr.map((resObj) => (
          <RestaurantCard key={resObj.id} hotelData={resObj} />
        ))}
      </div>
    </div>
  );
}; 


export default Body;