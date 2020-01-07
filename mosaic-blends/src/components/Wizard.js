import React from "react";
import store from "./../store/index";
import { addItem } from "./../actions/index";
import Snackbar from "@material-ui/core/Snackbar";
window.store = store;
window.addItem = addItem;

var open = false;
var setOpen = false;

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpen(false);
};

//function addToCart() {}
export const Wizard = ({ step: currentIndex, ...props }) => {
  const steps = React.Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep =
    currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;
  const lastStep = currentIndex === steps.length - 1;
  const addToCart = () =>
    store.dispatch(
      addItem({ title: "React Redux Tutorial for Beginners", id: 1 })
    );
  return (
    <div>
      <nav className="btn-group d-flex">
        {steps.map((step, index) => (
          <button
            key={step.props.title}
            onClick={() => props.onChange(index)}
            className={getClsNavBtn(index === currentIndex)}
            title={step.props.description}
          >
            {step.props.title}
          </button>
        ))}
      </nav>

      {steps[currentIndex]}
      <br />
      <br />
      <br />

      <div className="mt-4 d-flex justify-content-between">
        <Button
          style={{ width: "100px" }}
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </Button>
        <Button visible={lastStep} onClick={addToCart} title="Add to Cart">
          Add to Cart
        </Button>
        <Button
          style={{ width: "100px" }}
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Next
        </Button>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        Test
      </Snackbar>
    </div>
  );
};

export const Step = ({ children }) => children;
function getClsNavBtn(active) {
  return "btn btn-success flex-fill" + (active ? " active" : "");
}
// function getClsNavBtn(active) {
//   return "btn btn-success flex-fill" + (active ? " active" : "");
// }
function Button({ visible, ...props }) {
  return (
    <button className={visible ? "btn btn-success" : "invisible"} {...props} />
  );
}
