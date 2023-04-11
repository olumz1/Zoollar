import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Promotion() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
}
