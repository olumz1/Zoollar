import { Box, Button, MenuItem, TextField } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { useEffect, useState } from "react";

export default function PropertyBedroomsFilter(props) {
  const [open, setOpen] = useState(props.showBedroomOptions);
  const [selectedMinBed, setselectedMinBed] = useState("");
  const [selectedMaxBed, setselectedMaxBed] = useState("");

  const handleClickAway = () => {
    if (open === "flex") {
      setOpen("none");
      props.closeBedFilter();
    }
  };

  const handleMaxBedChange = (event) => {
    setselectedMaxBed(event.target.value);
  };
  const handleMinBedChange = (event) => {
    setselectedMinBed(event.target.value);
  };

  useEffect(() => {
    setOpen(props.showBedOptions);
  }, [props.showBedOptions]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          left: 0,
          display: props.showBedOptions,
          flexGrow: "1",
          marginTop: "8px",
          position: "absolute",
          backgroundColor: "#fff",
          border: "1px solid #3227443d",
          justifyContent: "space-between",
          paddingTop: "8px",
          borderRadius: "4px",
          top: "100%",
          zIndex: "500",
          flexDirection: "row",
          minWidth: "32.5rem",
        }}
      >
        <Box
          sx={{
            flexGrow: "1",
            margin: "0.5rem",
            display: "flex",
            rowGap: "4px",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              rowGap: "4px",
              flexDirection: "column",
              flex: "1 1",
            }}
          >
            <TextField
              labelId="min-beds"
              id="min-beds-select"
              select
              value={selectedMinBed}
              label="Min price"
              defaultValue="Self contain"
              onChange={handleMinBedChange}
              SelectProps={{
                MenuProps: { disablePortal: true, sx: { height: "400px" } },
              }}
            >
              {bedrooms.map((minBed) => (
                <MenuItem sx={{}} key={minBed} value={minBed}>
                  {minBed}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: "1",
            margin: "0.5rem",
            display: "flex",
            rowGap: "4px",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              rowGap: "4px",
              flexDirection: "column",
              flex: "1 1",
            }}
          >
            <TextField
              labelId="max-beds"
              id="max-beds-select"
              select
              value={selectedMaxBed}
              label="Max bed"
              defaultValue="Max bed"
              onChange={handleMaxBedChange}
              SelectProps={{
                MenuProps: { disablePortal: true, sx: { height: "400px" } },
              }}
            >
              {bedrooms.map((maxBed) => (
                <MenuItem key={maxBed} value={maxBed}>
                  {maxBed}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
      </Box>
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
