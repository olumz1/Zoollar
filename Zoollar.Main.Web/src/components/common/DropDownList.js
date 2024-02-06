import * as React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

export default function DropDownList(props) {
  return (
    <FormControl>
      <Select
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        renderValue={props.value !== "" ? undefined : () => "placeholder text"}
        sx={{
          color: "#322744",
          textAlign: "left",
          display: "flex",
          columnGap: "8px",
          backgroundColor: "#fff",
          height: "48px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#322744ad",
          borderRadius: "4px",
          fontSize: "16px",
        }}
      >
        <MenuItem value="12">12 months</MenuItem>
      </Select>
    </FormControl>
  );
}
