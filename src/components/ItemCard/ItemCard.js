import * as React from "react";
import { useCart } from "react-use-cart";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "./ItemCard.css";

const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <div className=" card_container">
      <div className="card_item">
        <div className="card_img_container">
          <img src={props.imageUrl} className="card-img" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">R$ {props.price}</p>
          <small className="text-muted">Cod: {props.ean}</small>
          <p></p>
          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            <AddShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
