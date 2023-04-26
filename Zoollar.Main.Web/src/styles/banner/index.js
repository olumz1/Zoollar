import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import { Input, TextField, Typography } from "@mui/material";

export const BannerContainer = styled(Box)(({ src, theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${src})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(() => ({
  maxWidth: 420,
  padding: "280px",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  position: "absolute",
  top: "40%",
  left: "50%",
  padding: "20px, 10px",
  color: Colors.white,
  transform: "translate(-50%, -90%)",
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
  transform: "translate(-50%, 130%)",
  color: Colors.white,
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const BannerSearchContent = styled(Box)(() => ({
  maxWidth: "420px",
  maxHeight: "100px",
  display: "flex",
  justifyContent: "space-between",
}));

export const BannerSearchBox = styled(TextField)(({ place, theme }) => ({
  display: "flex",
  top: "30%",
  left: "50%",
  padding: "1px",
  position: "relative",
  transform: "translate(5%, 110%)",
  textDecoration: "none",
  Input: {
    outline: "none",
    backgroundColor: Colors.white,
    top: "30%",
    width: "500px",
    height: "20px",
    textIndent: "10px",
    border: "none",
    borderRadius: "0px",
  },
}));
