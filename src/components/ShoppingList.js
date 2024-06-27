import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All")
  const filteredItems = items.filter((item) => {
  return item.category === category || category === "All"
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => setCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
