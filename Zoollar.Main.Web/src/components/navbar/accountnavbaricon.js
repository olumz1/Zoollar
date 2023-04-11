import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/PersonOutlined";
import {
  NavList,
  AccountNavbarMobile,
  AccountNavbarDesktop,
} from "../../styles/navbar";

export default function AccountNavbarIcon({ matches }) {
  const Component = matches ? AccountNavbarMobile : AccountNavbarDesktop;
  return (
    <Component>
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
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
      </NavList>
    </Component>
  );
}
