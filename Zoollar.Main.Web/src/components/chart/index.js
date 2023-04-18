import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ChartContainer, ChartContentArea } from "../../styles/charts";

export default function Charts() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ChartContainer>
      <ChartContentArea>
        <h1>Zoollar properties across zones</h1>
      </ChartContentArea>
    </ChartContainer>
  );
}
