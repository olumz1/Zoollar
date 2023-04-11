import { ListItemText } from "@mui/material";
import { NavList } from "../../styles/navbar";

export default function AccountNavbar({ matches }) {
  //const Component = matches ? AccountNavbarMobile : AccountNavbarDesktop;
  return (
    <NavList type="row">
      <ListItemText
        primary="Saved"
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          marginRight: "10px",
        }}
      />
      <ListItemText
        primary="Sign in"
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          marginRight: "10px",
        }}
      />
    </NavList>
  );
}
