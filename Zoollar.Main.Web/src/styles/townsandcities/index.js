import { Box, Typography, colors, styled } from "@mui/material";
import { Colors } from "../theme";

export const TownsAndCityContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

export const TownsAndCityContentArea = styled(Box)(() => ({
  paddingBottom: "12px",
  paddingRight: "16px",
  width: "100%",
  fontSize: "32px",
  lineHeight: "44px",
}));

export const TownsAndCityHeader = styled(Box)(() => ({
  paddingBottom: "12px",
  paddingRight: "16px",
  width: "100%",
  fontSize: "32px",
  lineHeight: "44px",
}));

export const SuggestionTownAndCityPanel = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingTop: "12px",
  position: "relative",
}));
export const TownAndCityGrouping = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  paddingRight: "0",
  marginTop: "24px",
}));

export const TownAndCitySuggestionHeader = styled(Box)(() => ({
  display: "flex",
  paddingRight: "16px",
  width: "100%",
  paddingBottom: 0,
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
