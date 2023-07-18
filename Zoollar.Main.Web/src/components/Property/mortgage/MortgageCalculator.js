import * as React from "react";
import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function MortgageCalculator() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <form>
      <Box
        sx={{
          gridTemplateColumns: "repeat(2,minmax(min-content,1fr))",
          display: "grid",
          gridRowGap: "16px",
          gridColumnGap: "16px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ paddingBottom: "4px" }}>
            <label
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Price
            </label>
          </Box>
          <Box sx={{ display: "flex", width: "100%", columnGap: "16px" }}>
            <Box
              sx={{
                position: "relative",
                flex: "1 1",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              <input
                placeholder="Price"
                min="0.0"
                step="1000"
                type="number"
                name="price"
                id="price"
                value="250000000"
                style={{
                  color: "#322744",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  padding: "12px",
                  height: "48px",
                  width: "100%",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#322744ad",
                  textOverflow: "ellipsis",
                }}
              ></input>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ paddingBottom: "4px" }}>
            <label
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Deposit (10%)
            </label>
          </Box>
          <Box sx={{ display: "flex", width: "100%", columnGap: "16px" }}>
            <Box
              sx={{
                position: "relative",
                flex: "1 1",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              <input
                placeholder="Deposit amount"
                min="0.0"
                step="1000"
                type="number"
                name="deposit"
                id="deposit"
                value="40500"
                style={{
                  color: "#322744",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  padding: "12px",
                  height: "48px",
                  width: "100%",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#322744ad",
                  textOverflow: "ellipsis",
                }}
              ></input>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", rowGap: "4px", flexDirection: "column" }}>
          <label
            style={{ fontWeight: "600", fontSize: "16px", lineHeight: "24px" }}
          >
            Repayment term
          </label>
          <FormControl
            sx={{
              display: "flex",
              position: "relative",
              rowGap: "4px",
              flexDirection: "column",
              flex: "1 1",
            }}
          >
            <Select
              value={5}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                color: "#322744",
                textAlign: "left",
                display: "flex",
                columnGap: "8px",
                backgroundColor: "#fff",
                height: "48px",
                padding: "12px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#322744ad",
                borderRadius: "4px",
              }}
            >
              <MenuItem value={10}>1 year</MenuItem>
              <MenuItem value={20}>2 year</MenuItem>
              <MenuItem value={30}>3 year</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ paddingBottom: "4px" }}>
            <label
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Interest rate
            </label>
          </Box>
          <Box sx={{ display: "flex", width: "100%", columnGap: "16px" }}>
            <Box
              sx={{
                position: "relative",
                flex: "1 1",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              <input
                placeholder="Interest rate"
                min="0.01"
                step="c.c1"
                type="number"
                name="rate"
                id="rate"
                value="5.5"
                style={{
                  color: "#322744",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  padding: "12px",
                  height: "48px",
                  width: "100%",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#322744ad",
                  textOverflow: "ellipsis",
                }}
              ></input>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
}
