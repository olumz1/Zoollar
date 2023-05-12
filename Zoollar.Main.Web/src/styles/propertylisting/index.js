import { Box, Typography, colors, styled } from "@mui/material";
import { Colors } from "../theme";
import zIndex from "@mui/material/styles/zIndex";

export const PropertyCard = styled(Box)(() => ({
  padding: "15px 15px 15px 7.5px",
  boxSizing: "border-box",
}));

export const PropertyCardFeatured = styled(Box)(() => ({
  borderRadius: "8px",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#fff",
  boxShadow: `0 3px 3px -3px rgba(0,0,0,.3)`,
  boxSizing: "border-box",
}));

export const PropertyCardWrapper = styled(Box)(() => ({
  position: "relative",
  display: "block",
  boxSizing: "border-box",
}));

export const PropertyCardImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  minWidth: "100%",
  height: "auto",
  margin: "0 auto",
  zIndex: 2,
  overflowClipMargin: "content-box",
  overflow: "clip",
  [theme.breakpoints.up("md")]: {},
}));

export const FeaturedListing = styled(Box)(() => ({
  width: "398px",
  paddingTop: "24px",
  boxSizing: "border-box",
}));

export const PropertyCardFooter = styled(Box)(() => ({
  width: "597px",
  backgroundColor: "#EBE8FC",
  display: "block",
  position: "relative",
  zIndex: "2",
}));
export const PropertyCardPrice = styled(Box)(() => ({
  borderRight: "none",
  position: "relative",
  padding: "10px",
  minHeight: "73px",
}));

export const PropertyCardContent = styled(Box)(() => ({
  left: "530px",
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  zIndex: 0,
  overflow: "hidden",
  display: "block",
  boxSizing: "border-box",
}));

export const PropertyCardAddress = styled("address")(() => ({
  fontWeight: 400,
  fontSize: "16px",
  margin: "0 32px 6px 0",
  color: "#262637",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  maxHeight: "42px",
  fontStyle: "normal",
  lineHeight: "1.2rem",
  overflow: "hidden",
  fontFamily: "Effra-Medium,Arial,Geneva,sans-serif",
  WebkitFontSmoothing: "antialiased",
}));

export const PropertySearchSection = styled(Box)(() => ({
  width: "100%",
  maxWidth: "inherit",
  gridArea: "main-content",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "block",
  padding: "0",
}));

export const PropertySearchHeader = styled(Typography)(() => ({
  marginBottom: "0",
  fontSize: "28px",
  lineHeight: "40px",
}));

export const PropertyTotalSearch = styled(Typography)(() => ({
  margin: "auto 0",
  color: "#322744",
  fontWeight: 600,
}));

export const PaginationList = styled("ul")(() => ({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
}));

export const PropertyAsideSection = styled("aside")(() => ({
  flexWrap: "wrap",
  alignItems: "flex-start",
  alignContent: "flex-start",
  padding: 0,
  maxWidth: "18.75rem",
  display: "flex",
  minWidth: "18.6875rem",
  gridArea: "sidebar",
}));

export const PropertyFeaturedListing = styled(Box)(() => ({
  padding: "12px 4px 4px",
  marginBottom: "32px",
  background: "#decefb",
  borderRadius: "8px",
}));

export const PropertyFeaturedTemplate = styled(Box)(() => ({
  minWidth: "auto",
  marginTop: "auto",
  background: "#fff",
  display: "flex",
  height: "100%",
  textAlign: "left",
  flexDirection: "column",
  border: "1px solid #decefb",
  borderRadius: "8px",
  padding: 0,
  overflow: "hidden",
  scrollSnapAlign: "center",
}));
