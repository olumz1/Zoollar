import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import {
  NorthCentralStates,
  NorthEastStates,
  NorthWestStates,
  SouthSouthStates,
  SouthEastStates,
  SouthWestStates,
} from "../../data";
export default function RadioButtonsGroup() {
  // Style the form control
  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    ".MuiFormControlLabel-label": checked && {
      // Change color here
      color: "red",
    },
  }));

  function MyFormControlLabel(props) {
    // MUI UseRadio Group
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  const [value, setValue] = React.useState("");

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
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{
          backgroundColor: "#e4e9fd",
          gap: "1em",
          radio: {
            "&:checked": {
              color: "white",
            },
          },
        }}
      >
        <MyFormControlLabel
          value="North East"
          control={<Radio />}
          label="North East"
        />
        <MyFormControlLabel
          value="North Central"
          control={<Radio />}
          label="North Central"
        />
        <MyFormControlLabel
          value="North West"
          control={<Radio />}
          label="North West"
        />
        <MyFormControlLabel
          value="South West"
          control={<Radio />}
          label="South West"
        />
        <MyFormControlLabel
          value="South East"
          control={<Radio />}
          label="South East"
        />
        <MyFormControlLabel
          value="South South"
          control={<Radio />}
          label="South South"
        />
      </RadioGroup>
    </FormControl>
  );
}
