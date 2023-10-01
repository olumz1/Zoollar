import { Box, Button, List, ListItem, SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropertyDetailsSwiper from "./PropertyDetailsSwiper";
import { properties } from "../../data/property";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import formatter from "../common/CurrencyFormatter";
import { Colors } from "../../styles/theme";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import {
  PropertyDetailsFeature,
  PropertyDetailsFeatureButton,
  PropertyDetailsFeatureDivider,
} from "../../styles/propertydetails";
import SvgMortgageSvgrepoCom from "../../iconComponent/mortgagePaymentIcon";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import PointOfInterest from "./PointOfInterest";
import { useRef, useState } from "react";
import "./propertyDetails.css";
import ReadMoreReact from "read-more-react";
import Mortgage from "./mortgage";
import FullScreenDialog from "./FullScreenDialog";
import MailLockOutlinedIcon from "@mui/icons-material/MailLockOutlined";
import EastIcon from "@mui/icons-material/East";
import { WideButtonLined, WideButtonOutLined } from "../../styles/button";
import SimilarProperties from "./SimilarProperties";
import getPropertyAddress from "../common/GetPropertyAddress";
import Disclaimer from "./Disclaimer";
import RenderIcon from "../../iconComponent/renderIcon";

function PropertyDetail(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const propertyId = props.propertyId;
  const property = properties.find((property) => property.id === propertyId);
  const [state, setstate] = useState(false);
  const [open, setOpen] = useState(false);
  const [tabNo, setTabNo] = useState(1);
  const ref = useRef(null);

  const handleClickOpen = (tabNo) => {
    setTabNo(tabNo);
    setOpen(true);
  };

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isEnabled = state;

  return (
    <main style={{ display: "block", boxSizing: "border-box" }}>
      <Box sx={{ maxWidth: "1300px", margin: "auto auto 24px auto" }}>
        <Box sx={{ padding: "0 16px", display: "block", height: "100%" }}>
          <Box sx={{ boxSizing: "border-box" }}>
            <Link
              style={{
                height: "48px",
                transitionDuration: "0.16s",
                transitionTimingFunction: "cubic-bezier(0.3,0,0.8,1)",
                paddingLeft: "0",
                paddingRight: "0",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
                textDecorationColor: "#8046f1",
                textDecorationThickness: "1px",
                display: "flex",
                alignItems: "center",
                fontWeight: 600,
                border: "none",
                borderRadius: "4px",
                textAlign: "center",
                fontSize: "16px",
                lineHeight: "24px",
                cursor: "pointer",
                "&:hover": {
                  cursor: "pointer",
                  textDecorationThickness: "2px",
                  textDecorationColor: Colors.primary,
                },
              }}
              to={-1}
            >
              <SvgIcon
                sx={{
                  overflow: "hidden",
                  height: "24px",
                  width: "24px",
                  fill: "currentColor",
                  marginRight: "8px",
                }}
              >
                <path d="M4.20706 11.5L10.3535 5.35353L9.6464 4.64642L2.29285 12L9.6464 19.3535L10.3535 18.6464L4.20706 12.5L21 12.5V11.5L4.20706 11.5Z"></path>
              </SvgIcon>
              <span>Back to search results</span>
            </Link>
          </Box>
          <article style={{ boxSizing: "border-box" }}>
            <Box sx={{ padding: "0 16px", position: "relative" }}>
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
                    gridTemplateRows: "1fr 50%",
                    gridTemplateAreas: `"photoOne photoTwo" "photoOne photoThree"`,
                    gridTemplateColumns: "1fr",
                    border: "solid 0px #fff",
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
                      gridArea: "photoOne",
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
                          background: "#fff",
                          position: "relative",
                          height: " 100%",
                        }}
                      >
                        <PropertyDetailsSwiper
                          propertyImages={property?.propertyData?.propertyImage}
                          handleClickOpen={handleClickOpen}
                        ></PropertyDetailsSwiper>
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </article>
          <Box
            sx={{ padding: "0 16px", display: "flex", overflowAnchor: "none" }}
          >
            <Box
              sx={{
                width: "calc(100% - 383px)",
                padding: "24px 24px 0px 0px",
                flex: "1 1 auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  margin: "0 0 8px 0",
                }}
              >
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <Box sx={{ display: "flex", paddingBottom: "4px" }}>
                    <SvgIcon
                      sx={{
                        fill: "#fff",
                        height: "24px",
                        width: "24px",
                        fillRule: "evenodd",
                        padding: "0 0px",
                        marginLeft: "-5px",
                      }}
                    >
                      <LocationOnOutlinedIcon />
                    </SvgIcon>
                    <h1
                      style={{
                        fontSize: "20px",
                        fontWeight: "normal",
                        margin: "0",
                        lineHeight: "24px",
                      }}
                    >
                      {getPropertyAddress(
                        property.propertyData.propertyDetails.address
                      )}
                    </h1>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      border: "none",
                      padding: "0 10px",
                      cursor: "pointer",
                      height: "100%",
                      backgroundColor: "#fff",
                      color: "#322744",
                      fontSize: "16px",
                      fontWeight: "normal",
                      letterSpacing: "normal",
                      margin: "0",
                      textRendering: "optimizeSpeed",
                      pointerEvents: "none",
                    }}
                  >
                    <SvgIcon
                      sx={{
                        height: "24px",
                        width: "24px",
                        fillRule: "evenodd",
                        overflow: "hidden",
                      }}
                    >
                      <ShareOutlinedIcon />
                    </SvgIcon>
                  </Button>
                  <Box
                    sx={{
                      backgroundColor: "#dedee2",
                      height: "24px",
                      width: "1px",
                      margin: "0 8px",
                    }}
                  ></Box>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "none",
                      padding: "0 10px",
                      cursor: "pointer",
                      height: "100%",
                      backgroundColor: "#fff",
                      color: "#322744",
                      fontSize: "16px",
                      fontWeight: "normal",
                      letterSpacing: "normal",
                      margin: "0",
                      textRendering: "optimizeSpeed",
                      pointerEvents: "none",
                    }}
                  >
                    <SvgIcon
                      sx={{
                        height: "24px",
                        width: "24px",
                        fillRule: "evenodd",
                        overflow: "hidden",
                      }}
                    >
                      <FavoriteBorderOutlinedIcon />
                    </SvgIcon>
                  </Button>
                </Box>
              </Box>
              <article
                style={{ position: "relative", boxSizing: "border-box" }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <Box sx={{ paddingBottom: "6px" }}>
                    <Box sx={{ marginBottom: "6px", padding: "0" }}>
                      <p
                        style={{
                          fw: 600,
                          color: "#322744",
                          fontSize: "16px",
                          lineHeight: "22px",
                          marginBottom: "calc(0px)",
                          padding: 0,
                        }}
                      >
                        Asking price
                      </p>
                      <p
                        style={{
                          fw: 600,
                          color: "#322744",
                          fontSize: "24px",
                          lineHeight: "30px",
                        }}
                      >
                        {formatter(property.propertyData.propertyPayment.price)}
                      </p>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "auto",
                      }}
                    >
                      <Button
                        variant="outlined"
                        onClick={() => handleClick()}
                        sx={{
                          fontSize: "14px",
                          display: "flex",
                          lineHeight: "24px",
                          alignItems: "center",
                          border: "none",
                          color: Colors.primary,
                          textAlign: "left",
                          textTransform: "capitalize",
                          padding: 0,
                          "&:hover": {
                            textDecoration: "underline",
                            border: "none",
                          },
                        }}
                      >
                        <SvgIcon
                          sx={{
                            height: "24px",
                            width: "24px",
                            marginRight: "8px",
                            fillRule: "evenodd",
                            overflow: "hidden",
                          }}
                        >
                          <SvgMortgageSvgrepoCom width={24} height={24} />
                        </SvgIcon>
                        See payment plan options
                      </Button>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column-reverse",
                          alignItems: "flex-end",
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "14px",
                            lineHeight: "22px",
                            textAlign: "left",
                          }}
                        >
                          Listed on {property.propertyData.createdDate}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </article>
              <Box
                sx={{
                  marginTop: "16px",
                  boxSizing: "border-box",
                  paddingBottom: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    whiteSpace: "nowrap",
                    margin: "0",
                    ":before": {
                      width: "100%",
                      borderTopStyle: "solid",
                      borderTopWidth: "1px",
                      content: '""',
                      position: "relative",
                      borderColor: "#3227443d",
                      boxSizing: "border-box",
                    },
                    ":after": {
                      content: '""',
                      position: "relative",
                      borderColor: "#3227443d",
                      boxSizing: "border-box",
                    },
                  }}
                ></Box>
              </Box>
              <article style={{ display: "block", paddingBottom: "16px" }}>
                <Box
                  sx={{
                    display: "flex",
                    columnGap: "16px",
                    paddingBottom: "24px",
                    padding: "0",
                    boxSizing: "border-box",
                  }}
                >
                  <PropertyDetailsFeature>
                    <dl
                      style={{
                        flex: "0 0 25%",
                        padding: "8px 16px 8px 0",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        margin: "0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          height: "22px",
                          marginTop: "-5px",
                          textDecoration: "none",
                        }}
                      >
                        <dt
                          style={{
                            color: "#6c6d7f",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "1px",
                          }}
                        >
                          Property Type
                        </dt>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          columnGap: "8px",
                          padding: "0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                            boxSizing: "border-box",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "currentcolor",
                              height: "24px",
                              width: "24px",
                              fillRule: "evenodd",
                              padding: "0",
                            }}
                          >
                            <BedOutlinedIcon />
                          </SvgIcon>
                        </Box>
                        <Box>
                          <span>{property.propertyData.propertyType}</span>
                        </Box>
                      </Box>
                    </dl>
                  </PropertyDetailsFeature>
                  <Box>
                    <PropertyDetailsFeatureDivider />
                  </Box>
                  <PropertyDetailsFeature>
                    <dl
                      style={{
                        flex: "0 0 25%",
                        padding: "8px 16px 8px 0",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        margin: "0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          height: "22px",
                          marginTop: "-5px",
                          textDecoration: "none",
                        }}
                      >
                        <dt
                          style={{
                            color: "#6c6d7f",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "1px",
                          }}
                        >
                          Bedrooms
                        </dt>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          columnGap: "8px",
                          padding: "0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                            boxSizing: "border-box",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "currentcolor",
                              height: "24px",
                              width: "24px",
                              fillRule: "evenodd",
                              padding: "0",
                            }}
                          >
                            <BedOutlinedIcon />
                          </SvgIcon>
                        </Box>
                        <Box>
                          <span>
                            x {property.propertyData.propertyDetails.noOfBeds}
                          </span>
                        </Box>
                      </Box>
                    </dl>
                  </PropertyDetailsFeature>

                  <Box>
                    <PropertyDetailsFeatureDivider />
                  </Box>
                  <PropertyDetailsFeature>
                    <dl
                      style={{
                        flex: "0 0 25%",
                        padding: "8px 16px 8px 0",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        margin: "0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          height: "22px",
                          marginTop: "-5px",
                          textDecoration: "none",
                        }}
                      >
                        <dt
                          style={{
                            color: "#6c6d7f",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "1px",
                          }}
                        >
                          Bathrooms
                        </dt>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          columnGap: "8px",
                          padding: "0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                            boxSizing: "border-box",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "currentcolor",
                              height: "24px",
                              width: "24px",
                              fillRule: "evenodd",
                              padding: "0",
                            }}
                          >
                            <BathtubOutlinedIcon />
                          </SvgIcon>
                        </Box>
                        <Box>
                          <span>
                            x{" "}
                            {
                              property.propertyData.propertyDetails
                                .noOfBathrooms
                            }
                          </span>
                        </Box>
                      </Box>
                    </dl>
                  </PropertyDetailsFeature>
                  <Box>
                    <PropertyDetailsFeatureDivider />
                  </Box>
                  <PropertyDetailsFeature>
                    <dl
                      style={{
                        flex: "0 0 25%",
                        padding: "8px 16px 8px 0",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        margin: "0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          height: "22px",
                          marginTop: "-5px",
                          textDecoration: "none",
                        }}
                      >
                        <dt
                          style={{
                            color: "#6c6d7f",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "1px",
                          }}
                        >
                          Living rooms
                        </dt>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          columnGap: "8px",
                          padding: "0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                            boxSizing: "border-box",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "currentcolor",
                              height: "24px",
                              width: "24px",
                              fillRule: "evenodd",
                              padding: "0",
                            }}
                          >
                            <ChairOutlinedIcon />
                          </SvgIcon>
                        </Box>
                        <Box>
                          <span>
                            x{" "}
                            {
                              property.propertyData.propertyDetails
                                .noOfReceptions
                            }
                          </span>
                        </Box>
                      </Box>
                    </dl>
                  </PropertyDetailsFeature>
                  <Box>
                    <PropertyDetailsFeatureDivider />
                  </Box>
                  <PropertyDetailsFeature>
                    <dl
                      style={{
                        flex: "0 0 25%",
                        padding: "8px 16px 8px 0",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        margin: "0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          height: "22px",
                          marginTop: "-5px",
                          textDecoration: "none",
                        }}
                      >
                        <dt
                          style={{
                            color: "#6c6d7f",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "1px",
                          }}
                        >
                          Property Size
                        </dt>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          columnGap: "8px",
                          padding: "0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                            boxSizing: "border-box",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "currentcolor",
                              height: "24px",
                              width: "24px",
                              fillRule: "evenodd",
                              padding: "0",
                            }}
                          >
                            <BedOutlinedIcon />
                          </SvgIcon>
                        </Box>
                        <Box>
                          <span>500 sqm</span>
                        </Box>
                      </Box>
                    </dl>
                  </PropertyDetailsFeature>
                </Box>
              </article>
              <Box
                sx={{
                  marginTop: "16px",
                  boxSizing: "border-box",
                  paddingBottom: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    whiteSpace: "nowrap",
                    margin: "0",
                    ":before": {
                      width: "100%",
                      borderTopStyle: "solid",
                      borderTopWidth: "1px",
                      content: '""',
                      position: "relative",
                      borderColor: "#3227443d",
                      boxSizing: "border-box",
                    },
                    ":after": {
                      content: '""',
                      position: "relative",
                      borderColor: "#3227443d",
                      boxSizing: "border-box",
                    },
                  }}
                ></Box>
              </Box>
              <article style={{ display: "block", paddingBottom: "16px" }}>
                <Box
                  sx={{
                    display: "flex",
                    columnGap: "16px",
                    paddingBottom: "24px",
                    padding: "0",
                    boxSizing: "border-box",
                  }}
                >
                  <PropertyDetailsFeatureButton
                    onClick={() => handleClickOpen(2)}
                  >
                    <dl
                      style={{
                        flex: "0 0 25%",
                        padding: "8px 16px 8px 0",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        margin: "0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          columnGap: "8px",
                          padding: "0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                            boxSizing: "border-box",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "currentcolor",
                              height: "24px",
                              width: "24px",
                              fillRule: "evenodd",
                              padding: "0",
                            }}
                          >
                            <BedOutlinedIcon />
                          </SvgIcon>
                        </Box>
                        <Box>
                          <span>Floor Plan</span>
                        </Box>
                      </Box>
                    </dl>
                  </PropertyDetailsFeatureButton>
                  <Box>
                    <PropertyDetailsFeatureDivider />
                  </Box>
                  <PropertyDetailsFeatureButton
                    onClick={() => handleClickOpen(3)}
                  >
                    <dl
                      style={{
                        flex: "0 0 25%",
                        padding: "8px 16px 8px 0",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        margin: "0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          columnGap: "8px",
                          padding: "0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                            boxSizing: "border-box",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "currentcolor",
                              height: "24px",
                              width: "24px",
                              fillRule: "evenodd",
                              padding: "0",
                            }}
                          >
                            <BedOutlinedIcon />
                          </SvgIcon>
                        </Box>
                        <Box>
                          <span>Virtual tour</span>
                        </Box>
                      </Box>
                    </dl>
                  </PropertyDetailsFeatureButton>
                  <Box>
                    <PropertyDetailsFeatureDivider />
                  </Box>
                  <PropertyDetailsFeatureButton
                    onClick={() => handleClickOpen(4)}
                  >
                    <dl
                      style={{
                        flex: "0 0 25%",
                        padding: "8px 16px 8px 0",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        margin: "0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          columnGap: "8px",
                          padding: "0",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                            boxSizing: "border-box",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "currentcolor",
                              height: "24px",
                              width: "24px",
                              fillRule: "evenodd",
                              padding: "0",
                            }}
                          >
                            <SlideshowOutlinedIcon />
                          </SvgIcon>
                        </Box>
                        <Box>
                          <span>Video</span>
                        </Box>
                      </Box>
                    </dl>
                  </PropertyDetailsFeatureButton>
                  <Box>
                    <PropertyDetailsFeatureDivider />
                  </Box>
                  <FullScreenDialog
                    handleClickOpen={handleClickOpen}
                    open={open}
                    handleClose={handleClose}
                    propertyImages={property?.propertyData?.propertyImage}
                    virtualLink={property?.propertyData?.propertyVirtualLink}
                    setTabNo={tabNo}
                  ></FullScreenDialog>
                </Box>
              </article>
              <Box
                sx={{
                  marginTop: "16px",
                  boxSizing: "border-box",
                  paddingBottom: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    whiteSpace: "nowrap",
                    margin: "0",
                    ":before": {
                      width: "100%",
                      borderTopStyle: "solid",
                      borderTopWidth: "1px",
                      content: '""',
                      position: "relative",
                      borderColor: "#3227443d",
                      boxSizing: "border-box",
                    },
                    ":after": {
                      content: '""',
                      position: "relative",
                      borderColor: "#3227443d",
                      boxSizing: "border-box",
                    },
                  }}
                ></Box>
              </Box>
              <article>
                <Box
                  style={{
                    margin: "0px",
                    padding: "0px",
                    outline: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  <h2
                    style={{
                      marginBottom: "24px",
                      color: "#322744",
                      fontWeight: "600",
                      fontSize: "22px",
                      lineHeight: "32px",
                    }}
                  >
                    Points of interest
                  </h2>
                  <Box
                    sx={{
                      marginBottom: "28px",
                      background: "#f3f2f2",
                      padding: "0 12px",
                      display: "inline-flex",
                      alignItems: "center",
                      flexFlow: "row wrap",
                    }}
                  >
                    <List
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexFlow: "row wrap",
                        listStyle: "none",
                      }}
                    >
                      <li>
                        <Button
                          sx={{
                            padding: "12px 0 13px 0",
                            color: "#1a1a1a",
                            fontSize: "16px",
                            marginRight: "18px",
                            cursor: "pointer",
                            "&:hover": {
                              textDecoration: "underline",
                              backgroundColor: "#f3f2f2",
                            },
                          }}
                          onClick={() => setstate(false)}
                        >
                          Map
                        </Button>
                      </li>
                      <li>
                        <Button
                          sx={{
                            padding: "12px 0 13px 0",
                            color: "#1a1a1a",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": {
                              textDecoration: "underline",
                              backgroundColor: "#f3f2f2",
                            },
                          }}
                          onClick={() => setstate(true)}
                        >
                          3D
                        </Button>
                      </li>
                    </List>
                  </Box>
                  <Box
                    sx={{
                      margin: "0px",
                      padding: "0px",
                      outline: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Box
                      sx={{
                        display: "block",
                        marginBottom: "40px",
                        position: "relative",
                      }}
                    >
                      <PointOfInterest isEnabled={isEnabled} />
                    </Box>
                  </Box>
                </Box>
              </article>
              <Box
                sx={{
                  marginTop: "16px",
                  boxSizing: "border-box",
                  paddingBottom: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    whiteSpace: "nowrap",
                    margin: "0",
                    ":before": {
                      width: "100%",
                      borderTopStyle: "solid",
                      borderTopWidth: "1px",
                      content: '""',
                      position: "relative",
                      borderColor: "#3227443d",
                      boxSizing: "border-box",
                    },
                    ":after": {
                      content: '""',
                      position: "relative",
                      borderColor: "#3227443d",
                      boxSizing: "border-box",
                    },
                  }}
                ></Box>
              </Box>
              <article>
                <Box
                  style={{
                    margin: "0px",
                    padding: "0px",
                    outline: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  <h2
                    style={{
                      marginBottom: "8px",
                      color: "#322744",
                      fontWeight: "600",
                      fontSize: "22px",
                      lineHeight: "32px",
                    }}
                  >
                    Property Features
                  </h2>
                  <Box sx={{ paddingLeft: "8px", paddingTop: "0px" }}>
                    <Box className="row">
                      <div className="column">
                        <h3>Internal</h3>
                        <List
                          sx={{
                            listStyle: "none",
                            margin: "0",
                            paddingInlineStart: "0",
                            display: "flex",
                            flexFlow: "column",
                          }}
                        >
                          {property.propertyData.propertyFeatures.Internal.map(
                            (feature, index) => (
                              <ListItem
                                style={{
                                  display: "flex",
                                  paddingLeft: "0px",
                                }}
                                className="propertyFeature"
                                key={index}
                              >
                                <SvgIcon
                                  sx={{
                                    overflow: "hidden",
                                    fill: "#4f5064",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "8px",
                                    position: "relative",
                                  }}
                                >
                                  <RenderIcon icon={feature} />
                                </SvgIcon>
                                <span>{feature}</span>
                              </ListItem>
                            )
                          )}
                        </List>
                      </div>

                      <div className="column">
                        <h3>External</h3>
                        <List
                          sx={{
                            listStyle: "none",
                            margin: "0",
                            paddingInlineStart: "0",
                            display: "flex",
                            flexFlow: "column",
                          }}
                        >
                          {property.propertyData.propertyFeatures.External.map(
                            (feature, index) => (
                              <ListItem
                                style={{
                                  display: "flex",
                                  paddingLeft: "0px",
                                }}
                                className="propertyFeature"
                                key={index}
                              >
                                <span>{feature}</span>
                              </ListItem>
                            )
                          )}
                        </List>
                      </div>
                      <div className="column">
                        <h3>Entertainment</h3>
                        <List
                          sx={{
                            listStyle: "none",
                            margin: "0",
                            paddingInlineStart: "0",
                            display: "flex",
                            flexFlow: "column",
                          }}
                        >
                          {property.propertyData.propertyFeatures.Entertainment.map(
                            (feature, index) => (
                              <ListItem
                                style={{
                                  display: "flex",
                                  paddingLeft: "0px",
                                }}
                                className="propertyFeature"
                                key={index}
                              >
                                <span>{feature}</span>
                              </ListItem>
                            )
                          )}
                        </List>
                      </div>
                    </Box>
                    <Box sx={{ marginTop: "16px" }}>
                      <Box sx={{ overflowAnchor: "none" }}>
                        <Box
                          sx={{
                            maxHeight: "200px",
                            lineHeight: "24px",
                            transition: "max-height ease .25s",
                            overflow: "hidden",
                            ":-webkit-mask-image":
                              "linear-gradient(to bottom, black 150px, transparent 100%)",
                          }}
                        >
                          <Box>{property.propertyData.description}</Box>
                        </Box>
                        <button
                          style={{
                            position: "absolute",
                            bottom: "28px",
                            cursor: "pointer",
                            backgroundColor: "rgba(0,0,0,0)",
                            border: "none",
                            height: "60px",
                            width: "100%",
                            outline: "none",
                          }}
                          tabIndex={"-1"}
                          aria-hidden="true"
                          title="Read more"
                        ></button>
                        <button
                          style={{
                            lineHeight: "20px",
                            color: Colors.primary,
                            cursor: "pointer",
                            backgroundColor: "rgba(0,0,0,0)",
                            border: "none",
                            margin: "12px 0 8px 0",
                            width: "100%",
                            textAlign: "left",
                            fontSize: "16px",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            ":-webkit-font-smoothing": "antialiased",
                          }}
                        >
                          Read more
                        </button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </article>
              <Box
                sx={{
                  marginTop: "16px",
                  boxSizing: "border-box",
                  paddingBottom: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    whiteSpace: "nowrap",
                    margin: "0",
                    ":before": {
                      width: "100%",
                      borderTopStyle: "solid",
                      borderTopWidth: "1px",
                      content: '""',
                      position: "relative",
                      borderColor: "#3227443d",
                      boxSizing: "border-box",
                    },
                    ":after": {
                      content: '""',
                      position: "relative",
                      borderColor: "#3227443d",
                      boxSizing: "border-box",
                    },
                  }}
                ></Box>
              </Box>
              <article ref={ref}>
                <Mortgage
                  propertyPrice={property.propertyData.propertyPayment}
                  loanCompanies={property.propertyData.loanCompanies}
                />
                <Box
                  sx={{
                    margin: "4px 0px 32px",
                    border: `1px solid #d1d0cf`,
                    borderRadius: "8px",
                  }}
                >
                  <header style={{ padding: "24px 16px 0px" }}>
                    <h2
                      style={{
                        color: "#322744",
                        fontWeight: "600",
                        fontSize: "22px",
                        lineHeight: "32px",
                      }}
                    >
                      Internet speed
                    </h2>
                  </header>
                  <Box sx={{ padding: "14px" }}>
                    <Box
                      sx={{
                        rowGap: 0,
                        display: "grid",
                        columnGap: "12px",
                        gridTemplateColumns: "4rem auto",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          gridColumn: 2,
                          gridRow: 1,
                          color: "#32744",
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                      >
                        Maximum download speed available at this property:
                      </p>
                      <img
                        style={{
                          gridColumn: 1,
                          gridRow: "1/span 2",
                          maxWidth: "100%",
                          display: "block",
                        }}
                        src="/images/mortgage/internetSpeedIcon.jpg"
                        alt="glo Logo"
                      ></img>
                      <Box
                        sx={{
                          gridColumn: 2,
                          gridRow: "2",
                          fontWeight: "600",
                          fontSize: "28px",
                          lineHeight: "40px",
                        }}
                      >
                        45Mbps
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        margin: 0,
                        "&:before": {
                          width: "100%",
                          borderTopStyle: "solid",
                          borderTopWidth: "1px",
                          content: '""',
                          position: "relative",
                          borderColor: "#3227443d",
                        },
                        "&:after": {
                          width: "100%",
                          borderTopStyle: "solid",
                          borderTopWidth: "1px",
                          content: '""',
                          position: "relative",
                          borderColor: "#3227443d",
                        },
                      }}
                    ></Box>
                    <Box sx={{ color: "#595963", padding: "16px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          textAlign: "left",
                          alignItems: "center",
                        }}
                      >
                        <WideButtonLined
                          variant="Outlined"
                          sx={{ width: "inherit", marginBottom: "0px" }}
                        >
                          Choose your internet deal
                        </WideButtonLined>
                        <Box sx={{ marginTop: "0" }}>
                          Working with
                          <Box
                            sx={{
                              display: "inline-block",
                              marginLeft: "8px",
                              verticalAlign: "middle",
                            }}
                          >
                            <a
                              href="https://www.gloworld.com/ng"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                srcSet="/images/mortgage/gloLogo.jpg"
                                alt="Globacom"
                                style={{ width: "60px", height: "60px" }}
                              ></img>
                            </a>
                          </Box>
                        </Box>
                      </Box>
                      <p style={{ marginTop: "4px", lineHeight: "16px" }}>
                        <small
                          style={{
                            color: "#322744",
                            fontSize: "12px",
                            lineHeight: "16px",
                          }}
                        >
                          Ts & Cs apply. To see full range of packages available
                          at this property, please click the above link.
                        </small>
                      </p>
                    </Box>
                  </Box>
                </Box>
              </article>
            </Box>
            <aside
              style={{
                width: "383px",
                display: "block",
                flex: "0 0 auto",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  width: "inherit",
                  willChange: "min-height",
                  position: "sticky",
                  top: 0,
                  height: "585px",
                }}
              >
                <Box
                  style={{
                    position: "relative",
                    transform: "translate3d(0px, 0px, 0px)",
                    padding: "24px 0",
                    willChange: "position, transform",
                  }}
                >
                  <Box
                    sx={{
                      background: "#fff",
                      position: "fixed",
                      zIndex: "1",
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "transform ease-out .2s",
                      willChange: "transform",
                    }}
                  >
                    <Box
                      sx={{
                        zIndex: 1,
                        width: "inherit",
                        backgroundColor: "#fff",
                        borderRadius: "4px",
                        boxShadow: "0 2px 16px 0 rgba(0,0,0,0.2)",
                        padding: "24px",
                        position: "relative",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "12px",
                          fontWeight: "normal",
                          color: "#6c6d7f",
                          lineHeight: "12px",
                          letterSpacing: "1px",
                        }}
                      >
                        Posted By
                      </p>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "8px",
                        }}
                      >
                        <Box>
                          <Box sx={{ color: "#000433" }}>
                            <p>Name of Estate Agent</p>
                          </Box>
                          <Box
                            sx={{
                              color: "#6c6d7f",
                              fontSize: "14px",
                              lineHeight: "17px",
                              display: "-webkit-box",
                              maxHeight: "37px",
                              textOverflow: "ellipsis",
                              "-webkit-line-clamp": 2,
                              overflow: "hidden",
                              "-webkit-box-orient": "vertical",
                              marginTop: "8px",
                              marginBottom: "16px",
                            }}
                          >
                            St Alphege Hall Kings Bench Street, London, SE1 0QX
                          </Box>
                          <a
                            className="agent-other-properties"
                            style={{
                              lineHeight: "1.625rem",
                              color: "#322744",
                              fontWeight: 600,
                              borderRadius: "4px",
                              textDecoration: "underline",
                              textDecorationColor: "#8046f1",
                              textDecorationThickness: "1px",
                              textUnderlinePosition: "under",
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "16px",
                              cursor: "pointer",
                              fontSize: "14px",
                            }}
                            href="/"
                          >
                            Agent's other properties
                            <span
                              style={{ display: "flex", marginLeft: "4px" }}
                            >
                              <SvgIcon
                                sx={{
                                  height: "16px",
                                  width: "16px",
                                  fillRule: "evenodd",
                                }}
                              >
                                <EastIcon />
                              </SvgIcon>
                            </span>
                          </a>
                        </Box>
                        <a className="agent-logo" href="/">
                          <img
                            alt="Agent Name"
                            src="https://media.rightmove.co.uk/brand/brand_logo_87308_0000.png"
                            loading="lazy"
                          ></img>
                        </a>
                      </Box>
                      <WideButtonLined variant="outlined">
                        Email agent
                      </WideButtonLined>
                      <WideButtonOutLined variant="contained">
                        Call agent
                      </WideButtonOutLined>

                      <Box>
                        <Box sx={{ maxWidth: "100%" }}>
                          <h2
                            style={{
                              marginTop: 0,
                              marginBottom: "8px",
                              color: "rgb(50, 39, 68)",
                              fontSize: "22px",
                              fontWeight: 600,
                              lineHeight: "32px",
                            }}
                          >
                            Notes
                          </h2>
                        </Box>
                        <Box
                          sx={{
                            color: "rgb(50, 39, 68)",
                            marginBottom: "16px",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "rgb(50, 39, 68)",
                              width: "16px",
                              height: "16px",
                              marginRight: "8px",
                              position: "relative",
                              top: "1px",
                            }}
                          >
                            <MailLockOutlinedIcon />
                          </SvgIcon>
                          <span style={{ fontSize: "15px" }}>
                            These notes are only visible to you.
                          </span>
                        </Box>
                        <textarea
                          style={{
                            border: "1px solid #dedee2",
                            borderRadius: "4px",
                            color: "#000433",
                            backgroundColor: "#fff",
                            resize: "none",
                            padding: "12px 16px",
                            minWidth: "233px",
                            width: "100%",
                            height: "96px",
                            marginBottom: "16px",
                          }}
                        ></textarea>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {/*TODO: grey this button out when there's no text*/}
                        <Button
                          variant="contained"
                          sx={{
                            color: Colors.white,
                            border: `2px solid #322744`,
                            height: "50px",
                            textTransform: "inherit",
                            "&:hover": {
                              backgroundColor: "#662dbe",
                              boxShadow: `0px 0px 12px #32274414,0px 0px 1px #32274452,0px 8px 16px -8px #322744cc`,
                              color: Colors.white,
                              cursor: "pointer",
                            },
                          }}
                        >
                          Save note
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </aside>
          </Box>
        </Box>
      </Box>
      <SimilarProperties relatedProperties={properties}></SimilarProperties>
      <Disclaimer
        agent={property.propertyData.propertyAgent}
        propertyId={property.id}
      ></Disclaimer>
    </main>
  );
}

export default PropertyDetail;

function DetermineSuffix(item) {
  let numberofItem = item;
  if (numberofItem > 1) {
    return "s";
  } else {
    return "";
  }
}
