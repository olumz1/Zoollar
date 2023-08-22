import { Box, SvgIcon, Button, Link, List, ListItem } from "@mui/material";
import { PropertyRegularListing } from "../../styles/propertylisting";
import PropertyListSwiper from "./PropertyListSwiper";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Colors } from "../../styles/theme";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import formatter from "../common/CurrencyFormatter";

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
                    boxSizing: "border-box",
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
                        height: " 100%",
                      }}
                    >
                      <PropertyListSwiper
                        propertyImages={property?.propertyData?.propertyImage}
                        id={property.id}
                      ></PropertyListSwiper>
                    </div>
                  </Box>
                </Box>
                <Box
                  sx={{
                    gridArea: "right-top",
                    position: "relative",
                    padding: "0",
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      borderBottom: "1px solid #d1d0cf",
                      lineHeight: "0",
                      padding: "0",
                      boxSizing: "border-box",
                    }}
                  >
                    <Box
                      sx={{
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        padding: 0,
                        boxSizing: "border-box",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "#322744",
                          padding: "16px",
                          cursor: "pointer",
                          background: "#0000",
                          fw: "600",
                          textDecoration: "underline",
                          textUnderlineOffset: "6px",
                          textDecorationColor: Colors.primary,
                          textDecorationThickness: "1px",
                          fontSize: "16px",
                          lineHeight: "24px",
                          boxSizing: "border-box",
                          border: "none",
                          textTransform: "capitalize",
                          "&:hover": {
                            color: "#322744",
                            border: "0",
                            textDecoration: "underline",
                            textDecorationThickness: "2px",
                            textUnderlineOffset: "6px",
                            cursor: "pointer",
                            textDecorationColor: Colors.primary,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "0",
                            boxSizing: "border-box",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "#322744",
                              height: "24px",
                              width: "24px",
                              fillRule: "evenodd",
                            }}
                          >
                            <FavoriteBorderOutlinedIcon />
                          </SvgIcon>
                          <Box
                            sx={{
                              marginLeft: "4px",
                              padding: 0,
                              fontSize: "16px",
                              lineHeight: "24px",
                            }}
                          >
                            Save
                          </Box>
                        </Box>
                      </Button>
                    </Box>
                    <Link
                      sx={{
                        display: "block",
                        textDecoration: "none",
                        height: "100%",
                        width: "100%",
                        padding: "0",
                        boxSizing: "border-box",
                      }}
                      href={"../property/property/" + property.id}
                    >
                      <Box
                        sx={{
                          paddingRight: "16px",
                          paddingLeft: "16px",
                          paddingTop: "16px",
                          height: "100%",
                          boxSizing: "border-box",
                        }}
                      >
                        <List
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                            listStyleType: "none",
                            marginBottom: "12px",
                            marginTop: "0",
                            padding: "0",
                            boxSizing: "border-box",
                          }}
                        >
                          <ListItem sx={{ padding: 0 }}>
                            <Box
                              sx={{
                                color: "rgb(255,255,255)",
                                backgroundColor: "rgb(10,10,20,0.6)",
                                borderRadius: "999px",
                                display: "inline-block",
                                paddingLeft: "12px",
                                paddingRight: "12px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                WebkitFontSmoothing: "antialiased",
                                textTransform: "none",
                                fontWeight: 700,
                                fontSize: "12px",
                                lineHeight: "16px",
                                borderWidth: "1px",
                                textAlign: "center",
                                borderStyle: "solid",
                                height: "24px",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  textAlign: "center",
                                  height: "100%",
                                  padding: "0",
                                  boxSizing: "border-box",
                                }}
                              >
                                Fresh on Zoollar
                              </Box>
                            </Box>
                          </ListItem>
                        </List>
                        <Box sx={{ paddingBottom: "6px" }}>
                          <Box sx={{ marginBottom: "6px", padding: "0" }}>
                            <p
                              style={{
                                fw: 600,
                                color: "#322744",
                                fontSize: "16px",
                                lineHeight: "22px",
                                marginBottom: "calc(4px * -1)",
                                padding: 0,
                              }}
                            >
                              Asking price
                            </p>
                            <p
                              style={{
                                fw: 600,
                                color: "#322744",
                                fontSize: "22px",
                                lineHeight: "30px",
                              }}
                            >
                              {formatter(
                                property.propertyData.propertyPayment.price
                              )}
                            </p>
                          </Box>
                        </Box>
                        <Box sx={{ paddingBottom: "14px" }}>
                          <List
                            sx={{
                              listStyle: "none",
                              margin: 0,
                              paddingInlineStart: 0,
                              display: "flex",
                              columnGap: "16px",
                              fontSize: "14px",
                              lineHeight: "20px",
                            }}
                          >
                            <ListItem
                              sx={{
                                padding: 0,
                                display: "flex",
                                alignItems: "center",
                                columnGap: "4px",
                                color: "#322744",
                                width: "12%",
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  width: "1px",
                                  height: "1px",
                                  overflow: "hidden",
                                }}
                              >
                                Bedrooms
                              </span>
                              <SvgIcon
                                sx={{
                                  fill: "#322744",
                                  height: "24px",
                                  width: "24px",
                                  fillRule: "evenodd",
                                }}
                              >
                                <BedOutlinedIcon />
                              </SvgIcon>
                              <span>
                                {property.propertyData.propertyDetails.noOfBeds}
                              </span>
                            </ListItem>
                            <ListItem
                              sx={{
                                padding: 0,
                                display: "flex",
                                alignItems: "center",
                                columnGap: "4px",
                                color: "#322744",
                                width: "12%",
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  width: "1px",
                                  height: "1px",
                                  overflow: "hidden",
                                }}
                              >
                                Bathrooms
                              </span>
                              <SvgIcon
                                sx={{
                                  fill: "#322744",
                                  height: "24px",
                                  width: "24px",
                                  fillRule: "evenodd",
                                }}
                              >
                                <BathtubOutlinedIcon />
                              </SvgIcon>
                              <span>
                                {
                                  property.propertyData.propertyDetails
                                    .noOfBathrooms
                                }
                              </span>
                            </ListItem>
                            <ListItem
                              sx={{
                                padding: 0,
                                display: "flex",
                                alignItems: "center",
                                columnGap: "4px",
                                color: "#322744",
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  width: "1px",
                                  height: "1px",
                                  overflow: "hidden",
                                }}
                              >
                                Living rooms
                              </span>
                              <SvgIcon
                                sx={{
                                  fill: "#322744",
                                  height: "24px",
                                  width: "24px",
                                  fillRule: "evenodd",
                                }}
                              >
                                <ChairOutlinedIcon />
                              </SvgIcon>
                              <span>
                                {
                                  property.propertyData.propertyDetails
                                    .noOfReceptions
                                }
                              </span>
                            </ListItem>
                          </List>
                        </Box>
                        <Box sx={{ marginBottom: "12px", padding: "0" }}>
                          <h2
                            style={{
                              color: "#322744",
                              fontSize: "16px",
                              lineHeight: "22px",
                            }}
                          >
                            {property.propertyData.title}
                          </h2>
                          <h3
                            style={{
                              color: "#76767c",
                              fontSize: "14px",
                              lineHeight: "18px",
                            }}
                          >
                            {GetPropertyAddress(
                              property.propertyData.propertyDetails.address
                            )}
                          </h3>
                          <p
                            style={{
                              display: "block",
                              marginTop: "8px",
                              color: "#322744",
                              fontSize: "14px",
                              lineHeight: "20px",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {truncate(property.propertyData.description, 100)}
                          </p>
                        </Box>
                        <List
                          sx={{
                            listStyle: "none",
                            margin: "0",
                            paddingInlineStart: "0",
                            paddingBottom: "12px",
                            color: "#595963",
                            fontSize: "12px",
                          }}
                        >
                          <ListItem
                            sx={{
                              padding: "0",
                              display: "listItem",
                              textAlign: "-webkit-match-parent",
                            }}
                          >
                            Listed on {property.propertyData.createdDate}
                          </ListItem>
                        </List>
                      </Box>
                    </Link>
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

function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}
