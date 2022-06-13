import React from "react";

import axios from "axios";

import ItemCard from "../../components/ItemCard/ItemCard";

export class Store extends React.Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    axios.get("http://localhost:5050/items").then((res) => {
      const Data = res.data;
      this.setState({ items: Data });
    });
  }

  render() {
    return (
      <>
        <section className="py-4 container">
          <div className="row justify-content-center">
            {this.state.items.map((item, index) => (
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
