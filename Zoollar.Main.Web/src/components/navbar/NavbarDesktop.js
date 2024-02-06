import { Box, ListItem, ListItemText } from "@mui/material";
import { NavList, NavbarHeader } from "../../styles/navbar";
import AccountNavbarIcon from "./accountnavbaricon";
import { Link } from "react-router-dom";

export default function NavbarDesktop({ matches }) {
  return (
    <header
      style={{
        paddingLeft: "24px",
        paddingRight: "24px",
        gridArea: "header",
        display: "flex",
        justifyContent: "center",
        boxShadow:
          "0px 0px 8px #3227440a,0px 0px 1px #32274452,0px 8px 8px -8px #32274429",
        zIndex: "700",
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ maxWidth: "1224px", flex: "1 1" }}>
        <Box
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            height: "72px",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
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
            <ListItem
              sx={{ textAlign: "center" }}
              component={Link}
              to="/property/forsale"
            >
              <ListItemText
                primaryTypographyProps={{ fontSize: "1.2rem" }}
                primary="Buy"
              />
            </ListItem>
            <ListItem
              sx={{ textAlign: "center" }}
              component={Link}
              to="/property/tolet"
            >
              <ListItemText
                primaryTypographyProps={{ fontSize: "1.2rem" }}
                primary="Rent"
              />
            </ListItem>
            <ListItem
              sx={{ textAlign: "center" }}
              component={Link}
              to="/property/forsale"
            >
              <ListItemText
                primary="Sell"
                primaryTypographyProps={{ fontSize: "1.2rem" }}
              />
            </ListItem>
            <ListItem
              sx={{ textAlign: "center" }}
              component={Link}
              to="/property/forsale"
            >
              <ListItemText
                primary="Home Loans"
                primaryTypographyProps={{ fontSize: "1.2rem" }}
              />
            </ListItem>
            <ListItem
              sx={{ textAlign: "center" }}
              component={Link}
              to="/property/forsale"
            >
              <ListItemText
                primary="Estate Agents"
                primaryTypographyProps={{ fontSize: "1.2rem" }}
              />
            </ListItem>
          </NavList>
          <AccountNavbarIcon matches={matches} />
        </Box>
      </Box>
    </header>
  );
}
