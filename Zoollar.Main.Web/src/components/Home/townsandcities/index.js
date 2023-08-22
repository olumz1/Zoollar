import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  SuggestionTownAndCityPanel,
  TownAndCitiesSuggestionMiddle,
  TownAndCityGrouping,
  TownAndCitySuggestionHeader,
  TownsAndCityContainer,
  TownsAndCityContentArea,
  TownsAndCityHeader,
  ExploreTownAndCityToBuyIcon,
  TownAndCitySeparator,
} from "../../../styles/townsandcities";
import CitiesAndTowns from "./suggestedCity";

export default function TownAndCities() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TownsAndCityContainer>
      <TownsAndCityContentArea>
        <TownsAndCityHeader>Explore Towns and Cities</TownsAndCityHeader>
        <SuggestionTownAndCityPanel>
          <TownAndCityGrouping>
            <TownAndCitySuggestionHeader>
              <Box
                sx={{
                  maxWidth: "80px",
                  maxHeight: "80px",
                  marginRight: "16px",
                }}
              >
                <ExploreTownAndCityToBuyIcon src="https://cdn.prod.zoopla.co.uk/_next/static/images/landing-pages-city-14f593face43941510fb78a6dfc02e1e.svg"></ExploreTownAndCityToBuyIcon>
              </Box>
              <Box>
                <h3>In the city</h3>
                <p>Live among the hustle and bustle</p>
              </Box>
            </TownAndCitySuggestionHeader>
            <TownAndCitiesSuggestionMiddle>
              <CitiesAndTowns city="Ikeja" />
              <CitiesAndTowns city="Onitsha" />
              <CitiesAndTowns city="Ibadan" />
            </TownAndCitiesSuggestionMiddle>
            <TownAndCitiesSuggestionMiddle>
              <CitiesAndTowns city="Gwagwalada" />
              <CitiesAndTowns city="Porthacourt" />
              <CitiesAndTowns city="Benin" />
            </TownAndCitiesSuggestionMiddle>
          </TownAndCityGrouping>
          <Box
            sx={{
              paddingBottom: "48px",
              paddingTop: "48px",
            }}
          >
            <TownAndCitySeparator />
          </Box>
          <TownAndCityGrouping>
            <TownAndCitySuggestionHeader>
              <Box
                sx={{
                  maxWidth: "80px",
                  maxHeight: "80px",
                  marginRight: "16px",
                }}
              >
                <ExploreTownAndCityToBuyIcon src="https://cdn.prod.zoopla.co.uk/_next/static/images/landing-pages-city-14f593face43941510fb78a6dfc02e1e.svg"></ExploreTownAndCityToBuyIcon>
              </Box>
              <Box>
                <h3>In the countryside</h3>
                <p>Enjoy closeness to nature</p>
              </Box>
            </TownAndCitySuggestionHeader>
            <TownAndCitiesSuggestionMiddle>
              <CitiesAndTowns city="Calabar" />
              <CitiesAndTowns city="Sokoto" />
              <CitiesAndTowns city="Katsina" />
            </TownAndCitiesSuggestionMiddle>
            <TownAndCitiesSuggestionMiddle>
              <CitiesAndTowns city="Warri" />
              <CitiesAndTowns city="Uyo" />
              <CitiesAndTowns city="Zaria" />
            </TownAndCitiesSuggestionMiddle>
          </TownAndCityGrouping>
          <Box
            sx={{
              paddingBottom: "48px",
              paddingTop: "48px",
            }}
          >
            <TownAndCitySeparator />
          </Box>
          <TownAndCityGrouping>
            <TownAndCitySuggestionHeader>
              <Box
                sx={{
                  maxWidth: "80px",
                  maxHeight: "80px",
                  marginRight: "16px",
                }}
              >
                <ExploreTownAndCityToBuyIcon src="https://cdn.prod.zoopla.co.uk/_next/static/images/landing-pages-city-14f593face43941510fb78a6dfc02e1e.svg"></ExploreTownAndCityToBuyIcon>
              </Box>
              <Box>
                <h3>Luxurios locations</h3>
                <p>Love luxury and comfort</p>
              </Box>
            </TownAndCitySuggestionHeader>
            <Box
              sx={{
                paddingBottom: "48px",
                paddingTop: "48px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  margin: "0",
                }}
              ></Box>
            </Box>
            <TownAndCitiesSuggestionMiddle>
              <CitiesAndTowns city="Abeokuta" />
              <CitiesAndTowns city="Epe" />
              <CitiesAndTowns city="Nnewi" />
            </TownAndCitiesSuggestionMiddle>
            <TownAndCitiesSuggestionMiddle>
              <CitiesAndTowns city="Rivers" />
              <CitiesAndTowns city="Oyo" />
              <CitiesAndTowns city="Gwale" />
            </TownAndCitiesSuggestionMiddle>
          </TownAndCityGrouping>
          <Box
            sx={{
              paddingBottom: "48px",
              paddingTop: "48px",
            }}
          >
            <TownAndCitySeparator />
          </Box>
        </SuggestionTownAndCityPanel>
      </TownsAndCityContentArea>
    </TownsAndCityContainer>
  );
}
