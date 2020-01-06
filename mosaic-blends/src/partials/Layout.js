import React from "react";
import Header from "./Header.js";
// import Footer from "./Footer.js";
import { Route, Switch } from "react-router-dom";
import Main from "../components/Main";
import createBlend from "../components/createBlend";
import Skincare from "../components/Skincare";
import Register from "../components/Register.js";
import Login from "../components/Login";
import Start from "../components/Start";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "down content is test";
  }

  render() {
    return (
      <div>
        <Header />
        <div
          className="mainHome"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/createBlend" component={createBlend} exact />
            <Route path="/Skincare" component={Skincare} exact />
            <Route path="/Register" component={Register} exact />
            <Route path="/Login" component={Login} exact />
            <Route path="/Start" component={Start} exact />
          </Switch>
        </div>
        {/* <Footer /> */}
        {/* <h1>{this.name}!</h1> */}
      </div>
    );
  }
}
