import { Box, List, Typography, styled } from "@mui/material";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 10,
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
}));

export const PromotionContentArea = styled(Box)(() => ({
  display: "flex",
  backgroundColor: Colors.light_gray,
  marginTop: "35px",
  width: "80%",
  borderRadius: "10px",
}));
