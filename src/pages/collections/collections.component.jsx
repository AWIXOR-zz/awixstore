import React from "react";

import MenuItem from "../../component/menuItem/menuItem.component";
import "./collections.styles.scss";

class Collection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "Caps & Hats",
          id: 1,
          size: "large",
          imgUrl:
            "https://i.ibb.co/XYjDQcR/apex-legends-battle-royale-glossary-unisex.jpg"
        },
        {
          title: "Accessories",
          id: 2,
          size: "large",
          imgUrl:
            "https://i.ibb.co/G2V3Rhd/game-apex-legends-bracelet-adjustable-silica.jpg"
        },
        {
          title: "Other Things",
          id: 3,
          size: "large",
          imgUrl:
            "https://i.ibb.co/y06Q9QX/r-BVa-VVx5-C76-AECo-BAAG8-Mro-Hlu0316.jpg"
        },
        {
          title: "Fleece",
          id: 4,
          size: "large",
          imgUrl: "https://i.ibb.co/m4TxBYL/5c79f7a7f1ece3428f66f9e3-large.jpg"
        },
        {
          title: "Backpacks",
          id: 5,
          size: "large",
          imgUrl:
            "https://i.ibb.co/CKJxc5w/apex-backpacks-apex-lifeline-school-bags.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="collection">
        <div className="title">All Collections</div>
        <div className="collection-items">
          {this.state.sections.map(({ id, ...otherprops }) => (
            <MenuItem key={id} {...otherprops} />
          ))}
        </div>
      </div>
    );
  }
}
export default Collection;
