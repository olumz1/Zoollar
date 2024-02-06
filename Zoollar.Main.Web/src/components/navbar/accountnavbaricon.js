import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/PersonOutlined";
import {
  NavList,
  AccountNavbarMobile,
  AccountNavbarDesktop,
} from "../../styles/navbar";
import LoginAndRegisterDialog from "../common/LoginAndRegisterDialog";
import { useState } from "react";

export default function AccountNavbarIcon({ matches }) {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(!loginOpen);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const Component = matches ? AccountNavbarMobile : AccountNavbarDesktop;
  return (
    <Component>
      <LoginAndRegisterDialog
        handleLoginOpen={handleLoginOpen}
        open={loginOpen}
        close={handleLoginClose}
      ></LoginAndRegisterDialog>
      <NavList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          onClick={() => handleLoginOpen()}
          sx={{
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
      </NavList>
    </Component>
  );
}
