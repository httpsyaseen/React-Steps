import { useState } from "react";
import Hamburger from "hamburger-react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function previousHandler() {
    if (step > 1) setStep((step) => step - 1);
  }

  function forwardHandler() {
    if (step < 3) setStep((step) => step + 1);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Hamburger
          size={22}
          toggled={isOpen}
          toggle={() => {
            setIsOpen(!isOpen);
          }}
        />
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousHandler}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={forwardHandler}
            >
              Forward
            </button>
          </div>
        </div>
      )}
    </>
  );
}
