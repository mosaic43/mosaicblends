import React from 'react';
import { render } from "react-dom";
import Layout from "./partials/Layout";
import { BrowserRouter as Router } from "react-router-dom";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

const App = () => (
    <div style={styles}>
      <Router>
        <Layout />
      </Router>
    </div>
  );

render(<App />, document.getElementById("root"));

