import { ListItem, ListItemText } from "@mui/material";
import { NavList, NavbarContainer, NavbarHeader } from "../../styles/navbar";
import AccountNavbarIcon from "./accountnavbaricon";
import { Link } from "react-router-dom";

export default function NavbarDesktop({ matches }) {
  return (
    <NavbarContainer>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          marginLeft: "100px",
          marginRight: "-100px",
          flexGrow: 1,
        }}
      >
        <NavbarHeader>Zoollar</NavbarHeader>
      </Link>
      <NavList type="row">
        <ListItem component={Link} to="/property/forsale">
          <ListItemText primary="Buy" />
        </ListItem>
        <ListItem component={Link} to="/property/tolet">
          <ListItemText primary="Rent" />
        </ListItem>
        <ListItem component={Link} to="/property/forsale">
          <ListItemText primary="Sell" />
        </ListItem>
        <ListItem component={Link} to="/property/forsale">
          <ListItemText primary="Home Loans" />
        </ListItem>
        <ListItem component={Link} to="/property/forsale">
          <ListItemText primary="Estate Agents" />
        </ListItem>
      </NavList>
      <AccountNavbarIcon matches={matches} />
    </NavbarContainer>
  );
}
