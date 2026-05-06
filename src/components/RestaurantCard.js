import { baseURL } from "../utils/constants";

const RestaurantCard = ({ hotelData }) => {
  // const { hotelData } = props;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    locality,
  } = hotelData;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={baseURL + cloudinaryImageId}
        />
      </div>
      <h3 className="res-title">{name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating} Stars</h4>
      <h4>
        {sla.delieveryTime} mins | {costForTwo}
      </h4>
      <h4>📍{locality}</h4>
    </div>
  );
};

export default RestaurantCard;
