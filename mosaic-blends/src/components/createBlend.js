import React from "react";
import { Wizard, Step } from "./Wizard";
import Select from "react-select";
import { carrierOils } from "./../data/data.js";
import { addins } from "./../data/data.js";
import { essentialOils } from "./../data/data.js";
// import { containers } from "./../data/data.js";
import TextField from "@material-ui/core/TextField";
import CardList from "./CardList";

const MyStep = ({ children }) => (
  <div className="p-2 text-center">{children}</div>
);

export default class createBlend extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     recipe: '',
  //     myRecipe: [{ recipe: ""}]
  //   };
  // }

  state = {
    step: 0,
    value: "",
    carriers: [],
    essentials: [],
    addons: [],
    container: []
  };

  handleOnChangeCarriers(value) {
    this.setState({ carriers: value });
  }
  handleOnChangeEssentials(value) {
    this.setState({ essentials: value });
  }
  handleOnChangeAddons(value) {
    this.setState({ addons: value });
  }
  handleOnChangeContainers(value) {
    this.setState({ container: value });
  }
  handleChange = e => this.setState({ value: e.target.value });

  handleStep = step => {
    this.setState({ step });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="wizardContainer">
        <span className="display-4 text-center title">
          Blend Lab <i className="fas fa-magic" />
        </span>

        <Wizard step={this.state.step} onChange={this.handleStep}>
          <Step title="1" description="Getting Started">
            <div className="stepItem mt-1 text-center">
              <div className="stepDesc flex">
                <i
                  className="fas fa-flask"
                  style={{
                    color: "darkgreen",
                    transform: "rotateY(0deg) rotate(30deg)",
                    transition: "transform 2s",
                    paddingRight: "8px",
                    fontSize: "24px"
                  }}
                />
                Let's Get Started With Your Blend!{" "}
              </div>
              <center>
                <div className="input-group selectItem text-center">
                  <form noValidate autoComplete="off">
                    <TextField
                      required
                      id="outlined-helperText"
                      label="Type Blend Name"
                      helperText="Blend Name"
                      value={value}
                      onChange={this.handleChange}
                    />
                  </form>
                  <CardList />
                  {
                    // <input
                    //   type="text"
                    //   className="form-control selectItem col-xs-8"
                    //   aria-describedby="basic-addon3"
                    //   options={containers}
                    //   value={this.state.container}
                    //   onClick={this.handleOnChangeContainers.bind(this)}
                    // />
                  }
                </div>
              </center>
            </div>
          </Step>

          <Step title="2" description="Carrier Oil">
            <div className="p-2">
              <div className="stepDesc">
                The most important step for your special blend is to choose the
                base type (or carrier oils). You can choose up to 2 carrier
                oils. Read more in our Natural Remedies page by clicking here.
              </div>

              <Select
                isMulti
                isSearchable
                placeholder="Carrier Oils"
                options={carrierOils}
                className="basic-multi-select"
                classNamePrefix="Carrier Oils"
                onChange={this.handleOnChangeCarriers.bind(this)}
                value={this.state.carriers}
              />

              {/* <Select className="selectItem" options={options} /> */}
            </div>
          </Step>
          <Step title="3" description="Essential Oils">
            <div className="p-2">
              <div className="stepDesc">
                Now let's add your choice of essential oils
              </div>

              <Select
                isMulti
                isSearchable
                placeholder="Essential Oils"
                options={essentialOils}
                className="basic-multi-select"
                classNamePrefix="Essential Oils"
                onChange={this.handleOnChangeEssentials.bind(this)}
                value={this.state.essentials}
              />

              {/* <Select className="selectItem" options={options} /> */}
            </div>
          </Step>
          <Step title="4" description="Add-Ons">
            <div className="p-2">
              <div className="stepDesc">
                Would you like to include any Add-ons?
              </div>

              <Select
                isMulti
                isSearchable
                placeholder="Add-Ons"
                options={addins}
                className="basic-multi-select"
                classNamePrefix="Carrier Oils"
                onChange={this.handleOnChangeAddons.bind(this)}
                value={this.state.addons}
              />

              {/* <Select className="selectItem" options={options} /> */}
            </div>
          </Step>
          {/* You can use your own Step component */}
          <MyStep title="5" description="Summary">
            <div className="text-center">
              After reviewing, submit your customized blend to your cart
            </div>
            <div>
              <div className="blendname text-center">Blend Name: {value}</div>
              <div className="row">
                <div className="col-3">
                  <div className="oiltype">Carrier Oils</div>
                  <ul className="listItem">
                    {this.state.carriers.map(function(carrier, index) {
                      return (
                        <li className="listItems" key={index}>
                          {carrier.value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-3">
                  <div className="oiltype">Essential Oils</div>
                  <ul className="listItem">
                    {this.state.essentials.map(function(essential, index) {
                      return (
                        <li className="listItems" key={index}>
                          {essential.value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-3">
                  <div className="oiltype">Add-Ons</div>
                  <ul className="listItem">
                    {this.state.addons.map(function(addon, index) {
                      return (
                        <li className="listItems" key={index}>
                          {addon.value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-3">
                  <div className="oiltype">Container</div>
                  <ul className="listItem">
                    {/* {this.state.container.map(function(containers, index) {
                      return (
                        <li className="listItems" key={index}>
                          {containers.value}
                        </li>
                      );
                    })} */}
                  </ul>
                </div>
              </div>
            </div>
          </MyStep>
        </Wizard>
      </div>
    );
  }
}
