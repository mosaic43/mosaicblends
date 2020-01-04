import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
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
                            to="/GettingStarted"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                          >
                            Getting Started
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
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
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
