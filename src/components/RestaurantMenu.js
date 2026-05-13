import { useParams } from "react-router-dom";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurnatCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItems, setshowItems] = useState(null);
  const [company, setCompany] = useState("sasta-swiggy");

  const menu = useRestaurantMenu(resId);

  if (!menu) {
    return (
      <div>
        <div
          style={{
            paddingLeft: "340px",
            paddingTop: "100px",
            paddingBottom: "50px",
            paddingRight: "340px",
          }}
        ></div>
        Loading...
      </div>
    );
  }

  const categoriesArr = menu[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (category) => {
      console.log(category.card.card["@type"]);
      return (
        category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    },
  );
  console.log(categoriesArr);

  return (
    <div>
      <div
        style={{
          paddingLeft: "340px",
          paddingTop: "100px",
          paddingBottom: "50px",
          paddingRight: "340px",
        }}
      ></div>
      <RestaurantMenuInfoCard menuInfo={menu[2]?.card?.card?.info} />

      <h2>Menu: </h2>

      {categoriesArr.map((categoryObj, index) => {
        return (
          <RestaurnatCategory
            brandName={company}
            key={categoryObj.card.card.categoryId}
            category={categoryObj.card.card}
            command={index == showItems ? true : false}
            setIndex={() => {
              setshowItems(index === showItems ? null : index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
