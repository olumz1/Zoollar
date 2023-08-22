import { Box, Typography, colors, styled } from "@mui/material";
import { Colors } from "../theme";

export const TownsAndCityContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "650px",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: "100px",
  clear: "both",
}));

export const TownsAndCityContentArea = styled(Box)(() => ({
  display: "flex",
  width: "80%",
  borderRadius: "10px",
}));

export const TownsAndCityHeader = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  textAlign: "left",
  position: "absolute",
  fontSize: "28px",
  color: Colors.black,
  display: "flex",
  left: "155px",
  fontWeight: "420",
}));

export const SuggestionTownAndCityPanel = styled(Box)(() => ({
  display: "block",
  minWidth: "100%",
  boxSizing: "border-box",
  marginTop: "30px",
}));
export const TownAndCityGrouping = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  marginTop: "24px",
}));

export const TownAndCitySuggestionHeader = styled(Box)(() => ({
  display: "flex",
  paddingRight: "16px",
  width: "100%",
  boxSizing: "border-box",
}));

export const TownAndCitiesSuggestionMiddle = styled(Box)(() => ({
  width: "100%",
  display: "block",
  paddingRight: "16px",
}));

export const SuggestedCity = styled(Box)(() => ({
  display: "block",
  padding: "16px",
}));

export const ExploreTownAndCityToBuyIcon = styled("img")((src, theme) => ({
  src: `url(${src})`,
}));

export const TownAndCitySeparator = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignContent: "normal",
  justifyContent: "normal",
  alignItems: "normal",
  whiteSpace: "nowrap",
  textAlign: "center",
  margin: "0",
  "&::before": {
    width: "100%",
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    content: '""',
    position: "relative",
    borderColor: "#3227443d",
    boxSizing: "border-box",
  },
  "&::after": {
    width: "100%",
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    content: '""',
    position: "relative",
    borderColor: "#3227443d",
    boxSizing: "border-box",
  },
}));
