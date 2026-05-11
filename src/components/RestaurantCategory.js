import MenuItem from "./MenuItem";

const RestaurnatCategory = ({ category }) => {
  const { title, itemCards } = category;

  return (
    <div>
      <h3>{title}</h3>
      <p>{itemCards.length} items</p>

      {itemCards.map((menuItem) => {
        return (
          <MenuItem key={menuItem.card.info.id} data={menuItem.card.info} />
        );
      })}
    </div>

  );
};

export default RestaurnatCategory;
