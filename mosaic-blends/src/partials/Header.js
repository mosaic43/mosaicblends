import React from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import store from "./../store/index";
import { addItem } from "./../actions/index";
import { connect } from "react-redux";

window.store = store;
window.addItem = addItem;

store.subscribe(() => {
  console.log(store.getState().items.length);
});
const mapStateToProps = state => {
  return { items: state.items };
};

class Header extends React.Component {
  render() {
    const cartCounter = store.getState().items.length;

    return (
      <div className="navbar navHome">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <span className="navbar-brand">
                  <Link to="/">
                    <span className="mainTitle">Mosaic Blends</span>
                  </Link>
                </span>
              </div>
              <div className="col-9">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link to="/Wizard">
                          <div
                            className="nav-link"
                            to="/Wizard"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                          >
                            Natural Remedies
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/Wizard">
                          <div
                            className="nav-link"
                            to="/Wizard"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                          >
                            Our Blends
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/createBlend">
                          <div
                            className="nav-link"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                          >
                            Create Your Blend
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/start">
                          <div
                            className="nav-link"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                          >
                            About Us
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/start">
                          <div
                            className="nav-link"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                          >
                            Sign Up
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <div>
                      <Badge badgeContent={cartCounter} color="primary">
                        <i className="fas fa-shopping-cart cartIcon fa-2x" />
                      </Badge>
                    </div>
                    <div>
                      <i className="fas fa-user-circle cartIcon fa-2x" />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Header);
