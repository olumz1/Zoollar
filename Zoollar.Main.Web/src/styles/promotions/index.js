import { Box, List, Typography, styled } from "@mui/material";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "80px",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: "100px",
}));

export const PromotionContentArea = styled(Box)(() => ({
  display: "flex",
  width: "80%",
  borderRadius: "10px",
  backgroundColor: "#EBE8FC",
  marginTop: "120px",
}));

export const PromotionColumnA = styled(Box)(() => ({
  position: "relative",
  float: "left",
  width: "50%",
  padding: "80px 30px 80px",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  backgroundColor: "#EBE8FC",
}));

export const PromotionImage = styled("img")((src) => ({
  position: "relative",
  float: "right",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  width: "50%",
  src: `url(${src})`,
}));

export const PromotionTitle = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  textAlign: "left",
  position: "relative",
  padding: "10px, 0px, 10px",
  fontSize: "28px",
  color: Colors.black,
  marginBottom: "20px",
  fontWeight: "420",
}));

export const PromotionDescription = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  textAlign: "left",
  position: "relative",
  fontSize: "16px",
  color: Colors.black,
  marginBottom: "20px",
}));
