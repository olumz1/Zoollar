import { Box, List, ListItem, SvgIcon } from "@mui/material";
import { Colors } from "../../styles/theme";
import SimilarPropertiesLising from "./SimilarPropertiesListing";

export default function SimilarProperties(props) {
  return (
    <article style={{ padding: "0 16px" }}>
      <Box sx={{ marginTop: "16px" }}></Box>
      <Box>
        <Box
          sx={{
            maxWidth: "1272px",
            marginLeft: `calc((100% - 1170px)/2)`,
            display: "grid",
            background: "rgba(0,0,0,0)",
            margin: "auto",
            borderTop: "1px solid #d1d0cf",
            borderBottom: "1px solid #d1d0cf",
            padding: "16px 0",
          }}
        >
          <Box
            sx={{
              color: "#000433",
              fontSize: "20px",
              paddingBottom: "16px",
            }}
          >
            <SvgIcon></SvgIcon>
            <span style={{ background: Colors.white }}>Related properties</span>
          </Box>
          <List>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                marginBottom: "16px",
              }}
            >
              <Box
                sx={{
                  touchAction: "pan-y",
                  marginLeft: "auto",
                  marginRight: "auto",
                  position: "relative",
                  overflow: "hidden",
                  listStyle: "none",
                  padding: 0,
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    transform: "translate3d(0px, 0, 0)",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    display: "flex",
                    transitionProperty: "transform",
                    boxSizing: "content-box",
                  }}
                >
                  {props.relatedProperties.slice(0, 5).map((property) => (
                    <SimilarPropertiesLising
                      property={property}
                      key={property.id}
                    ></SimilarPropertiesLising>
                  ))}
                </Box>
              </Box>
            </Box>
          </List>
        </Box>
      </Box>
    </article>
  );
}
