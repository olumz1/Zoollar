import { Box, Typography, colors, styled } from "@mui/material";
import { Colors } from "../theme";

export const ChartContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
}));

export const ChartContentArea = styled(Box)(() => ({
  display: "table-row",
  width: "80%",
  alignItems: "center",
  paddingTop: "22px",
}));

export const ChartHeader = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  fontSize: "24px",
  display: "flex",
  fontWeight: "420",
}));

export const ChartSubHeaer = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  textAlign: "left",
  position: "absolute",
  fontSize: "16px",
  color: Colors.black,
  marginTop: "130px",
  display: "flex",
  left: "155px",
}));
