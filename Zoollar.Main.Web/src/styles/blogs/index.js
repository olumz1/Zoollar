import { Box, Typography, styled } from "@mui/material";
import { Colors } from "../theme";

export const BlogsContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "270px",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: "100px",
}));

export const BlogsContentArea = styled(Box)(() => ({
  display: "flex",
  width: "80%",
  borderRadius: "10px",
  marginTop: "150px",
}));

export const BlogsHeader = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  textAlign: "left",
  position: "absolute",
  fontSize: "28px",
  color: Colors.black,
  marginTop: "80px",
  display: "flex",
  left: "155px",
  fontWeight: "420",
}));

export const BlogsSubHeaer = styled(Typography)(() => ({
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

export const Blog = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "97%",
  borderRadius: "10px",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const BlogImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  minWidth: "100%",
  height: "250px",
  marginTop: "130px",
  borderRadius: "10px",
  [theme.breakpoints.up("md")]: {},
}));

export const BlogTitle = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  textAlign: "right",
  position: "relative",
  padding: "10px, 0px, 10px",
  fontSize: "28px",
  color: Colors.black,
  marginBottom: "20px",
}));

export const BlogDate = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  textAlign: "left",
  position: "relative",
  fontSize: "16px",
  color: "grey",
  marginTop: "8px",
  display: "flex",
  marginLeft: "-5px",
}));

export const BlogDescription = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  textAlign: "left",
  position: "relative",
  fontSize: "16px",
  color: Colors.black,
  marginTop: "10px",
  marginLeft: "-5px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "22rem",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
}));
