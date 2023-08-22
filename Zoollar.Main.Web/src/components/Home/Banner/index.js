import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSearchBox,
  BannerSearchContent,
  BannerTitle,
} from "../../../styles/banner";
import { Colors } from "../../../styles/theme";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer src="/images/banner/Banner_lw.JPG">
      <BannerContent>
        <Box
          sx={{
            justifySelf: "center",
            width: "680px",
            marginBottom: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              padding: "24px",
              width: "100%",
              display: "inline-block",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <BannerTitle variant="h3">
              Nigeria's Detailed Property Search
            </BannerTitle>
            <BannerDescription>
              Search properties for sale and to rent in Nigeria
            </BannerDescription>
            <Box
              sx={{
                maxWidth: "700px",
                margin: `0 auto`,
                boxSizing: "border-box",
                dispay: "block",
                alignContent: "center",
              }}
            >
              <Box
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <BannerSearchContent>
                  <BannerSearchBox placeholder="Enter a street, city or state"></BannerSearchBox>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      height: "50px",
                      width: "100px",
                      color: Colors.white,
                      transform: "translate(520%, 110%)",
                      padding: "5px 16px",
                      margin: "0px 0px 0px 10px",
                      transitionDuration: ".24s",
                      whiteSpace: "nowrap",
                      left: "-48%",
                    }}
                  >
                    For Sale
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      height: "50px",
                      width: "100px",
                      color: Colors.white,
                      transform: "translate(520%, 110%)",
                      padding: "5px 16px",
                      margin: "0px 0px 0px 10px",
                      transitionDuration: ".24s",
                      whiteSpace: "nowrap",
                      left: "-48%",
                    }}
                  >
                    To Let
                  </Button>
                </BannerSearchContent>
              </Box>
            </Box>
          </Box>
        </Box>
      </BannerContent>
    </BannerContainer>
  );
}
