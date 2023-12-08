import { Box, Dialog, InputLabel, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import DetachedHome from "../../iconComponent/detachedHome";
import SemiDetachedHome from "../../iconComponent/semiDetachedHome";
import TerracedHome from "../../iconComponent/terracedHome";
import FlatHome from "../../iconComponent/flatHome";
import Bungalow from "../../iconComponent/bungalow";
import WareHouse from "../../iconComponent/wareHouse";
import Land from "../../iconComponent/land";

export default function PropertyResultFilterDialog(props) {
  const theme = useTheme();
  const [isTwinDuplexSelected, setIsTwinDuplexSelected] = useState(false);
  const [isDuplexSelected, setIsDuplexSelected] = useState(false);
  const [isTerracedSelected, setIsTerracedSelected] = useState(false);
  const [isBungalowSelected, setIsBungalowSelected] = useState(false);
  const [isFlatSelected, setIsFlatSelected] = useState(false);
  const [isCommercialSelected, setIsCommercialSelected] = useState(false);
  const [isLandSelected, setIsLandSelected] = useState(false);
  const [selectedDistance, setSelectedDistance] = useState("");
  const [selectedMinRooms, setselectedMinRooms] = useState("");
  const [selectedMaxRooms, setselectedMaxRooms] = useState("");
  const [selectedMinPrice, setselectedMinPrice] = useState("");
  const [selectedMaxPrice, setselectedMaxPrice] = useState("");
  const [sliceStartValue, setsliceStartValue] = useState(0);
  const [sliceEndValue, setsliceEndValue] = useState(bedrooms.length);
  const [addToFilter, setAddToFilter] = useState([]);

  const handleDuplexClick = (propertyType) => {
    setIsDuplexSelected(!isDuplexSelected);

    if (isDuplexSelected) {
      if (!addToFilter.includes(propertyType)) {
        setAddToFilter((addToFilter) => [...addToFilter, propertyType]);
      }
    } else {
      if (addToFilter.includes("Duplex")) {
        setAddToFilter(addToFilter.filter((item) => item.Duplex !== "Duplex"));
      }
    }
  };

  const handleTwinClick = (propertyType) => {
    setIsTwinDuplexSelected(!isTwinDuplexSelected);

    if (isTwinDuplexSelected) {
      if (!addToFilter.includes(propertyType)) {
        setAddToFilter((addToFilter) => [...addToFilter, propertyType]);
      }
    } else {
      if (addToFilter.includes("TwinDuplex")) {
        setAddToFilter(
          addToFilter.filter((item) => item.Duplex !== "TwinDuplex")
        );
      }
    }
  };

  const handleTerracedClick = (propertyType) => {
    setIsTerracedSelected(!isTerracedSelected);

    if (isTerracedSelected) {
      if (!addToFilter.includes(propertyType)) {
        setAddToFilter((addToFilter) => [...addToFilter, propertyType]);
      }
    } else {
      if (addToFilter.includes("Terraced")) {
        setAddToFilter(
          addToFilter.filter((item) => item.Duplex !== "Terraced")
        );
      }
    }
  };

  const handleBungalowClick = (propertyType) => {
    setIsBungalowSelected(!isBungalowSelected);

    if (isBungalowSelected) {
      if (!addToFilter.includes(propertyType)) {
        setAddToFilter((addToFilter) => [...addToFilter, propertyType]);
      }
    } else {
      if (addToFilter.includes("Bungalow")) {
        setAddToFilter(
          addToFilter.filter((item) => item.Bungalow !== "Bungalow")
        );
      }
    }
  };

  const handleFlatClick = (propertyType) => {
    setIsFlatSelected(!isFlatSelected);

    if (isFlatSelected) {
      if (!addToFilter.includes(propertyType)) {
        setAddToFilter((addToFilter) => [...addToFilter, propertyType]);
      }
    } else {
      if (addToFilter.includes("Flat")) {
        setAddToFilter(addToFilter.filter((item) => item.Land !== "Flat"));
      }
    }
  };

  const handleCommercialClick = (propertyType) => {
    setIsCommercialSelected(!isCommercialSelected);

    if (isCommercialSelected) {
      if (!addToFilter.includes(propertyType)) {
        setAddToFilter((addToFilter) => [...addToFilter, propertyType]);
      }
    } else {
      if (addToFilter.includes("Commercial")) {
        setAddToFilter(
          addToFilter.filter((item) => item.Land !== "Commercial")
        );
      }
    }
  };

  const handleLandClick = (propertyType) => {
    setIsLandSelected(!isLandSelected);

    if (isLandSelected) {
      if (!addToFilter.includes(propertyType)) {
        setAddToFilter((addToFilter) => [...addToFilter, propertyType]);
      }
    } else {
      if (addToFilter.includes("Land")) {
        setAddToFilter(addToFilter.filter((item) => item.Land !== "Land"));
      }
    }
  };

  const handleDistanceChange = (event) => {
    setSelectedDistance(event.target.value);
  };

  ///todo: fix the dropdown selected value
  const handleMinRoomChange = (event) => {
    setselectedMinRooms(event.target.value);
    var indexValue = bedrooms.indexOf(selectedMinRooms) - 1;
    setsliceStartValue(bedrooms[indexValue]);
  };

  const handleMaxPriceChange = (event) => {
    setselectedMaxPrice(event.target.value);
  };
  const handleMinPriceChange = (event) => {
    setselectedMinPrice(event.target.value);
  };

  const handleMaxRoomChange = (event) => {
    setselectedMaxRooms(event.target.value);
    var indexValue = bedrooms.indexOf(selectedMaxRooms) - 1;
    setsliceEndValue(bedrooms[indexValue]);
  };
  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.handleFilterClickClose}
      sx={{
        pointerEvents: "auto",
        right: 0,
        left: "inherit",
        minWidth: "720px",
        maxWidth: "min((768px), calc(100% - 56px))",
        height: "100%",
        top: "0",
        bottom: 0,
        transform: "none",
        borderRadius: 0,
        zIndex: 900,
        position: "fixed",
        background: "#fff",
        boxShadow: "0px 0px 24px #3227443d",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <main style={{ display: "contents" }}>
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "flex-end",
            padding: "8px",
          }}
        >
          <h1
            style={{
              flex: "1 1",
              fontWeight: "600",
              alignSelf: "center",
              paddingLeft: "8px",
              paddingRight: "8px",
              fontSize: "22px",
              lineHeight: "32px",
            }}
          >
            Filter your results
          </h1>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.handleFilterClickClose}
            aria-label="close"
            sx={{
              height: "48px",
              width: "48px",
              backgroundColor: "initial",
              transitionProperty: `transform,box-shadow,background`,
              transitionDuration: "0.16s",
              transitionTimingFunction: `cubic-bezier(0.3,0,0.8,1)`,
              color: "#322744",
              ":-webkit-text-fill-color": "#322744",
              textDecoration: "none",
              borderRadius: "4px",
              border: "none",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <CloseIcon
              sx={{ height: "24px", width: "24px", fillRule: "evenodd" }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{ minHeight: 0, overflow: "auto", flex: "1 1", padding: "16px" }}
        >
          <Box
            sx={{
              paddingRight: "120px",
              paddingLeft: "120px",
              display: "flex",
              rowGap: "16px",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px",
                position: "relative",
                flexGrow: 1,
                flexShrink: "1",
                flexBasis: "0%",
              }}
            >
              <InputLabel
                sx={{
                  color: "#322722",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Distance
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedDistance}
                label="Age"
                onChange={handleDistanceChange}
              >
                {distances.map((distance) => (
                  <MenuItem key={distance} value={distance}>
                    {distance}
                  </MenuItem>
                ))}
              </Select>
            </Box>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px",
                position: "relative",
                flexGrow: 1,
                flexShrink: "1",
                flexBasis: "0%",
              }}
            >
              <InputLabel
                sx={{
                  color: "#322722",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Bedrooms
              </InputLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "left",
                  columnGap: "16px",
                  flexWrap: "wrap",
                  rowGap: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "4px",
                    position: "relative",
                    flexGrow: "1",
                    flexShrink: 1,
                    flexBasis: "0%",
                  }}
                >
                  <InputLabel
                    id="min-beds"
                    sx={{
                      color: "#322744",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Min beds
                  </InputLabel>
                  <Select
                    labelId="min-beds"
                    id="min-beds-select"
                    value={selectedMinRooms}
                    label="Min beds"
                    onChange={handleMinRoomChange}
                  >
                    {bedrooms.slice(0, sliceEndValue).map((minRooms) => (
                      <MenuItem key={minRooms} value={minRooms}>
                        {minRooms}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "4px",
                    position: "relative",
                    flexGrow: "1",
                    flexShrink: 1,
                    flexBasis: "0%",
                  }}
                >
                  <InputLabel
                    id="max-beds"
                    sx={{
                      color: "#322744",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Max beds
                  </InputLabel>
                  <Select
                    labelId="max-beds"
                    id="max-beds-select"
                    value={selectedMaxRooms}
                    label="Max beds"
                    onChange={handleMaxRoomChange}
                  >
                    {bedrooms
                      .slice(sliceStartValue, bedrooms.length)
                      .map((maxRooms) => (
                        <MenuItem key={maxRooms} value={maxRooms}>
                          {maxRooms}
                        </MenuItem>
                      ))}
                  </Select>
                </Box>
              </Box>
            </Box>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px",
                position: "relative",
                flexGrow: 1,
                flexShrink: "1",
                flexBasis: "0%",
              }}
            >
              <InputLabel
                sx={{
                  color: "#322722",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Price
              </InputLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "left",
                  columnGap: "16px",
                  flexWrap: "wrap",
                  rowGap: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "4px",
                    position: "relative",
                    flexGrow: "1",
                    flexShrink: 1,
                    flexBasis: "0%",
                  }}
                >
                  <InputLabel
                    id="min-beds"
                    sx={{
                      color: "#322744",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Min price
                  </InputLabel>
                  <Select
                    labelId="min-price"
                    id="min-price-select"
                    value={selectedMinPrice}
                    label="Min price"
                    onChange={handleMinPriceChange}
                  >
                    {priceList.map((minPrice) => (
                      <MenuItem key={minPrice} value={minPrice}>
                        {minPrice}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "4px",
                    position: "relative",
                    flexGrow: "1",
                    flexShrink: 1,
                    flexBasis: "0%",
                  }}
                >
                  <InputLabel
                    id="max-price"
                    sx={{
                      color: "#322744",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Max price
                  </InputLabel>
                  <Select
                    labelId="max-price"
                    id="max-price-select"
                    value={selectedMaxPrice}
                    label="Max price"
                    onChange={handleMaxPriceChange}
                  >
                    {priceList.map((maxPrice) => (
                      <MenuItem key={maxPrice} value={maxPrice}>
                        {maxPrice}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
            </Box>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px",
                position: "relative",
                flexGrow: 1,
                flexShrink: "1",
                flexBasis: "0%",
              }}
            >
              <InputLabel
                sx={{
                  color: "#322722",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Property type
              </InputLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "16px",
                  flexWrap: "wrap",
                  rowGap: "125px",
                }}
              >
                <Box sx={{ width: "30%" }}>
                  <Box sx={{ minWidth: 0, display: "flex" }}>
                    <Button
                      onClick={() => handleDuplexClick("Duplex")}
                      sx={{
                        borderTop: "none",
                        display: "block",
                        width: "30%",
                        height: "auto",
                        padding: "11.25px 0",
                        position: "absolute",
                        color: "#322744",
                        textAlign: "center",
                        userSelect: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          visibility: "visible",
                          position: "relative",
                          top: "0",
                          left: "0",
                          width: "100%",
                          padding: "15px",
                          margin: "0 auto",
                          height: "73.5px",
                        }}
                      >
                        <DetachedHome />

                        <Box
                          className={
                            isDuplexSelected ? "activePropertyType" : ""
                          }
                          sx={{
                            margin: "4px",
                            padding: "4px 0px",
                            borderRadius: "5px",
                            textAlign: "center",
                            userSelect: "none",
                            cursor: "pointer",
                          }}
                        >
                          Duplex
                        </Box>
                      </Box>
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ width: "30%" }}>
                  <Box sx={{ minWidth: 0, display: "flex" }}>
                    <Button
                      onClick={() => handleTwinClick("TwinDuplex")}
                      sx={{
                        borderTop: "none",
                        display: "block",
                        width: "30%",
                        height: "auto",
                        padding: "11.25px 0",
                        position: "absolute",
                        color: "#322744",
                        textAlign: "center",
                        userSelect: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          visibility: "visible",
                          position: "relative",
                          top: "0",
                          left: "0",
                          width: "100%",
                          padding: "15px",
                          margin: "0 auto",
                          height: "73.5px",
                        }}
                      >
                        <SemiDetachedHome />

                        <Box
                          className={
                            isTwinDuplexSelected ? "activePropertyType" : ""
                          }
                          sx={{
                            margin: "4px",
                            padding: "4px 0px",
                            borderRadius: "5px",
                            textAlign: "center",
                            userSelect: "none",
                            cursor: "pointer",
                          }}
                        >
                          Twin Duplex
                        </Box>
                      </Box>
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ width: "30%" }}>
                  <Box sx={{ minWidth: 0, display: "flex" }}>
                    <Button
                      onClick={() => handleTerracedClick("Terraced")}
                      sx={{
                        borderTop: "none",
                        display: "block",
                        width: "30%",
                        height: "auto",
                        padding: "11.25px 0",
                        position: "absolute",
                        color: "#322744",
                        textAlign: "center",
                        userSelect: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          visibility: "visible",
                          position: "relative",
                          top: "0",
                          left: "0",
                          width: "100%",
                          padding: "15px",
                          margin: "0 auto",
                          height: "73.5px",
                        }}
                      >
                        <TerracedHome />

                        <Box
                          className={
                            isTerracedSelected ? "activePropertyType" : ""
                          }
                          sx={{
                            margin: "4px",
                            padding: "4px 0px",
                            borderRadius: "5px",
                            textAlign: "center",
                            userSelect: "none",
                            cursor: "pointer",
                          }}
                        >
                          Terraced
                        </Box>
                      </Box>
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ width: "30%" }}>
                  <Box sx={{ minWidth: 0, display: "flex" }}>
                    <Button
                      onClick={() => handleBungalowClick("Bungalow")}
                      sx={{
                        borderTop: "none",
                        display: "block",
                        width: "30%",
                        height: "auto",
                        padding: "11.25px 0",
                        position: "absolute",
                        color: "#322744",
                        textAlign: "center",
                        userSelect: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          visibility: "visible",
                          position: "relative",
                          top: "0",
                          left: "0",
                          width: "100%",
                          padding: "15px",
                          margin: "0 auto",
                          height: "73.5px",
                        }}
                      >
                        <Bungalow />

                        <Box
                          className={
                            isBungalowSelected ? "activePropertyType" : ""
                          }
                          sx={{
                            margin: "4px",
                            padding: "4px 0px",
                            borderRadius: "5px",
                            textAlign: "center",
                            userSelect: "none",
                            cursor: "pointer",
                          }}
                        >
                          Bungalow
                        </Box>
                      </Box>
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ width: "30%" }}>
                  <Box sx={{ minWidth: 0, display: "flex" }}>
                    <Button
                      onClick={() => handleFlatClick("Flat")}
                      sx={{
                        borderTop: "none",
                        display: "block",
                        width: "30%",
                        height: "auto",
                        padding: "11.25px 0",
                        position: "absolute",
                        color: "#322744",
                        textAlign: "center",
                        userSelect: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          visibility: "visible",
                          position: "relative",
                          top: "0",
                          left: "0",
                          width: "100%",
                          padding: "15px",
                          margin: "0 auto",
                          height: "73.5px",
                        }}
                      >
                        <FlatHome />

                        <Box
                          className={isFlatSelected ? "activePropertyType" : ""}
                          sx={{
                            margin: "4px",
                            padding: "4px 0",
                            borderRadius: "5px",
                            textAlign: "center",
                            userSelect: "none",
                            cursor: "pointer",
                          }}
                        >
                          Flats
                        </Box>
                      </Box>
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ width: "30%" }}>
                  <Box sx={{ minWidth: 0, display: "flex" }}>
                    <Button
                      onClick={() => handleCommercialClick("Commercial")}
                      sx={{
                        borderTop: "none",
                        display: "block",
                        width: "30%",
                        height: "auto",
                        padding: "11.25px 0",
                        position: "absolute",
                        color: "#322744",
                        textAlign: "center",
                        userSelect: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          visibility: "visible",
                          position: "relative",
                          top: "0",
                          left: "0",
                          width: "100%",
                          padding: "15px",
                          margin: "0 auto",
                          height: "73.5px",
                        }}
                      >
                        <WareHouse />

                        <Box
                          className={
                            isCommercialSelected ? "activePropertyType" : ""
                          }
                          sx={{
                            margin: "4px",
                            padding: "4px 0px",
                            borderRadius: "5px",
                            textAlign: "center",
                            userSelect: "none",
                            cursor: "pointer",
                          }}
                        >
                          Commercial
                        </Box>
                      </Box>
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ width: "30%" }}>
                  <Box sx={{ minWidth: 0, display: "flex" }}>
                    <Button
                      onClick={() => handleLandClick("Land")}
                      sx={{
                        borderTop: "none",
                        display: "block",
                        width: "30%",
                        height: "auto",
                        padding: "11.25px 0",
                        position: "absolute",
                        color: "#322744",
                        textAlign: "center",
                        userSelect: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          visibility: "visible",
                          position: "relative",
                          top: "0",
                          left: "0",
                          width: "100%",
                          padding: "15px",
                          margin: "0 auto",
                          height: "73.5px",
                        }}
                      >
                        <Land />

                        <Box
                          className={isLandSelected ? "activePropertyType" : ""}
                          sx={{
                            margin: "4px",
                            padding: "4px 0px",
                            borderRadius: "5px",
                            textAlign: "center",
                            userSelect: "none",
                            cursor: "pointer",
                          }}
                        >
                          Land
                        </Box>
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "96px",
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px",
                position: "relative",
                flexGrow: 1,
                flexShrink: "1",
                flexBasis: "0%",
              }}
            >
              <InputLabel
                sx={{
                  color: "#322722",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Must have
              </InputLabel>
            </Box>
          </Box>
        </Box>
      </main>
    </Dialog>
  );
}

const distances = [
  "This area only",
  "0.25 Kilometers",
  "0.5 Kilometers",
  "1 Kilometer",
  "3 Kilometers",
  "5 Kilometers",
  "10 Kilometers",
  "15 Kilometers",
  "20 Kilometers",
  "25 Kilometers",
  "30 Kilometers",
  "40 Kilometers",
  "50 Kilometers",
];

const bedrooms = [
  "Self contain",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10 or more",
];

const priceList = [
  "₦100,000",
  "₦500,000",
  "₦1,000,000",
  "₦5,000,000",
  "₦10,000,000",
  "₦20,000,000",
  "₦30,000,000",
  "₦40,000,000",
  "₦50,000,000",
  "₦60,000,000",
  "₦70,000,000",
  "₦80,000,000",
  "₦90,000,000",
  "₦100,000,000",
  "₦200,000,000",
  "₦300,000,000",
  "₦400,000,000",
  "₦500,000,000",
  "₦600,000,000",
  "₦700,000,000",
  "₦800,000,000",
  "₦900,000,000",
  "₦1,000,000,000",
  "₦2,000,000,000",
  "₦3,000,000,000",
  "₦4,000,000,000",
  "₦5,000,000,000",
  "₦6,000,000,000",
  "₦7,000,000,000",
  "₦8,000,000,000",
  "₦9,000,000,000",
  "₦10,000,000,000",
  "₦20,000,000,000",
  "₦30,000,000,000",
  "₦40,000,000,000",
  "₦50,000,000,000",
  "₦60,000,000,000",
  "₦70,000,000,000",
  "₦80,000,000,000",
  "₦90,000,000,000",
  "₦100,000,000,000",
];
