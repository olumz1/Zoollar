import { IconButton } from "@mui/material";
import { NavbarHeader } from "../../styles/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import AccountNavbarIcon from "./accountnavbaricon";

export default function NavbarMobile({ matches }) {
  return (
    <>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <NavbarHeader textAlign={"center"} variant="h4">
        Zoollar
      </NavbarHeader>
      <AccountNavbarIcon matches={matches} />
    </>
  );
}
