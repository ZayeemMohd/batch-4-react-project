import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // {
  //     resId: "pista-house"
  // }
  const { resId } = useParams();
  return (
    <div className="menu-item-wrapper">
      <h1>{resId} Restaurant MENU:</h1>
      fetch baseURL + resId
    </div>
  );
};

export default RestaurantMenu;
