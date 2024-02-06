import { Button, styled } from "@mui/material";
import { Colors } from "../theme";

export const WideButtonLined = styled(Button)(() => ({
  color: Colors.black,
  border: `1px solid black`,
  height: "50px",
  textTransform: "inherit",
  marginBottom: "16px",
  width: "100%",
  "&:hover": {
    backgroundColor: Colors.primary,
    boxShadow: "none",
    color: Colors.white,
  },
}));

export const WideButtonOutLined = styled(Button)(() => ({
  color: Colors.white,
  height: "50px",
  textTransform: "inherit",
  marginBottom: "16px",
  width: "100%",
  "&:hover": {
    backgroundColor: Colors.primary,
    color: Colors.white,
    transform: `translate(calc(1px)* -1))`,
    boxShadow: `0px 0px 12px #32274414,0px 0px 1px #32274452,0px 8px 16px -8px #322744cc`,
  },
}));
