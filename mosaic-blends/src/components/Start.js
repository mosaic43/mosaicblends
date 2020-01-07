import React, { Component } from "react";
// import './Register.css';
// import { Link } from 'react-router-dom';

class Start extends Component {
  render() {
    return (
      <div className="wizardContainer">
        <h3 className="text-center">Welcome to Mosaic Blends</h3>
        <br />
        <h5>
          Enjoy the ability to create your own custom made lotions, creams,
          soaps, aromatherapy, and other unique blends. There's plenty of
          carrier oils, essential oils and add-ins to choose from to create your
          mosaic blend.
        </h5>
        <br />
        <h5>
          To get started, select the Sign Up page to create your account or
          login.
        </h5>
        <br />
        <h5>
          Visit the Create Your Blend page to use our selection wizard to easily
          create your blend.
        </h5>
      </div>
    );
  }
}

export default Start;
