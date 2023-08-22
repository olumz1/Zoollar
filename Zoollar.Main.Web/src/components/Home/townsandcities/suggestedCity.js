import { Box, Link, SvgIcon, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SuggestedCity } from "../../../styles/townsandcities";
import { Colors } from "../../../styles/theme";

export default function CitiesAndTowns(city) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <SuggestedCity>
      <Link
        sx={{
          display: "inline-grid",
          alignItems: "baseline",
          columnGap: "8px",
          rowGap: "4px",
          gridTemplateColumns: `auto minmax(min-content, 1fr)`,
          fontWeight: "600",
          borderRadius: "2px",
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
        <Box
          sx={{
            alignSelf: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignContent: "normal",
            alignItems: "normal",
            padding: "0",
            boxSizing: "border-box",
          }}
        >
          <SvgIcon
            sx={{
              fill: "#322744",
              height: "16px",
              width: "16px",
              fillRule: "evenodd",
              ":after": { boxSizing: "border-box" },
              ":before": { boxSizing: "border-box" },
              ":root": {
                ":not": {
                  overflowClipMargin: "content-box",
                  overflow: "hidden",
                },
              },
            }}
          >
            <path
              fill="1.1em"
              d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
S1.293,9.212,1.729,9.212z"
            ></path>
          </SvgIcon>
        </Box>
        <Box sx={{ gridRowStart: "0" }}>{city.city} properties for sale</Box>
      </Link>
    </SuggestedCity>
  );
}
