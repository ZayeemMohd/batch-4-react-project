import MenuItem from "./MenuItem";
import { useState } from "react";

const RestaurnatCategory = ({ category, command, setIndex, brandName }) => {
 
  const { title, itemCards } = category;

  const handleClick = () => {
    setIndex()
  }

  return (
    <div className="category-accordian">
      {/* Header */}
      <div className="category-header" onClick={handleClick}>
        <span>
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {/* Body */}
      {command ? (
        <div className="category-body">
          {itemCards.map((menuItem) => {
            return (
              <MenuItem brandName={brandName} key={menuItem.card.info.id} data={menuItem.card.info} />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurnatCategory;
