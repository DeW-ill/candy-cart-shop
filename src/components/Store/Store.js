import React from "react";

import "./Store.css";
import data from "../../data/db";

import ItemCard from "../../components/ItemCard/ItemCard";

export class Store extends React.Component {
  render() {
    return (
      <>
        <section className="container-content">
          <div className="wrapper">
            <div className="card-wrapper">
              {data.items.map((item, index) => (
                <ItemCard
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={parseFloat(item.price / 100)
                    .toFixed(2)
                    .toString()
                    .replace(".", ",")}
                  ean={item.ean}
                  item={item}
                  key={index}
                  className="card"
                  alt=""
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Store;
