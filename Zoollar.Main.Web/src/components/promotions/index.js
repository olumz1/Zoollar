import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  PromotionContentArea,
  PromotionsContainer,
} from "../../styles/promotions";

export default function Promotion() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PromotionsContainer>
      <PromotionContentArea>
        <h1>Promotions</h1>
      </PromotionContentArea>
    </PromotionsContainer>
  );
}
