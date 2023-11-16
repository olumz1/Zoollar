import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerSearchBox,
  BannerSearchContent,
  BannerTitle,
} from "../../../styles/banner";
import { Colors } from "../../../styles/theme";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        backgroundPosition: "center",
        gridColumnGap: "24px",
        paddingLeft: "24px",
        paddingRight: "24px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <BannerContent>
        <Box sx={{ gridColumn: "span 12" }}>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              padding: "9.5vw 0",
              height: "calc(20vw + 220px)",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></Box>
            <picture
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                backgroundSize: "cover",
                backgroundPosition: "50%",
                zIndex: "-1",
                overflow: "hidden",
                maxWidth: "100%",
                display: "block",
              }}
            >
              <BannerContainer src="/images/banner/Banner_lw.JPG" />
            </picture>
            <Box
              sx={{
                width: "720px",
                background: "none",
                zIndex: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <BannerTitle variant="p">
                Nigeria's Detailed Property Search
              </BannerTitle>
              <h1
                style={{
                  fontWeight: 600,
                  alignSelf: "center",
                  marginBottom: "20px",
                  paddingBottom: 0,
                  color: "#fff",
                  textShadow:
                    "0px 0px 8px #3227440a,0px 0px 1px #32274452,0px 8px 8px -8px #32274429;",
                  padding: `0 16px 8px 16px`,
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
              >
                Search properties for sale and to rent in Nigeria
              </h1>
              <Box
                sx={{
                  maxWidth: "700px",
                  margin: `0 auto`,
                  boxSizing: "border-box",
                  display: "block",
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
                        padding: "5px 16px",
                        margin: "0px 0px 0px 10px",
                        transitionDuration: ".24s",
                        whiteSpace: "nowrap",
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
                        padding: "5px 16px",
                        margin: "0px 0px 0px 10px",
                        transitionDuration: ".24s",
                        whiteSpace: "nowrap",
                      }}
                    >
                      To Let
                    </Button>
                  </BannerSearchContent>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              paddingBottom: `calc(269px + 19.95vw)`,
            }}
          ></Box>
        </Box>
      </BannerContent>
    </Box>
  );
}
