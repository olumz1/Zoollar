import { Box, Typography, styled } from "@mui/material";
import { Colors } from "../theme";

export const ChartContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "250px",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: "100px",
}));

export const ChartContentArea = styled(Box)(() => ({
  display: "flex",
  width: "80%",
  borderRadius: "10px",
  marginTop: "150px",
  backgroundColor: "#e6fafa",
}));
