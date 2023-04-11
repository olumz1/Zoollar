import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import AccountNavbarIcon from "./accountnavbaricon";

export default function NavbarMobile({ matches }) {
  return (
    <NavbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <NavbarHeader textAlign={"center"} variant="h4">
        Zoollar
      </NavbarHeader>
      <AccountNavbarIcon matches={matches} />
    </NavbarContainer>
  );
}
