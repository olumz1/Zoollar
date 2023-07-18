import { Box, Button } from "@mui/material";
import { useState } from "react";
import Tabs from "rc-tabs";
import TabPane from "rc-tabs/es/TabPanelList/TabPane";
import "./mortgagepaymentoptions.css";
import MortgageCalculator from "./MortgageCalculator";
import formatter from "../../common/CurrencyFormatter";

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
          6 months plan
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          12 months plan
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Mortgage calculator
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <MortgageCalculator />
        </div>
        <Box
          sx={{
            borderTop: "1px solid #d1d0cf",
            position: "relative",
            padding: "0 !important",
            ":before": {
              position: "absolute",
              left: "50%",
              bottom: "-8px",
              width: "16px",
              height: "16px",
              backgroundColor: "#fff",
              borderWidth: "1px 0 0 1px",
              borderStyle: "solid",
              borderColor: "#d1d0cf",
              marginLeft: "-6px",
              transform: "rotate(-135deg) scale(1)",
              content: "''",
            },
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            padding: "16px 16px 0 16px",
            textAlign: "center",
            background: "#F4F4F5",
          }}
        >
          <p
            style={{
              textAlign: "right",
              marginRight: "10px",
              color: "#53535F",
              marginBottom: "8px",
              width: "100%",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Monthly repayments:
          </p>
          <span
            style={{
              textAlign: "left",
              marginLeft: "30px",
              fontSize: "24px",
              color: "#262637",
              width: "100%",
              border: "none",
              display: "inline-block",
              background: "transparent",
              fontWeight: "bold",
            }}
          >
            {formatter(1000000)}
          </span>
        </Box>
        <Box
          sx={{
            position: "relative",
            ":before": {
              position: "absolute",
              left: "50%",
              bottom: "-8px",
              width: "16px",
              height: "16px",
              backgroundColor: "#F4F4F5",
              borderWidth: "1px 0 0 1px",
              borderStyle: "solid",
              borderColor: "#D5D5D5",
              marginLeft: "-6px",
              transform: "rotate(-135deg) scale(1)",
              content: "''",
            },
          }}
        ></Box>
        <Box sx={{ background: "#F4F4F5", paddingBottom: "15px" }}>
          <Box
            sx={{
              flexDirection: "column",
              justifyContent: "space-between",
              display: "flex",
              textAlign: "center",
              padding: "10px",
              margin: "0 16px",
              background: "white",
              borderRadius: "2px",
              boxShadow: `0 4px 8px 0 rgba(38,38,55,0.24), 0 0 1px 0 rgba(38,38,55,0.32)`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                textAlign: "left",
              }}
            >
              <a
                style={{
                  height: "42px",
                  backgroundColor: "#8046f1",
                  color: "#fff",
                  transitionDuration: "0.16s",
                  transitionTimingFunction: `cubic-bezier(0.3,0,0.8,1)`,
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  textDecoration: "none",
                  transitionProperty: "transform,box-shadow,background-color",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "4px",
                  textAlign: "center",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
                target="_blank"
                rel="noreferrer"
                href="https://www.gtbank.com"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    columnGap: "8px",
                  }}
                >
                  How much credit could I get?
                </Box>
              </a>
              <Box
                sx={{
                  paddingTop: 0,
                  columnGap: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "100%",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                <p>In partnership with:</p>
                <a
                  style={{ display: "flex" }}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  href="https://www.gtbank.com/personal-banking/loans/gtmortgage"
                >
                  <img
                    style={{ width: "42px", height: "42px" }}
                    src="/images/mortgage/GTBank_logo.png"
                    alt="GTBank logo"
                  ></img>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default MortgagePaymentOptions;
