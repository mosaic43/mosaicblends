import React from "react";
import { Wizard, Step } from "./Wizard";
import Select from "react-select";

const MyStep = ({ children }) => (
  <div className="p-2 text-center">{children}</div>
);
const options = [
  { value: "carrierOne", label: "carrier 1" },
  { value: "carrierTwo", label: "carrier 2" },
  { value: "carrierThree", label: "carrier 3" }
];
export default class createBlend extends React.Component {
  state = { step: 0 };

  handleStep = step => {
    this.setState({ step });
  };

  render() {
    return (
      <div className="wizardContainer">
        <h1 className="display-4 text-center">Blend Lab</h1>

        <Wizard step={this.state.step} onChange={this.handleStep}>
          <Step title="Getting Started" description="Getting Started">
            <div className="stepItem mt-1 text-center">
              <div className="stepDesc">Let's Get Started With Your Blend!</div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">
                    Blend Name:{" "}
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
          </Step>

          <Step title="Carrier Oil" description="Carrier Oil">
            <div className="p-2">
              <div className="stepDesc">
                The most important step for your special blend is to choose the
                base type (or carrier oils). You can choose up to 2 carrier
                oils. Read more in our Natural Remedies page by clicking here.
              </div>

              <Select options={options} />
            </div>
          </Step>

          <Step title="Add-Ons" description="Add-Ons">
            <div className="p-2">
              The Step component keeps props which are used by the Wizard
              component.
            </div>
          </Step>
          {/* You can use your own Step component */}
          <MyStep title="Summary" description="Summary">
            <p className="lead text-center">
              After reviewing, submit your customized blend to your cart
            </p>
            <p>
              <small>
                If you're looking for a wizard with a <strong>router</strong>{" "}
                then{" "}
                <a
                  href="https://codesandbox.io/s/0ojwoyo11l"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here is the example with <code>@reach/router</code>
                </a>
                !
              </small>
            </p>
          </MyStep>
        </Wizard>
      </div>
    );
  }
}
