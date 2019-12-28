import React from "react";
import CollectionPreview from "../../component/collection-preview/collection-preview.comopnent";

import SHOP_DATA from "./shop.data";

import "./shop.styles.scss";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;

    return (
      <div className="shop">
        <div className="title">Shop</div>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
export default Shop;
