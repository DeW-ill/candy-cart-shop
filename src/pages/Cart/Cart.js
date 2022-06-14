import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import PaymentsIcon from "@mui/icons-material/Payments";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Cart = () => {
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const offer = () => {
    if (cartTotal >= 1000) {
      return (
        <>
          <div className=" bg-success justify-content-center text-center align-items-center  bg-opacity-50 rounded-pill">
            <p className=" py-1">Parabéns, sua compra tem frete grátis</p>
          </div>
        </>
      );
    }
  };

  const totalPrice = parseFloat(cartTotal / 100)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  if (isEmpty)
    return (
      <>
        <h1 className="text-center my-5">Seu carrinho está vazio! </h1>
        <h2 className="text-center">
          <Link
            to="/"
            className="link-to text-decoration-none align-items-center"
          >
            <StorefrontIcon fontSize="large" /> Voltar para a Loja
          </Link>
        </h2>
      </>
    );
  return (
    <section className="py-4 container ">
      <div className="row justify-content-center">
        <div className="col-8 justify-content-right">
          <h5>Total Items: ({totalItems}) </h5>

          <table className="table table-responsive">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <div className="card mb-3 mw-60  ">
                      <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                          <img
                            src={item.imageUrl}
                            className="img-fluid rounded-start p-2"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8 ">
                          <div className="card-body ">
                            <h5 className="card-title ">{item.name}</h5>
                            <p className="card-text ">
                              Quantity: ({item.quantity})
                            </p>
                            <p className="card-text">
                              <small className="text-muted">
                                Cod: {item.ean}{" "}
                              </small>
                            </p>
                          </div>
                          <div class="gap-2 d-md-flex mt-3 justify-content-md-center">
                            <button
                              class="btn btn-outline-info border-0 ms-2 "
                              type="button"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <AddCircleIcon fontSize="medium" />
                            </button>
                            <button
                              class="btn btn-outline-warning border-0 ms-2 "
                              type="button"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <RemoveCircleIcon fontSize="medium" />
                            </button>
                            <button
                              class="btn btn-outline-danger border-0 ms-2 "
                              type="button"
                              onClick={() => removeItem(item.id)}
                            >
                              <DeleteIcon fontSize="medium" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="border px-4">
            <div className="card-body d-flex flex-row justify-content-between ">
              <h5>total</h5>
              <h5 className="card-title ">R$ {totalPrice}</h5>
            </div>
            {offer()}
          </div>
          <div className="border d-flex flex-column">
            <button
              class="btn btn-outline-info  m-2 "
              type="button"
              onClick={""}
            >
              Finalizar compra <span></span>
              <PaymentsIcon fontSize="medium" />
            </button>

            <button
              class="btn btn-outline-danger  m-2 "
              type="button"
              onClick={() => emptyCart()}
            >
              Esvaziar carrinho
              <DeleteIcon fontSize="medium" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
