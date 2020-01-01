import React from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Header from "./component/header/header.component";
import Home from "./pages/home/home.component";
import Collection from "./pages/collections/collections.component";
import Shop from "./pages/shop/shop.component";
import Contact from "./pages/contact/contact.component";
import SignIn from "./pages/signIn-signUp/signIn-signUp.component";

import Footer from "./component/footer/footer.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: ""
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
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
}

export default App;
