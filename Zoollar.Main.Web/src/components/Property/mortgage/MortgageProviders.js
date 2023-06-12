import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Box } from "@mui/material";
import "./mortgageproviders.css";
import MortgagePaymentOptions from "./MortgagePaymentOptions";

export default function MortgageProviders() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                columnGap: "8px",
                padding: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    fill: "currentcolor",
                    height: "32px",
                    width: "32px",
                    fillRule: "evenodd",
                    padding: "0",
                  }}
                  src="/images/mortgage/GTBank_logo.png"
                  alt="Lenders Icon"
                />
              </Box>
              <Box sx={{ padding: "0", marginTop: "7px" }}>
                <span>GTBank</span>
              </Box>
            </Box>
          </Tab>
          <Tab>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                columnGap: "8px",
                padding: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    fill: "currentcolor",
                    height: "32px",
                    width: "32px",
                    fillRule: "evenodd",
                    padding: "0",
                  }}
                  src="/images/mortgage/accessbank_logo.png"
                  alt="Lenders Icon"
                />
              </Box>
              <Box sx={{ padding: "0", marginTop: "7px" }}>
                <span>Access</span>
              </Box>
            </Box>
          </Tab>
          <Tab>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                columnGap: "8px",
                padding: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    fill: "currentcolor",
                    height: "32px",
                    width: "32px",
                    fillRule: "evenodd",
                    padding: "0",
                  }}
                  src="/images/mortgage/FirstBankLogo.png"
                  alt="Lenders Icon"
                />
              </Box>
              <Box sx={{ padding: "0", marginTop: "7px" }}>
                <span>First Bank</span>
              </Box>
            </Box>
          </Tab>
          <Tab>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                columnGap: "8px",
                padding: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    fill: "currentcolor",
                    height: "32px",
                    width: "32px",
                    fillRule: "evenodd",
                    padding: "0",
                  }}
                  src="/images/mortgage/WemaBank_Logo.png"
                  alt="Lenders Icon"
                />
              </Box>
              <Box sx={{ padding: "0", marginTop: "7px" }}>
                <span>Wema Bank</span>
              </Box>
            </Box>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <MortgagePaymentOptions />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <MortgagePaymentOptions />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <MortgagePaymentOptions />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <MortgagePaymentOptions />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
