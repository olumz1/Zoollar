import {
  Grid,
  Box,
  Button,
  SvgIcon,
  CardMedia,
  List,
  ListItem,
} from "@mui/material";
import { properties } from "../../data/property";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SingleProperty from "./SingleProperty";
import {
  PropertySearchHeader,
  PropertySearchSection,
  PropertyTotalSearch,
  PropertyAsideSection,
  PropertyFeaturedListing,
  PropertyFeaturedTemplate,
} from "../../styles/propertylisting";
import SortOrder from "./SortOrder";
import UsePagination from "../common/Pagination";
import { Colors } from "../../styles/theme";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";

function PropertyListing() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <main
      style={{
        gridColumnGap: "24px",
        gridArea: "main",
        display: "grid",
        gridTemplateColumns: `repeat(12,minmax(0,1fr))`,
        gridAutoRows: "max-content",
      }}
    >
      <Box sx={{ gridColumn: "span 12" }}>
        <Box
          sx={{
            height: "6.7em",
            position: "sticky",
            top: "-0.5rem",
            zIndex: "99",
          }}
        ></Box>
        <Box sx={{ width: "100%", margin: "0 auto", backgroundColor: "#fff" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateAreas: `"main-content sidebar"`,
              gridTemplateColumns: "3fr 1fr",
              gridTemplateRows: "1fr",
              padding: "24px",
              margin: "0 auto",
              maxWidth: "calc(1200px + (2 * 32px))",
              boxSizing: "border-box",
            }}
          >
            <PropertySearchSection>
              <Box
                sx={{
                  paddingRight: "32px",
                  marginBottom: "32px",
                  marginTop: "0",
                  display: "block",
                  boxSizing: "border-box",
                }}
              >
                <PropertySearchHeader variant="h1">
                  Properties for sale in Ikoyi, Lagos
                </PropertySearchHeader>
                <Box
                  sx={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    display: "flex",
                    rowGap: "16px",
                    padding: "0",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "16px",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <PropertyTotalSearch variant="p">
                      {properties.length} results
                    </PropertyTotalSearch>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "16px",
                      justifyContent: "space-evenly",
                      boxSizing: "border-box",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        rowGap: "4px",
                        flexDirection: "row",
                        boxSizing: "border-box",
                      }}
                    >
                      <Box
                        sx={{ paddingRight: "8px", paddingTop: "12px" }}
                      ></Box>
                      <Box
                        sx={{
                          display: "flex",
                          position: "relative",
                          rowGap: "4px",
                          flexDirection: "column",
                          flex: "1 1",
                        }}
                      >
                        <SortOrder />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  paddingRight: "32px",
                  marginBottom: "24px",
                  boxSizing: "border-box",
                }}
              >
                <PropertyFeaturedListing>
                  <Box sx={{ width: "100%", padding: "0 0 8px 8px" }}>
                    <Box
                      sx={{
                        color: "#fff",
                        backgroundColor: "#662dbe",
                        borderColor: "#662dbe",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        textTransform: "uppercase",
                        textAlign: "center",
                        borderRadius: "999px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        height: "24px",
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        fontSize: "12px",
                        lineHeight: "16px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          height: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            paddingRight: "4px",
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            height: "100%",
                            padding: "0",
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "#fff",
                              height: "18px",
                              width: "18px",
                              fillRule: "evenodd",
                              marginTop: "3px",
                              padding: 0,
                            }}
                          >
                            <MilitaryTechIcon />
                          </SvgIcon>
                        </Box>
                        featured
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridAutoFlow: "column",
                      scrollSnapType: "x mandatory",
                      gap: "10px",
                      gridTemplateColumns: "repeat(3,1fr)",
                      padding: 0,
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                        height: "auto",
                        padding: 0,
                        boxSizing: "border-box",
                      }}
                    >
                      <PropertyFeaturedTemplate>
                        <a
                          href="/"
                          style={{
                            color: "#322744",
                            fontWeight: "400",
                            textDecoration: "none",
                            display: "block",
                            width: "100%",
                            flexShrink: 0,
                            marginTop: 0,
                            marginLeft: 0,
                            height: "160px",
                            overflow: "hidden",
                            aspectRatio: 3 / 2,
                            position: "relative",
                          }}
                        >
                          <CardMedia
                            component="picture"
                            sx={{ maxWidth: "100%", display: "block" }}
                          >
                            <source
                              srcSet="/images/propertyListingPromo/newhome.jpg 645w, /images/propertyListingPromo/newhome.jpg 354w"
                              type="image/webp"
                              sizes="170px"
                            />
                            <img
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                maxWidth: "none",
                                textIndent: "100%",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                fontSize: "0",
                              }}
                              alt="property featured adverts"
                            ></img>
                          </CardMedia>
                        </a>
                        <Box
                          sx={{
                            marginTop: "0",
                            flexFlow: "column nowrap",
                            padding: "12px",
                            scrollSnapAlign: "start",
                            background: "#fff",
                            display: "flex",
                            height: "100%",
                          }}
                        >
                          <a
                            style={{
                              color: "#322744",
                              fontWeight: 600,
                              borderRadius: "4px",
                              textDecoration: "none",
                              display: "flex",
                              flexDirection: "column",
                              alignSelf: "stretch",
                              flex: "1 1",
                            }}
                            href="/"
                          >
                            <p
                              style={{
                                margin: "0 0 4px 0",
                                fontWeight: 600,
                                color: "#76767c",
                                fontSize: "14px",
                                lineHeight: "20px",
                              }}
                            >
                              2 bed flat for sale
                            </p>
                            <p
                              style={{
                                margin: "0 0 4px 0",
                                fontWeight: 600,
                                color: "#322744",
                                fontSize: "18px",
                                lineHeight: "28px",
                              }}
                            >
                              ₦300,000,000
                            </p>
                            <p
                              style={{
                                margin: "0",
                                color: "#322744",
                                fontSize: "14px",
                                lineHeight: "20px",
                              }}
                            >
                              Ibeju Leki, Lagos State
                            </p>
                            <ul
                              style={{
                                display: "flex",
                                listStyleType: "none",
                                columnGap: "16px",
                                margin: "8px 0 16px",
                                color: "#322744",
                                fontWeight: 600,
                                padding: "0",
                              }}
                            >
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  columnGap: "8px",
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
                                  <BathtubOutlinedIcon />
                                </SvgIcon>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  2
                                </p>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  columnGap: "8px",
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
                                  <BedOutlinedIcon />
                                </SvgIcon>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  2
                                </p>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  columnGap: "8px",
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
                                  <ChairOutlinedIcon />
                                </SvgIcon>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  2
                                </p>
                              </li>
                            </ul>
                          </a>
                          <a
                            style={{
                              color: "#322744",
                              fontWeight: 600,
                              display: "inline",
                              borderRadius: "4px",
                              textDecoration: "none",
                              padding: 0,
                            }}
                            href="/"
                          >
                            <Box
                              sx={{
                                marginTop: "auto",
                                padding: 0,
                                minHeight: "2.5rem",
                              }}
                            >
                              <img
                                src="https://st.zoocdn.com/zoopla_static_agent_logo_(686622).png"
                                alt="B&amp;C Properties"
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  maxHeight: "2.5rem",
                                  alignSelf: "flex-start",
                                  margin: "auto 0",
                                }}
                                loading="eager"
                              />
                            </Box>
                          </a>
                        </Box>
                      </PropertyFeaturedTemplate>
                    </Box>
                    <Box
                      sx={{
                        display: "inline-block",
                        height: "auto",
                        padding: 0,
                        boxSizing: "border-box",
                      }}
                    >
                      <PropertyFeaturedTemplate>
                        <a
                          href="/"
                          style={{
                            color: "#322744",
                            fontWeight: "400",
                            textDecoration: "none",
                            display: "block",
                            width: "100%",
                            flexShrink: 0,
                            marginTop: 0,
                            marginLeft: 0,
                            height: "160px",
                            overflow: "hidden",
                            aspectRatio: 3 / 2,
                            position: "relative",
                          }}
                        >
                          <CardMedia
                            component="picture"
                            sx={{ maxWidth: "100%", display: "block" }}
                          >
                            <source
                              srcSet="/images/propertyListingPromo/newhome.jpg 645w, /images/propertyListingPromo/newhome.jpg 354w"
                              type="image/webp"
                              sizes="170px"
                            />
                            <img
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                maxWidth: "none",
                                textIndent: "100%",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                fontSize: "0",
                              }}
                              alt="property featured adverts"
                            ></img>
                          </CardMedia>
                        </a>
                        <Box
                          sx={{
                            marginTop: "0",
                            flexFlow: "column nowrap",
                            padding: "12px",
                            scrollSnapAlign: "start",
                            background: "#fff",
                            display: "flex",
                            height: "100%",
                          }}
                        >
                          <a
                            style={{
                              color: "#322744",
                              fontWeight: 600,
                              borderRadius: "4px",
                              textDecoration: "none",
                              display: "flex",
                              flexDirection: "column",
                              alignSelf: "stretch",
                              flex: "1 1",
                            }}
                            href="/"
                          >
                            <p
                              style={{
                                margin: "0 0 4px 0",
                                fontWeight: 600,
                                color: "#76767c",
                                fontSize: "14px",
                                lineHeight: "20px",
                              }}
                            >
                              2 bed flat for sale
                            </p>
                            <p
                              style={{
                                margin: "0 0 4px 0",
                                fontWeight: 600,
                                color: "#322744",
                                fontSize: "18px",
                                lineHeight: "28px",
                              }}
                            >
                              ₦300,000,000
                            </p>
                            <p
                              style={{
                                margin: "0",
                                color: "#322744",
                                fontSize: "14px",
                                lineHeight: "20px",
                              }}
                            >
                              Ibeju Leki, Lagos State
                            </p>
                            <ul
                              style={{
                                display: "flex",
                                listStyleType: "none",
                                columnGap: "16px",
                                margin: "8px 0 16px",
                                color: "#322744",
                                fontWeight: 600,
                                padding: "0",
                              }}
                            >
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  columnGap: "8px",
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
                                  <BathtubOutlinedIcon />
                                </SvgIcon>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  2
                                </p>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  columnGap: "8px",
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
                                  <BedOutlinedIcon />
                                </SvgIcon>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  2
                                </p>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  columnGap: "8px",
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
                                  <ChairOutlinedIcon />
                                </SvgIcon>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  2
                                </p>
                              </li>
                            </ul>
                          </a>
                          <a
                            style={{
                              color: "#322744",
                              fontWeight: 600,
                              display: "inline",
                              borderRadius: "4px",
                              textDecoration: "none",
                              padding: 0,
                            }}
                            href="/"
                          >
                            <Box
                              sx={{
                                marginTop: "auto",
                                padding: 0,
                                minHeight: "2.5rem",
                              }}
                            >
                              <img
                                src="https://st.zoocdn.com/zoopla_static_agent_logo_(686622).png"
                                alt="B&amp;C Properties"
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  maxHeight: "2.5rem",
                                  alignSelf: "flex-start",
                                  margin: "auto 0",
                                }}
                                loading="eager"
                              />
                            </Box>
                          </a>
                        </Box>
                      </PropertyFeaturedTemplate>
                    </Box>
                    <Box
                      sx={{
                        display: "inline-block",
                        height: "auto",
                        padding: 0,
                        boxSizing: "border-box",
                      }}
                    >
                      <PropertyFeaturedTemplate>
                        <a
                          href="/"
                          style={{
                            color: "#322744",
                            fontWeight: "400",
                            textDecoration: "none",
                            display: "block",
                            width: "100%",
                            flexShrink: 0,
                            marginTop: 0,
                            marginLeft: 0,
                            height: "160px",
                            overflow: "hidden",
                            aspectRatio: 3 / 2,
                            position: "relative",
                          }}
                        >
                          <CardMedia
                            component="picture"
                            sx={{ maxWidth: "100%", display: "block" }}
                          >
                            <source
                              srcSet="/images/propertyListingPromo/newhome.jpg 645w, /images/propertyListingPromo/newhome.jpg 354w"
                              type="image/webp"
                              sizes="170px"
                            />
                            <img
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                maxWidth: "none",
                                textIndent: "100%",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                fontSize: "0",
                              }}
                              alt="property featured adverts"
                            ></img>
                          </CardMedia>
                        </a>
                        <Box
                          sx={{
                            marginTop: "0",
                            flexFlow: "column nowrap",
                            padding: "12px",
                            scrollSnapAlign: "start",
                            background: "#fff",
                            display: "flex",
                            height: "100%",
                          }}
                        >
                          <a
                            style={{
                              color: "#322744",
                              fontWeight: 600,
                              borderRadius: "4px",
                              textDecoration: "none",
                              display: "flex",
                              flexDirection: "column",
                              alignSelf: "stretch",
                              flex: "1 1",
                            }}
                            href="/"
                          >
                            <p
                              style={{
                                margin: "0 0 4px 0",
                                fontWeight: 600,
                                color: "#76767c",
                                fontSize: "14px",
                                lineHeight: "20px",
                              }}
                            >
                              2 bed flat for sale
                            </p>
                            <p
                              style={{
                                margin: "0 0 4px 0",
                                fontWeight: 600,
                                color: "#322744",
                                fontSize: "18px",
                                lineHeight: "28px",
                              }}
                            >
                              ₦300,000,000
                            </p>
                            <p
                              style={{
                                margin: "0",
                                color: "#322744",
                                fontSize: "14px",
                                lineHeight: "20px",
                              }}
                            >
                              Ibeju Leki, Lagos State
                            </p>
                            <ul
                              style={{
                                display: "flex",
                                listStyleType: "none",
                                columnGap: "16px",
                                margin: "8px 0 16px",
                                color: "#322744",
                                fontWeight: 600,
                                padding: "0",
                              }}
                            >
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  columnGap: "8px",
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
                                  <BathtubOutlinedIcon />
                                </SvgIcon>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  2
                                </p>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  columnGap: "8px",
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
                                  <BedOutlinedIcon />
                                </SvgIcon>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  2
                                </p>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  columnGap: "8px",
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
                                  <ChairOutlinedIcon />
                                </SvgIcon>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  2
                                </p>
                              </li>
                            </ul>
                          </a>
                          <a
                            style={{
                              color: "#322744",
                              fontWeight: 600,
                              display: "inline",
                              borderRadius: "4px",
                              textDecoration: "none",
                              padding: 0,
                            }}
                            href="/"
                          >
                            <Box
                              sx={{
                                marginTop: "auto",
                                padding: 0,
                                minHeight: "2.5rem",
                              }}
                            >
                              <img
                                src="https://st.zoocdn.com/zoopla_static_agent_logo_(686622).png"
                                alt="B&amp;C Properties"
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  maxHeight: "2.5rem",
                                  alignSelf: "flex-start",
                                  margin: "auto 0",
                                }}
                                loading="eager"
                              />
                            </Box>
                          </a>
                        </Box>
                      </PropertyFeaturedTemplate>
                    </Box>
                  </Box>
                </PropertyFeaturedListing>
                <Box></Box>
                {properties.map((property) => (
                  <SingleProperty
                    property={property}
                    matches={matches}
                    key={property.id}
                  />
                ))}
                <Box>
                  <UsePagination />
                </Box>
              </Box>
            </PropertySearchSection>
            <PropertyAsideSection>
              <Box
                sx={{
                  padding: "32px 24px",
                  width: "100%",
                  boxShadow:
                    "0px 0px 8px #3227440a,0px 0px 1px #32274452,0px 8px 8px -8px #32274429",
                  borderRadius: "0px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    columnGap: "16px",
                    flexWrap: "wrap",
                    rowGap: "16px",
                    padding: "0",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: Colors.black,
                      border: `1px solid black`,
                      height: "50px",
                      "&:hover": {
                        backgroundColor: Colors.primary,
                        boxShadow: "none",
                        color: Colors.white,
                      },
                    }}
                  >
                    Create email alert
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: Colors.black,
                      border: `1px solid black`,
                      height: "50px",
                      "&:hover": {
                        backgroundColor: Colors.primary,
                        boxShadow: "none",
                        color: Colors.white,
                      },
                    }}
                  >
                    Create email alert
                  </Button>
                </Box>
              </Box>
            </PropertyAsideSection>
          </Box>
        </Box>
      </Box>
    </main>
  );
}

export default PropertyListing;
