import React from "react";
import {useState} from "react"


function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function swapCart(){
    setInCart(!inCart)
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={swapCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
