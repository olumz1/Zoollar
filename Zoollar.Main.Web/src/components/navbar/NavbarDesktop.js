import { ListItemText } from "@mui/material";
import { NavList, NavbarContainer, NavbarHeader } from "../../styles/navbar";
import AccountNavbarIcon from "./accountnavbaricon";

export default function NavbarDesktop({ matches }) {
  return (
    <NavbarContainer>
      <NavbarHeader>Zoollar</NavbarHeader>
      <NavList type="row">
        <ListItemText primary="Buy" />
        <ListItemText primary="Rent" />
        <ListItemText primary="Sell" />
        <ListItemText primary="Home Loans" />
        <ListItemText primary="Estate Agents" />
      </NavList>
      <AccountNavbarIcon matches={matches} />
    </NavbarContainer>
  );
}
