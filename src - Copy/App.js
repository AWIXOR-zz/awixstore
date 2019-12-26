import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./component/header/header.component";
import Home from "./pages/home/home.component";
import Collection from "./pages/collections/collections.component";
import Products from "./pages/products/products.component";
import Contact from "./pages/contact/contact.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/collection" component={Collection} />
        <Route path="/products" component={Products} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
