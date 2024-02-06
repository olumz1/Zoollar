import {
  Box,
  Dialog,
  Button,
  IconButton,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SignIn from "./SignIn";
import PropTypes from "prop-types";
import * as React from "react";
import Register from "./Register";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LoginAndRegisterDialog(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0px",
        left: "0px",
        zIndex: 100002,
        height: "100%",
        //width: "100%",
        overflowY: "auto",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: `0.3s ease-out 0s 1 normal none running 0`,
        padding: "48px 16px",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "0px",
          left: "0px",
          height: "100%",
          //width: "100%",
          zIndex: 1,
          userSelect: "none",
          opacity: 1,
          ":after": {
            content: '""',
            backgroundColor: " rgb(0, 0, 0)",
            opacity: 0.5,
            position: "absolute",
            top: "0px",
            left: "0px",
            height: "100%",
            width: "100%",
          },
        }}
      ></Box>
      <Dialog
        open={props.open}
        onClose={props.close}
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginTop: "0px",
            border: "0px",
            overflowY: "auto",
            padding: "16px 16px 0px",
            flex: "1 1 auto",
          }}
        >
          <Box
            sx={{
              padding: "24px 8px",
              width: "auto",
              maxWidth: "448px",
              minWidth: "288px",
              margin: "0px auto",
            }}
          >
            <Box sx={{ textAlign: "center", marginBottom: "16px" }}>
              <span
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  clipPath: "rect(0 0 0 0)",
                  height: "1px",
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: "1px",
                }}
              ></span>
              <h2
                style={{
                  color: "#322744",
                  textTransform: "none",
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "32px",
                  margin: "0px 0px 8px",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                Welcome to Zoollar
              </h2>
              <p
                style={{
                  color: "rgb(42, 42, 51)",
                  WebkitFontSmoothing: "antialiased",
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  margin: "0px",
                }}
              ></p>
            </Box>
            <Box>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  sx={{
                    display: "flex",
                    marginBottom: "-1px",
                    borderBottom: `1px solid rgb(209, 209, 213)`,
                    alignItems: "stretch",
                    flexDirection: "row",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Tab
                    label="Sign in"
                    {...a11yProps(0)}
                    sx={{
                      padding: "16px",
                      backgroundColor: "transparent",
                      borderTopLeftRadius: "4px",
                      borderBottomLeftRadius: "4px",
                      borderTopRightRadius: "0px",
                      marginTop: "0px",
                      marginLeft: "0px",
                      position: "relative",
                      transition: "flex-shrink 0.2s ease-out 0s",
                      textTransform: "capitalize",
                      fontSize: "16px",
                      lineHeight: "24px",
                      height: "auto",
                    }}
                  />

                  <Tab
                    label="Register"
                    {...a11yProps(1)}
                    sx={{
                      padding: "16px",
                      backgroundColor: "transparent",
                      borderTopLeftRadius: "4px",
                      borderBottomLeftRadius: "4px",
                      borderTopRightRadius: "0px",
                      marginTop: "0px",
                      marginLeft: "0px",
                      position: "relative",
                      transition: "flex-shrink 0.2s ease-out 0s",
                      textTransform: "capitalize",
                      fontSize: "16px",
                      lineHeight: "24px",
                      height: "auto",
                    }}
                  />
                </Tabs>
                <CustomTabPanel value={value} index={0}>
                  <SignIn />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <Register />
                </CustomTabPanel>
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            top: "16px",
            right: "16px",
            position: "absolute",
            zIndex: 100013,
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.close}
            aria-label="close"
            sx={{
              height: "24px",
              width: "24px",
              backgroundColor: "initial",
              transitionProperty: `transform,box-shadow,background`,
              transitionDuration: "0.16s",
              transitionTimingFunction: `cubic-bezier(0.3,0,0.8,1)`,
              color: "#322744",
              ":-webkit-text-fill-color": "#322744",
              textDecoration: "none",
              borderRadius: "50%",
              border: "none",
              alignItems: "center",
              justifyContent: "center",
              display: "inline-flex",
              cursor: "pointer",
              outline: "none",
              padding: "8px",
            }}
          >
            <CloseIcon
              sx={{
                height: "24px",
                width: "24px",
                fillRule: "evenodd",
                verticalAlign: "top",
                display: "inline-block",
              }}
            />
          </IconButton>
        </Box>
      </Dialog>{" "}
    </Box>
  );
}
