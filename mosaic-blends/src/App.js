import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
      <div className="App">
        <header className="App-header">
        
          <Router>
            <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/Register" component={Register} exact/>
          </Switch>
          </Router>
        </header>
      </div>
    );
  }
  
  export default App