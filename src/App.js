import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Prime from "./Prime";

const promise = loadStripe(
  "pk_test_51JD5hcSCLcyFuTy9BGi3DSwpO4JdUhu8T4ewcUWdqMiGl9F1IF37Q9dgzAV7vYzlT7rc5s3ozjH7s68M9SyF30mD00S1iyV5rw"
);

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    //only run once
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>,authUser");

      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //use is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
        <Route path="/prime">
            <Header />
            <Prime />
            
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
