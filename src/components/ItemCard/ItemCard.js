import * as React from "react";
import { useCart } from "react-use-cart";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hiden h-100 shadow">
        <figure className="figure">
          <img
            src={props.imageUrl}
            className="card-img-top img-fluid rounded"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">R$ {props.price}</p>
          <small class="text-muted">Cod: {props.ean}</small>
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
