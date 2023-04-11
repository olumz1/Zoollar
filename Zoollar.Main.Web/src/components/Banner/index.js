import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSearchBox,
  BannerTitle,
} from "../../styles/banner";
import { Colors } from "../../styles/theme";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer src="/images/banner/Banner_lw.JPG">
      <BannerContent>
        <BannerTitle variant="h3">
          Nigeria's Detailed Property Search
        </BannerTitle>
        <BannerDescription>
          Search properties for sale and to rent in Nigeria
        </BannerDescription>
        <BannerSearchBox
          sx={{
            inputRoot: {
              borderRadius: "0px",
            },
          }}
        ></BannerSearchBox>
        <Button
          variant="contained"
          color="primary"
          sx={{
            float: "left",
            position: "absolute",
            top: "39%",
            left: "53%",
            height: "50px",
            margin: "140px 0px 0px 130px",
            color: Colors.white,
          }}
        >
          For Sale
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            float: "left",
            position: "absolute",
            top: "39%",
            left: "60%",
            height: "50px",
            margin: "140px 0px 0px 130px",
            color: Colors.white,
          }}
        >
          To Rent
        </Button>
      </BannerContent>
    </BannerContainer>
  );
}
