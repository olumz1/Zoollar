import { Box, Button, useMediaQuery } from "@mui/material";
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
          <Box
            sx={{
              padding: "24px",
              display: "flex",
              rowGap: "16px",
              flexDirection: "column",
            }}
          >
            <PromotionTitle>Value your property</PromotionTitle>
            <PromotionDescription>
              Get an instant online valuation to see what it's worth.
            </PromotionDescription>
            <Box
              sx={{
                display: "flex",
                rowGap: "24px",
                flexWrap: "wrap",
                columnGap: "24px",
              }}
            >
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
            </Box>
          </Box>
        </PromotionColumnA>
        <Box sx={{ display: "flex", flex: "1 1", alignItems: "flex-end" }}>
          <PromotionImage src="/images/banner/IMG_4331.JPG"></PromotionImage>
        </Box>
      </PromotionContentArea>
    </PromotionsContainer>
  );
}
