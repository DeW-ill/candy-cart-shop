import React from "react";

import data from "../../data/db";

import ItemCard from "../../components/ItemCard/ItemCard";

export class Store extends React.Component {
  render() {
    return (
      <>
        <section className="py-4 container">
          <div className="row justify-content-center">
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
              />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default Store;
