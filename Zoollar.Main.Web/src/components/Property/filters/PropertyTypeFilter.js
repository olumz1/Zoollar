import * as React from "react";
import { Box, Button } from "@mui/material";
import DetachedHome from "../../../iconComponent/detachedHome";
import SemiDetachedHome from "../../../iconComponent/semiDetachedHome";
import TerracedHome from "../../../iconComponent/terracedHome";
import FlatHome from "../../../iconComponent/flatHome";
import Bungalow from "../../../iconComponent/bungalow";
import WareHouse from "../../../iconComponent/wareHouse";
import Land from "../../../iconComponent/land";
import { useState } from "react";
import "../../../styles/propertylisting/dropDownListVertical.css";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

export default function PropertyTypeFilter(props) {
  const [isDuplexSelected, setIsDuplexSelected] = useState(false);
  const [isTwinDuplexSelected, setIsTwinDuplexSelected] = useState(false);
  const [isTerracedSelected, setIsTerracedSelected] = useState(false);
  const [isBungalowSelected, setIsBungalowSelected] = useState(false);
  const [isFlatSelected, setIsFlatSelected] = useState(false);
  const [isCommercialSelected, setIsCommercialSelected] = useState(false);
  const [isLandSelected, setIsLandSelected] = useState(false);
  const [addToFilter, setAddToFilter] = useState([]);
  const [open, setOpen] = useState(props.showDropDown);

  const handleClickAway = () => {
    if (open === "block") {
      setOpen("none");
      props.closePropertyTypeFilter();
    }
  };

  React.useEffect(() => {
    setOpen(props.showDropDown);
  }, [props.showDropDown]);

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

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          backgroundColor: "#fff",
          border: "1px solid #3227443d",
          borderRadius: "4px",
          display: open,
          position: "absolute",
          minWidth: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "0px 8px",
            zIndex: 2000,
            position: "relative",
            flexWrap: "wrap",
            height: "auto",
            overflow: "hidden",
          }}
        >
          <Button
            onClick={() => handleDuplexClick("Duplex")}
            sx={{
              borderLeft: "none",
              borderTop: "none",
              display: "block",
              width: "14.285%",
              margin: "10px 0",
              height: "auto",
              padding: "11.25px 0",
              position: "relative",
              color: "#322744",
              textAlign: "center",
              userSelect: "none",
              cursor: "pointer",
              border: "none",
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
                className={isDuplexSelected ? "activePropertyType" : ""}
                sx={{
                  margin: "4px",
                  padding: "4px 15px",
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
          <Button
            onClick={() => handleTwinClick("TwinDuplex")}
            sx={{
              borderLeft: "1px dashed #3227443d",
              borderTop: "none",
              display: "block",
              width: "14.285%",
              margin: "10px 0",
              height: "auto",
              padding: "11.25px 0",
              position: "relative",
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
                className={isTwinDuplexSelected ? "activePropertyType" : ""}
                sx={{
                  margin: "4px",
                  padding: "4px 15px",
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

          <Button
            onClick={() => handleTerracedClick("Terraced")}
            sx={{
              borderLeft: "1px dashed #3227443d",
              borderTop: "none",
              display: "block",
              width: "14.285%",
              margin: "10px 0",
              height: "auto",
              padding: "11.25px 0",
              position: "relative",
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
                className={isTerracedSelected ? "activePropertyType" : ""}
                sx={{
                  margin: "4px",
                  padding: "4px 15px",
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
          <Button
            onClick={() => handleBungalowClick("Bungalow")}
            sx={{
              borderLeft: "1px dashed #3227443d",
              borderTop: "none",
              display: "block",
              width: "14.285%",
              margin: "10px 0",
              height: "auto",
              padding: "11.25px 0",
              position: "relative",
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
                className={isBungalowSelected ? "activePropertyType" : ""}
                sx={{
                  margin: "4px",
                  padding: "4px 15px",
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
          <Button
            onClick={() => handleFlatClick("Flat")}
            sx={{
              borderLeft: "1px dashed #3227443d",
              borderTop: "none",
              display: "block",
              width: "14.285%",
              margin: "10px 0",
              height: "auto",
              padding: "11.25px 0",
              position: "relative",
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
                  padding: "4px 15px",
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
          <Button
            onClick={() => handleCommercialClick("Commercial")}
            sx={{
              borderLeft: "1px dashed #3227443d",
              borderTop: "none",
              display: "block",
              width: "14.285%",
              margin: "10px 0",
              height: "auto",
              padding: "11.25px 0",
              position: "relative",
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
                className={isCommercialSelected ? "activePropertyType" : ""}
                sx={{
                  margin: "4px",
                  padding: "4px 15px",
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
          <Button
            onClick={() => handleLandClick("Land")}
            sx={{
              borderTop: "none",
              display: "block",
              width: "14.285%",
              margin: "10px 0",
              height: "auto",
              padding: "11.25px 0",
              position: "relative",
              color: "#322744",
              textAlign: "center",
              userSelect: "none",
              cursor: "pointer",
              borderLeft: "1px dashed #3227443d",
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
                  padding: "4px 15px",
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
        <Box
          sx={{
            position: "relative",
            bottom: "0",
            height: "80px",
            backgroundColor: "#fff",
            padding: "19px 30px",
          }}
        >
          <Box
            sx={{
              display: "inherit",
              position: "relative",
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                width: "auto",
                position: "absolute",
                right: "210px",
                borderBottom: "none",
                padding: "0 30px",
                height: "44px",
                lineHeight: "44px",
                display: "inline-block",
                float: "left",
                transform: "translateZ(0)",
                fontSize: "17px",
                textAlign: "center",
              }}
            >
              <span>
                <b>500</b> results
              </span>
            </Box>
            <Box sx={{ width: "180px", float: "right", padding: "0" }}>
              <Button
                variant="contained"
                sx={{
                  borderWidth: "1px",
                  borderRadius: "2px",
                  width: "100%",
                }}
                onClick={props.closePropertyTypeFilter}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
}
