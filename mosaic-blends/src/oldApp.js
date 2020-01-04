import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Layout from "./partials/Layout"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Home';
//import Register from './components/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function App() {
    return (
      <div style={styles}>
          <Router>
          <Layout />
            <Switch>
          <Route path="/" component={Home} exact/>
          {/* <Route path="/Register" component={Register} exact/> */}
          </Switch>
          </Router>
      </div>
    );
  }
  
  export default App