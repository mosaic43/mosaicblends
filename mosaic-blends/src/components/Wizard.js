import React from "react";

export const Wizard = ({ step: currentIndex, ...props }) => {
  const steps = React.Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep =
    currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

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

      <div className="mt-2 d-flex justify-content-between">
        <Button
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </Button>
        <Button
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export const Step = ({ children }) => children;

function getClsNavBtn(active) {
  return "btn btn-success flex-fill" + (active ? " active" : "");
}
function Button({ visible, ...props }) {
  return (
    <button className={visible ? "btn btn-success" : "invisible"} {...props} />
  );
}
