import { Box, Button, Link, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  PromotionContentArea,
  PromotionColumnA,
  PromotionTitle,
  PromotionsContainer,
  PromotionDescription,
  PromotionImage,
} from "../../../styles/promotions";
import { Colors } from "../../../styles/theme";

export default function RegAndLoginBanner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ paddingBottom: "72px" }}>
      <Box
        sx={{
          backgroundColor: "#EBE8FC",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            columnGap: "24px",
            flexWrap: "nowrap",
            rowGap: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: "1 1",
              columnGap: "16px",
              alignItems: "start",
            }}
          >
            <PromotionImage
              sx={{
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                objectFit: "cover",
              }}
              src="/images/banner/IMG_4331.JPG"
            ></PromotionImage>
          </Box>

          <PromotionColumnA>
            <Box
              sx={{
                padding: "24px",
                display: "flex",
                rowGap: "16px",
                flexDirection: "column",
              }}
            >
              <PromotionTitle sx={{ fontSize: "24px", lineHeight: 1 }}>
                Join the millions who know the worth of a property
              </PromotionTitle>
              <PromotionDescription>
                With Zoollar, we care about presentation. You have an amazing
                property and it should be presented in a beautiful way. Get
                expert tips on how to make the most out of your property.
              </PromotionDescription>
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    color: Colors.white,
                    backgroundColor: Colors.primary,
                    border: `1px solid black`,
                    marginRight: "50px",
                    height: "50px",
                    width: "150px",
                    "&:hover": {
                      boxShadow: "none",
                      backgroundColor: Colors.primary,
                    },
                  }}
                >
                  Register
                </Button>
                <Link
                  variant="outlined"
                  sx={{
                    display: "inline-grid",
                    gridTemplateColumns: `auto minmax(min-content, 1fr)`,
                    fontWeight: "600",
                    textDecoration: "underline",
                    textUnderlineOffset: "2px",
                    textDecorationThickness: "1px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    color: "black",
                    textDecorationColor: "#8046f1",
                    transitionProperty: `1px, #8046f1`,
                    transitionDuration: "0.16s",
                    transitionTimingFunction: `0.3, 0, 0.8, 1`,
                    ":hover": {
                      cursor: "pointer",
                      textDecorationThickness: "2px",
                      textDecorationColor: Colors.primary,
                    },
                    ":visited": { color: "#595963" },
                  }}
                >
                  Sign in
                </Link>
              </Box>
            </Box>
          </PromotionColumnA>
        </Box>
      </Box>
    </Box>
  );
}
