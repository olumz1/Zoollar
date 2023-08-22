import { Box, List, Typography, styled } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";

// container
export const NavbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
  width: "89%",
}));

// header
export const NavbarHeader = styled(Typography)(() => ({
  fontSize: "1.2500em",
  textDecoration: "none",
  fontWeight: "bold",
  color: "#6439ff",
  padding: "4px",
}));

export const NavList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "150px",
  whiteSpace: "nowrap",
}));

export const AccountNavbarMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));

export const AccountNavbarDesktop = styled(Box)(() => {});
