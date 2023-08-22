import { Box, Button } from "@mui/material";
import { useState } from "react";
import "./mortgagepaymentoptions.css";
import MortgageCalculator from "./MortgageCalculator";
import PaymentPlanOptions from "./PaymentPlanOptions";

const MortgagePaymentOptions = (props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Box className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Short term plan
        </button>
        <button
          className={toggleState === 2 ? "tabs last-active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Mortgage calculator
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <PaymentPlanOptions propertyPaymentDetails={props} />
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <MortgageCalculator propertyPaymentDetails={props} />
        </div>
      </div>
    </Box>
  );
};

export default MortgagePaymentOptions;
