import { Box, Grid, CardMedia } from "@mui/material";
import { PropertyRegularListing } from "../../styles/propertylisting";
import PropertySwiper from "./PropertySwiper";

function SingleProperty({ property, matches }) {
  return (
    <PropertyRegularListing>
      <Box
        sx={{
          maxWidth: "100%",
          padding: "0",
          boxSizing: "border-box",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "contents",
              padding: "0",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                color: "#322744",
                marginBottom: "12px",
                borderRadius: "8px",
                overflow: "hidden",
                fontSize: "28px",
                lineHeight: "40px",
                padding: "0",
              }}
            >
              <Box
                sx={{
                  gridTemplateColumns: "1.7fr 1fr",
                  gridTemplateRows: "1fr 56px",
                  gridTemplateAreas: `"left-top right-top" "left-bottom right-bottom"`,
                  border: "solid 1px #d1d0cf",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  isolation: "isolate",
                  width: "100%",
                  display: "grid",
                  minHeight: "0",
                  minWidth: "0",
                  overflow: "hidden",
                  padding: "0",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{
                    gridArea: "left-top",
                    overflow: "hidden",
                    minWidth: "0",
                    padding: "0",
                    boxSizing: "0",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      padding: "0",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        background: "#e8e7e6",
                        position: "relative",
                        //paddingTop: "66.6%",
                        height: " 100%",
                      }}
                      //href="/"
                    >
                      <PropertySwiper
                        propertyImages={property?.propertyData?.propertyImage}
                      ></PropertySwiper>
                    </div>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </PropertyRegularListing>
  );
}

export default SingleProperty;

function GetPropertyAddress(address) {
  let newAdderss = `${address.addressLine}, ${address.town}, ${address.city}, ${address.state}`;
  return newAdderss;
}

function GetSrcSet(property) {
  let newSrcSet = `${property.propertyData.propertyImage[0].imageUrl}, ${property.propertyData.propertyImage[0].imageUrl}`;
  return newSrcSet;
}
