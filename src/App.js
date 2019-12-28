import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./component/header/header.component";
import Home from "./pages/home/home.component";
import Collection from "./pages/collections/collections.component";
import Shop from "./pages/shop/shop.component";
import Contact from "./pages/contact/contact.component";
import SignIn from "./pages/signIn-signUp/signIn-signUp.component";

import Footer from "./component/footer/footer.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/collections" component={Collection} />
        <Route path="/shop" component={Shop} />
        <Route path="/Contact" component={Contact} />
        <Route path="/signIn" component={SignIn} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
