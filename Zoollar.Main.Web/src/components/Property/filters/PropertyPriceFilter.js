import { Box, Button, MenuItem, TextField } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { useEffect, useState } from "react";

export default function PropertyPriceFilter(props) {
  const [open, setOpen] = useState(props.showPriceOptions);
  const [selectedMinPrice, setselectedMinPrice] = useState("");
  const [selectedMaxPrice, setselectedMaxPrice] = useState("");

  const handleClickAway = () => {
    if (open === "flex") {
      setOpen("none");
      props.closePriceFilter();
    }
  };

  const handleMaxPriceChange = (event) => {
    setselectedMaxPrice(event.target.value);
  };
  const handleMinPriceChange = (event) => {
    setselectedMinPrice(event.target.value);
  };

  useEffect(() => {
    setOpen(props.showPriceOptions);
  }, [props.showPriceOptions]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          left: 0,
          display: props.showPriceOptions,
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
              labelId="min-price"
              id="min-beds-select"
              select
              value={selectedMinPrice}
              label="Min price"
              defaultValue="Self contain"
              onChange={handleMinPriceChange}
              SelectProps={{
                MenuProps: { disablePortal: true, sx: { height: "400px" } },
              }}
            >
              {priceList.map((minPrice) => (
                <MenuItem sx={{}} key={minPrice} value={minPrice}>
                  {minPrice}
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
              labelId="max-price"
              id="max-price-select"
              select
              value={selectedMaxPrice}
              label="Max price"
              defaultValue="Max price"
              onChange={handleMaxPriceChange}
              SelectProps={{
                MenuProps: { disablePortal: true, sx: { height: "400px" } },
              }}
            >
              {priceList.map((maxPrice) => (
                <MenuItem key={maxPrice} value={maxPrice}>
                  {maxPrice}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
}

const priceList = [
  "₦100,000",
  "₦500,000",
  "₦1,000,000",
  "₦5,000,000",
  "₦10,000,000",
  "₦20,000,000",
  "₦30,000,000",
  "₦40,000,000",
  "₦50,000,000",
  "₦60,000,000",
  "₦70,000,000",
  "₦80,000,000",
  "₦90,000,000",
  "₦100,000,000",
  "₦200,000,000",
  "₦300,000,000",
  "₦400,000,000",
  "₦500,000,000",
  "₦600,000,000",
  "₦700,000,000",
  "₦800,000,000",
  "₦900,000,000",
  "₦1,000,000,000",
  "₦2,000,000,000",
  "₦3,000,000,000",
  "₦4,000,000,000",
  "₦5,000,000,000",
  "₦6,000,000,000",
  "₦7,000,000,000",
  "₦8,000,000,000",
  "₦9,000,000,000",
  "₦10,000,000,000",
  "₦20,000,000,000",
  "₦30,000,000,000",
  "₦40,000,000,000",
  "₦50,000,000,000",
  "₦60,000,000,000",
  "₦70,000,000,000",
  "₦80,000,000,000",
  "₦90,000,000,000",
  "₦100,000,000,000",
];
