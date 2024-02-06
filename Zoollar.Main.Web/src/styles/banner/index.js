import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import { Input, TextField, Typography } from "@mui/material";

export const BannerContainer = styled(Box)(({ src, theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  height: "75vh",
  // [theme.breakpoints.down("sm")]: {
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
}));

export const BannerContent = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(12,minmax(0,1fr))",
  gridAutoRows: "max-content",
  width: "100%",
  maxWidth: "1224px",
  gridColumnGap: "16px",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  textShadow: `0px 0px 8px #3227440a,0px 0px 1px #32274452,0px 8px 8px -8px #32274429`,
  marginBottom: "24px",
  padding: 0,
  textAlign: "center",
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "48px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  textAlign: "center",
  position: "absolute",
  top: "40%",
  left: "50%",
  fontSize: "22px",
  transform: "translate(-50%, 100%)",
  color: Colors.white,
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const BannerSearchContent = styled(Box)(() => ({
  maxWidth: "auto",
  maxHeight: "100px",
  display: "flex",
  justifyContent: "space-between",
}));

export const BannerSearchBox = styled(TextField)(({ place, theme }) => ({
  flexGrow: 1,
  boxSizing: "border-box",
  position: "relative",
  display: "block",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
    top: "30%",
    left: "25%",
  },
  [theme.breakpoints.down("lg")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
    left: "15%",
  },
  textDecoration: "none",
  inputRoot: {
    borderRadius: "0px",
  },
  Input: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: ".1px",
    fontWeight: 400,
    border: `1px solid #dfdfe1`,
    borderRadius: "4px",
    boxSizing: "border-box",
    backgroundColor: Colors.white,
    height: "48px",
    padding: "8px 16px",
    transitionDuration: ".16s",
    width: "450px",
    display: "inline-block",
    textAlign: "start",
    outline: "none",
  },
}));
