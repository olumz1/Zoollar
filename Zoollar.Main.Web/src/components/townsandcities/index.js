import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TownsAndCityContainer } from "../../styles/townsandcities";

export default function TownAndCities() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TownsAndCityContainer>
      <Box>Towns and Cities</Box>
    </TownsAndCityContainer>
  );
}
