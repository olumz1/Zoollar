import { Button, useMediaQuery } from "@mui/material";
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

export default function Promotion() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PromotionsContainer>
      <PromotionContentArea>
        <PromotionColumnA>
          <PromotionTitle>Value your property</PromotionTitle>
          <PromotionDescription>
            Get an instant online valuation to see what it's worth.
          </PromotionDescription>
          <Button
            variant="outlined"
            sx={{
              color: Colors.black,
              border: `1px solid black`,
              height: "50px",
              "&:hover": {
                backgroundColor: Colors.primary,
                boxShadow: "none",
                color: Colors.white,
              },
            }}
          >
            Get an instant valuation
          </Button>
        </PromotionColumnA>
        <PromotionImage src="/images/banner/IMG_4331.JPG"></PromotionImage>
      </PromotionContentArea>
    </PromotionsContainer>
  );
}
