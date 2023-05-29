import { Box, SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropertySwiper from "./PropertySwiper";
import { properties } from "../../data/property";

function PropertyDetail(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const property = properties.find((x) => x.id === props);

  return (
    <main style={{ display: "block", boxSizing: "border-box" }}>
      <Box sx={{ maxWidth: "1200px", margin: "auto auto 24px auto" }}>
        <Box sx={{ padding: "0 16px", display: "block", height: "52px" }}>
          <Box sx={{ boxSizing: "border-box" }}>
            <Link
              sx={{
                height: "48px",
                transitionDuration: "0.16s",
                transitionTimingFunction: "cubic-bezier(0.3,0,0.8,1)",
                color: "#322744",
                paddingLeft: "0",
                paddingRight: "0",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
                textDecorationColor: "#8046f1",
                textDecorationThickness: "1px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                border: "none",
                borderRadius: "4px",
                textAlign: "center",
                fontSize: "16px",
                lineHeight: "24px",
                cursor: "pointer",
              }}
              to={-1}
            >
              <SvgIcon
                sx={{
                  overflow: "hidden",
                  height: "24px",
                  width: "24px",
                  fill: "currentColor",
                  marginRight: "16px",
                }}
              >
                <path d="M4.20706 11.5L10.3535 5.35353L9.6464 4.64642L2.29285 12L9.6464 19.3535L10.3535 18.6464L4.20706 12.5L21 12.5V11.5L4.20706 11.5Z"></path>
              </SvgIcon>
              <span>Back to search results</span>
            </Link>
          </Box>
          <article>
            <Box sx={{ padding: "0 16px", position: "relative" }}>
              <PropertySwiper
                propertyImages={property?.propertyData?.propertyImage}
              ></PropertySwiper>
            </Box>
          </article>
        </Box>
      </Box>
    </main>
  );
}

export default PropertyDetail;
