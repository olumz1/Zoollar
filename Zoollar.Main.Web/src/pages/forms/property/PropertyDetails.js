import {
  Box,
  Checkbox,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import * as React from "react";
import { CheckBox } from "@mui/icons-material";

export default function PropertyDetails({
  currency,
  //see how to set this up with updateFields
  Amount,
  offers,
  propertyType,
  listType,
  noOfBedrooms,
  noOfReceptiona,
  noOfBathrooms,
  propertyDescription,
  houseNameOrNumber,
  addressLine1,
  addressLine2,
  town,
  city,
  state,
  updateFields,
}) {
  const [currencyUsed, setCurrencyUsed] = useState("Naira");
  const [propertyTypeSelected, setPropertyTypeSelected] = useState("");
  const [noOfBeds, setNoOfBeds] = useState("");
  const [noOfBathroomsSelected, setNoOfBathroomsSelected] = useState("");
  const [noOfReception, setNoOfReception] = useState("");
  const [value, setValue] = React.useState("");
  const [stateSelected, setStateSelected] = React.useState("");
  const [checkedpropertyFeatures, setcheckedpropertyFeatures] = useState(
    propertyFeatures.slice().fill(false)
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlePropertyFeaturesChange = (index) => {
    setcheckedpropertyFeatures(
      checkedpropertyFeatures.map((v, i) => (i === index ? !v : v))
    );
  };

  const selectCurrency =
    currencyUsed && currencies.find((x) => x.value === currencyUsed);

  return (
    <>
      <Box
        component="fieldset"
        sx={{
          border: "1px solid lightgrey",
          padding: "22px",
          borderRadius: ".5rem",
          marginBottom: "16px",
        }}
      >
        <legend style={{ color: "#A9A9A9", fontSize: "16px" }}>
          Valuation section
        </legend>
        <TextField
          id="outlined-select-currency"
          select
          label="Currency"
          defaultValue="Naira"
          required
          value={currencyUsed}
          helperText="Please select your currency"
          onChange={(e) => setCurrencyUsed(e.target.value)}
          sx={{ m: 1 }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount" required>
            Amount
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                {currencyUsed && selectCurrency.label}
              </InputAdornment>
            }
            label="Amount"
          />
        </FormControl>
        <RadioGroup
          required
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          sx={{ m: 1 }}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Offers in range"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Offers over"
          />
        </RadioGroup>
      </Box>
      <Box
        component="fieldset"
        sx={{
          border: "1px solid lightgrey",
          padding: "22px",
          borderRadius: ".5rem",
        }}
      >
        <legend style={{ color: "#A9A9A9", fontSize: "16px" }}>
          Property details
        </legend>
        <Box sx={{ marginBottom: "22px" }}>
          <TextField
            id="outlined-select-currency"
            select
            label="Property type"
            required
            defaultValue=""
            value={propertyTypeSelected}
            helperText="Please select the property type"
            onChange={(e) => setPropertyTypeSelected(e.target.value)}
            sx={{ m: 1, float: "left" }}
            SelectProps={{
              MenuProps: { disablePortal: true, sx: { height: "400px" } },
            }}
          >
            {propertyTypes.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: 0,
              marginLeft: "auto",
              maxWidth: "42.5%",
              paddingLeft: "12px",
              borderLeft: "1px solid #d1d0cf",
            }}
          >
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                List type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                required
              >
                <FormControlLabel
                  value="forSale"
                  control={<Radio />}
                  label="For sale"
                />
                <FormControlLabel
                  value="toLet"
                  control={<Radio />}
                  label="To let"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minWidth: "315px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr",
            margin: "auto",
            gridGap: "1em",
            m: 1,
          }}
        >
          <TextField
            id="outlined-select-bedrooms"
            select
            label="No of bedrooms"
            defaultValue=""
            value={noOfBeds}
            required
            helperText="Please select the no of bedrooms"
            onChange={(e) => setNoOfBeds(e.target.value)}
            sx={{}}
            SelectProps={{
              MenuProps: { disablePortal: true, sx: { height: "400px" } },
            }}
          >
            {bedrooms.map((bed) => (
              <MenuItem key={bed} value={bed}>
                {bed}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-receptions"
            select
            label="No of receptions"
            defaultValue=""
            required
            value={noOfReception}
            helperText="Please select the no of receptions"
            onChange={(e) => setNoOfReception(e.target.value)}
            sx={{}}
            SelectProps={{
              MenuProps: { disablePortal: true, sx: { height: "400px" } },
            }}
          >
            {receptions.map((reception) => (
              <MenuItem key={reception} value={reception}>
                {reception}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-bathrooms"
            select
            label="No of bathrooms"
            required
            defaultValue=""
            value={noOfBathroomsSelected}
            helperText="Please select the no of bathrooms"
            onChange={(e) => setNoOfBathroomsSelected(e.target.value)}
            sx={{}}
            SelectProps={{
              MenuProps: { disablePortal: true, sx: { height: "400px" } },
            }}
          >
            {bathrooms.map((bathroom) => (
              <MenuItem key={bathroom} value={bathroom}>
                {bathroom}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <TextField
            id="standard-multiline-propertyDescription"
            label="Property description"
            multiline
            required
            rows={8}
            variant="outlined"
            value={propertyDescription}
            sx={{ m: 1, width: "100%" }}
            onChange={(e) =>
              updateFields({ propertyDescription: e.target.value })
            }
          />
        </Box>
        <Box sx={{ m: 1 }}>
          <TextField
            id="house-no"
            label="House name or number"
            variant="outlined"
            value={houseNameOrNumber}
            onChange={(e) =>
              updateFields({ houseNameOrNumber: e.target.value })
            }
            sx={{ marginBottom: "16px" }}
          />
          <br />
          <TextField
            fullWidth
            id="address-line-1"
            label="Address line 1"
            variant="outlined"
            value={addressLine1}
            onChange={(e) => updateFields({ addressLine1: e.target.value })}
            sx={{ marginBottom: "16px" }}
          />
          <br />
          <TextField
            fullWidth
            id="address-line-2"
            label="Address line 2"
            variant="outlined"
            value={addressLine2}
            onChange={(e) => updateFields({ addressLine2: e.target.value })}
            sx={{ marginBottom: "16px" }}
          />
          <br />
          <TextField
            id="town"
            label="Town"
            variant="outlined"
            value={town}
            onChange={(e) => updateFields({ town: e.target.value })}
            sx={{ marginRight: "16px" }}
          />
          <TextField
            id="city"
            label="City"
            required
            variant="outlined"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
            sx={{ marginRight: "16px" }}
          />
          <TextField
            id="outlined-select-states"
            select
            label="State"
            defaultValue=""
            required
            value={stateSelected}
            onChange={(e) => setStateSelected(e.target.value)}
            sx={{ width: "200px", marginBottom: "22px" }}
            SelectProps={{
              MenuProps: { disablePortal: true, sx: { height: "400px" } },
            }}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
          <FormControl>
            <FormLabel component="legend" sx={{ marginBottom: "16px" }}>
              Property features
            </FormLabel>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                columnGap: "0",
                flexWrap: "wrap",
                rowGap: "16px",
              }}
            >
              {propertyFeatures.map((propertyFeature, index) => (
                <Box sx={{ width: "50%" }}>
                  <Box sx={{ minWidth: 0, display: "flex" }}>
                    <Checkbox
                      key={index}
                      checked={checkedpropertyFeatures[index]}
                      onChange={() => handlePropertyFeaturesChange(index)}
                      sx={{
                        order: 0,
                        backgroundColor: "#fff",
                        borderRadius: "4px",
                        borderWidth: "1px",
                        borderColor: "#322744ad",
                        outline: "none",
                        height: "24px",
                        width: "24px",
                        display: "flex",
                        flexShrink: "0",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        minWidth: 0,
                      }}
                    ></Checkbox>
                    <Box
                      sx={{
                        paddingLeft: "16px",
                        alignItems: "flex-start",
                        color: "#322744",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <label
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          width: "-webkit-fill-available",
                          cursor: "pointer",
                        }}
                      >
                        {propertyFeature}
                      </label>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "Naira",
    label: "₦",
  },
  {
    value: "Pounds",
    label: "£",
  },
];

const propertyTypes = [
  "Mansion",
  "Flats",
  "Detached",
  "SemiDetached",
  "Bungalow",
  "Terraced",
  "Penthouse",
  "Duplex",
  "TwinDuplex",
  "Traditional",
  "Land",
  "Farm Land",
  "Warehouse",
  "Complex",
];

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

const receptions = ["1", "2", "3", "4 or more"];

const bathrooms = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10 or more"];

const states = [
  "Abuja",
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "CrossRiver",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const propertyFeatures = [
  "Bulletproof Doors",
  "Garden",
  "Strong Internet Coverage",
  "Strong Phone Signal",
  "Close To Town Center",
  "Spacious Compound",
  "Friendly Neighbours",
  "Ample Parking Space",
  "Swimming Pool",
  "Gate House",
  "Water Heater",
  "Gated Estate",
  "Cctv Monitored",
  "Smart Home",
  "Borehole Water Supply",
  "Well Water Supply",
  "Tarred Road",
  "Fully Furnished",
  "Unfurnished",
  "Partly Furnished",
  "Fire Alarm System",
  "Cinema",
  "Gym",
  "Estate Security",
  "Boys Quarters",
  "Fully Air Conditioned",
  "Partly Air Conditioned",
  "24hr Security",
];
