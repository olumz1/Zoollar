import { Button, Link, useMediaQuery } from "@mui/material";
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
    <PromotionsContainer sx={{ marginTop: "450px" }}>
      <PromotionContentArea>
        <PromotionImage
          sx={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
          src="/images/banner/IMG_4331.JPG"
        ></PromotionImage>
        <PromotionColumnA
          sx={{
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            padding: "50px 30px 50px",
          }}
        >
          <PromotionTitle sx={{ fontSize: "24px" }}>
            Join the millions who knows the worth of a property
          </PromotionTitle>
          <PromotionDescription>
            With Zoollar, we care about presentation. You have an amazing
            property and it should be presented in a beautiful way. Get expert
            tips on how to make the most out of your property.
          </PromotionDescription>
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
                backgroundColor: "#dda0dd",
                boxShadow: "none",
                color: Colors.white,
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
        </PromotionColumnA>
      </PromotionContentArea>
    </PromotionsContainer>
  );
}
