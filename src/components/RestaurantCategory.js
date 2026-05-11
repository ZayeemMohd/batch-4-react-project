import MenuItem from "./MenuItem";

const RestaurnatCategory = ({ category }) => {
  const { title, itemCards } = category;

  return (
    <div className="category-accordian">
      {/* Header */}
      <div className="category-header">
        <span>{title} ({itemCards.length})</span>
        <span>⬇️</span>
      </div>

      {/* Body */}
      <div className="category-body">
        {itemCards.map((menuItem) => {
          return (
            <MenuItem key={menuItem.card.info.id} data={menuItem.card.info} />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurnatCategory;
