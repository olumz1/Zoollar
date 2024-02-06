import { Box, List, Typography, styled } from "@mui/material";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(() => ({
  backgroundColor: "#EBE8FC",
  borderRadius: "10px",
  color: "#322744",
  overflow: "hidden",
}));

export const PromotionContentArea = styled(Box)(() => ({
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
  columnGap: "24px",
  flexWrap: "nowrap",
  rowGap: "0",
}));

export const PromotionColumnA = styled(Box)(() => ({
  display: "flex",
  flex: "1 1",
  columnGap: "16px",
  alignItems: "center",
}));

export const PromotionImage = styled("img")((src) => ({
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  width: "100%",
  height: "100%",
  maxHeight: "unset",
  aspectRatio: "unset",
  display: "flex",
  maxWidth: "100%",
  flexShrink: 0,
  src: `url(${src})`,
}));

export const PromotionTitle = styled(Typography)(() => ({
  fontSize: "28px",
  color: Colors.black,
  fontWeight: "420",
}));

export const PromotionDescription = styled(Typography)(() => ({
  lineHeight: 1.5,
  fontWeight: "400",
  paddingBottom: "12px",
  color: Colors.black,
}));
