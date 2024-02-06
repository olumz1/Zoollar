import { Box, FormControl, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  ChartContainer,
  ChartContentArea,
  ChartHeader,
} from "../../../styles/charts";
import * as React from "react";
import Radio from "@mui/material/Radio";
import {
  NorthCentralStates,
  NorthEastStates,
  NorthWestStates,
  SouthSouthStates,
  SouthEastStates,
  SouthWestStates,
} from "../../../data";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../styles/theme";

export default function Charts(aspect) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = React.useState("");

  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({ checked }) => ({
    ".MuiFormControlLabel-label": checked && {
      // Change color here
      color: Colors.primary,
    },
  }));

  function MyFormControlLabel(props, backgroundColorText) {
    // MUI UseRadio Group
    const radioGroup = useRadioGroup();
    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
      backgroundColorText = checked ? "6439ff" : "";
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  let states;

  switch (value) {
    case "North Central":
      states = NorthCentralStates;
      break;
    case "North East":
      states = NorthEastStates;
      break;
    case "North West":
      states = NorthWestStates;
      break;
    case "South South":
      states = SouthSouthStates;
      break;
    case "South East":
      states = SouthEastStates;
      break;
    case "South West":
      states = SouthWestStates;
      break;
    default:
      states = NorthCentralStates;
  }

  return (
    <ChartContainer>
      <ChartContentArea>
        <ChartHeader>{aspect.title}</ChartHeader>
        <Box
          sx={{
            width: "100%",
            margin: "0 20px",
            display: "grid",
            gridTemplateColumns: "2fr 9fr",
          }}
        >
          <Box
            sx={{
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <FormControl
              sx={{
                placeItems: "center",
                display: "grid",
                fontSize: "1.2em",
                fontWeight: "600",
              }}
            >
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                sx={{
                  gap: "1.1em",
                  paddingTop: "10px",
                  width: "auto",
                }}
              >
                <MyFormControlLabel
                  value="North East"
                  sx={{
                    transition: "all 0.6s ease",
                    width: "100%",
                    height: "30px",
                    position: "relative",
                    border: "1px solid black",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                    "&:hover": {
                      backgroundColor: Colors.primary,
                      boxShadow: "none",
                      color: Colors.white,
                      border: "0",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        display: "none",
                      }}
                    />
                  }
                  label="North East"
                />

                <MyFormControlLabel
                  value="North Central"
                  sx={{
                    transition: "all 0.6s ease",
                    width: "100%",
                    height: "30px",
                    position: "relative",
                    border: "1px solid black",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                    "&:hover": {
                      backgroundColor: Colors.primary,
                      boxShadow: "none",
                      color: Colors.white,
                      border: "0",
                    },
                  }}
                  control={<Radio sx={{ display: "none" }} />}
                  label="North Central"
                />
                <MyFormControlLabel
                  value="North West"
                  sx={{
                    transition: "all 0.6s ease",
                    width: "100%",
                    height: "30px",
                    position: "relative",
                    border: "1px solid black",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                    "&:hover": {
                      backgroundColor: Colors.primary,
                      boxShadow: "none",
                      color: Colors.white,
                      border: "0",
                    },
                  }}
                  control={<Radio sx={{ display: "none" }} />}
                  label="North West"
                />
                <MyFormControlLabel
                  value="South West"
                  sx={{
                    transition: "all 0.6s ease",
                    width: "100%",
                    height: "30px",
                    position: "relative",
                    border: "1px solid black",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                    "&:hover": {
                      backgroundColor: Colors.primary,
                      boxShadow: "none",
                      color: Colors.white,
                      border: "0",
                    },
                  }}
                  control={<Radio sx={{ display: "none" }} />}
                  label="South West"
                />
                <MyFormControlLabel
                  value="South East"
                  sx={{
                    transition: "all 0.6s ease",
                    width: "100%",
                    height: "30px",
                    position: "relative",
                    border: "1px solid black",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                    "&:hover": {
                      backgroundColor: Colors.primary,
                      boxShadow: "none",
                      color: Colors.white,
                      border: "0",
                    },
                  }}
                  control={<Radio sx={{ display: "none" }} />}
                  label="South East"
                />
                <MyFormControlLabel
                  value="South South"
                  sx={{
                    transition: "all 0.6s ease",
                    width: "100%",
                    height: "30px",
                    position: "relative",
                    border: "1px solid black",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                    "&:hover": {
                      backgroundColor: Colors.primary,
                      boxShadow: "none",
                      color: Colors.white,
                      border: "0",
                    },
                  }}
                  control={<Radio sx={{ display: "none" }} />}
                  label="South South"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ float: "right" }}>
            <ResponsiveContainer width="100%" aspect={aspect.aspect}>
              <AreaChart
                width={730}
                height={200}
                data={states}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="gray" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="forsale"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#total)"
                />
                <Area
                  type="monotone"
                  dataKey="tolet"
                  stroke="#ffc658"
                  fillOpacity={1}
                  fill="url(#total)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </ChartContentArea>
    </ChartContainer>
  );
}
