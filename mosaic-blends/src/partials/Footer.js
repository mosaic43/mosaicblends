import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="footerBox">
        <div className="row">
          <div className="col col-md-6 footerTitle">
            <h5 className="white-text footerLarge">Essential Blends</h5>
            <p className="grey-text text-lighten-4 footerSmall">
              Making Lives Better
            </p>
            <p className="grey-text text-lighten-4 footerSmall" />
          </div>
          <div className="col col-md-6 rightFooter">
            <div className="col col-md-6">
              <span>
                <a className="grey-text text-lighten-3 white" href="/">
                  Locations
                </a>
              </span>
            </div>
            <div className="col col-md-6">
              <span>
                <a className="grey-text text-lighten-3 white" href="/about">
                  About
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
