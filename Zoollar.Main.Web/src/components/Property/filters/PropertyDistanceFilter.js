import { Box, Button, MenuItem, TextField } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { useEffect, useState } from "react";

export default function PropertyDistanceFilter(props) {
  const [open, setOpen] = useState(props.isDistanceActive);
  const [selectedDistance, setselectedDistance] = useState("");

  const handleClickAway = () => {
    if (open) {
      setOpen(false);
    }
  };

  const handleDistanceChange = (event) => {
    setselectedDistance(event.target.value);
  };

  useEffect(() => {
    setOpen(props.isDistanceActive);
  }, [props.isDistanceActive]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <ul
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transitionProperty: "visibility, opacity",
          height: "352px",
          overflow: "auto",
          paddingTop: "8px",
          paddingBottom: "8px",
          position: "absolute",
          top: "48px",
          zIndex: 2,
          width: "100%",
          backgroundColor: "#fff",
          boxShadow:
            "0px 0px 12px #32274414,0px 0px 1px #32274452,0px 8px 16px -8px #3227443d",
          borderRadius: "4px",
          listStyleType: "none",
          transitionDuration: "0.16s",
          transitionTimingFunction: "cubic-bezier(0.3,0,0.8,1)",
          marginTop: "8px",
          overflowY: "scroll",
          maxHeight: "328px",
          padding: "0 4px",
          fontSize: "16px",
          lineHeight: "24px",
          paddingTop: "8px",
          paddingBottom: "8px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
          },
        }}
      >
        {distances.map((distance) => (
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 16px 8px",
              minWidth: 0,
            }}
            key={distance}
            value={distance}
          >
            <Box
              sx={{
                flex: "1 1",
                overflow: "hidden",
                overflowWrap: "break-word",
              }}
            >
              {distance}
            </Box>
          </li>
        ))}
      </ul>
    </ClickAwayListener>
  );
}

const bedrooms = [
  "Self contain",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10 or more",
];

const distances = [
  "This area only",
  "0.25 Kilometers",
  "0.5 Kilometers",
  "1 Kilometer",
  "3 Kilometers",
  "5 Kilometers",
  "10 Kilometers",
  "15 Kilometers",
  "20 Kilometers",
  "25 Kilometers",
  "30 Kilometers",
  "40 Kilometers",
  "50 Kilometers",
];
