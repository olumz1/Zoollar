import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DropDownList from "../../common/DropDownList";
import ArrowDropDownIcon from "../../../iconComponent/arrowDropDownIcon";
import { useState } from "react";
import PropertyResultFilterDialog from "./PropertyResultFilterDialog";
import PropertyTypeFilter from "./PropertyTypeFilter";
import PropertyPriceFilter from "./PropertyPriceFilter";

function PropertyFilter() {
  const [isPropertyTypeActive, setIsPropertyTypeActive] = useState(false);
  const [isPriceActive, setIsPriceActive] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleClick = () => {
    setIsPropertyTypeActive(!isPropertyTypeActive);
  };

  const handlePriceClick = () => {
    setIsPriceActive(!isPriceActive);
  };

  const handleFilterClickOpen = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterClickClose = () => {
    setFilterOpen(false);
  };

  const closePropertyTypeFilter = () => {
    setIsPropertyTypeActive(false);
  };

  const closePriceFilter = () => {
    setIsPriceActive(false);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: "0",
        zIndex: "501",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          gridTemplateColumns: `auto 190px repeat(3,150px) 120px 120px`,
          gridTemplateAreas: `"input distance bedrooms price type filter search"`,
          gridTemplateRows: "1fr",
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          display: "grid",
          gridGap: "12px",
          alignItems: "start",
          margin: "4px auto 12px",
          padding: "8px 0 0 0",
          zIndex: 501,
        }}
      >
        <Box sx={{ gridArea: "input", zIndex: "1500" }}>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ paddingBottom: "4px" }}>
                <label
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  Enter a search location
                </label>
              </Box>
              <Box>
                <Box sx={{ display: "flex", width: "100%", columnGap: "16px" }}>
                  <Box
                    sx={{
                      position: "relative",
                      flex: "1 1",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    <input
                      placeholder="e.g. Victoria Island or Wuse"
                      style={{
                        color: "#322744",
                        backgroundColor: "#fff",
                        borderRadius: "4px",
                        padding: "12px",
                        height: "48px",
                        width: "100%",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: "#322744ad",
                        textOverflow: "ellipsis",
                        fontSize: "16px",
                        lineHeight: "24px",
                        outline: "none",
                        boxShadow: "0px 0px 0px 2px ##6439ff",
                      }}
                    ></input>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ gridArea: "distance" }}>
          <Box sx={{ display: "flex", rowGap: "4px", flexDirection: "column" }}>
            <label
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Distance
            </label>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                rowGap: "4px",
                flexDirection: "column",
                flex: "1 1",
              }}
            >
              <DropDownList />
            </Box>
          </Box>
        </Box>
        <Box sx={{ gridArea: "bedrooms" }}>
          <Box sx={{ display: "flex", rowGap: "4px", flexDirection: "column" }}>
            <label
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Bedrooms
            </label>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                rowGap: "4px",
                flexDirection: "column",
                flex: "1 1",
              }}
            >
              <DropDownList />
            </Box>
          </Box>
        </Box>
        <Box sx={{ gridArea: "price" }}>
          <Box
            sx={{
              display: "flex",
              rowGap: "4px",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <label
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Price
            </label>
            <Button
              onClick={() => handlePriceClick()}
              sx={{
                color: "#322744",
                textAalign: "left",
                display: "grid",
                gridTemplateColumns: "auto 24px",
                gridTemplateRows: "1fr",
                gridColumnGap: "0",
                gridRowGap: "0",
                backgroundColor: "#fff",
                height: "48px",
                padding: "12px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#322744ad",
                borderRadius: "4px",
              }}
            >
              <ArrowDropDownIcon
                arrowTransform={isPriceActive ? "rotate(180deg)" : ""}
              />
            </Button>
            <PropertyPriceFilter
              closePriceFilter={closePriceFilter}
              showPriceOptions={isPriceActive ? "flex" : "none"}
            ></PropertyPriceFilter>
          </Box>
        </Box>
        <Box sx={{ gridArea: "type" }}>
          <Box sx={{ display: "flex", rowGap: "4px", flexDirection: "column" }}>
            <label
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Property type
            </label>
            <Button
              onClick={() => handleClick()}
              sx={{
                color: "#322744",
                textAalign: "left",
                display: "grid",
                gridTemplateColumns: "auto 24px",
                gridTemplateRows: "1fr",
                gridColumnGap: "0",
                gridRowGap: "0",
                backgroundColor: "#fff",
                height: "48px",
                padding: "12px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#322744ad",
                borderRadius: "4px",
              }}
            >
              <ArrowDropDownIcon
                arrowTransform={isPropertyTypeActive ? "rotate(180deg)" : ""}
              />
            </Button>
          </Box>
        </Box>
        <Box sx={{ gridArea: "filter", paddingTop: "28px" }}>
          <Button
            variant="outlined"
            onClick={() => handleFilterClickOpen()}
            sx={{
              height: "48px",
              backgroundColor: "initial",
              color: "#322744",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#322744",
              transitionDuration: "0.16s",
              transitionTimingFunction: "cubic-bezeir(0.3,0,0.8,1)",
              paddingLeft: "16px",
              paddingRight: "16px",
              textDecoration: "none",
              transitionProperty: `transform,box-shadow,background-color,color`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              borderRadius: "4px",
              textAlign: "center",
              width: "120px",
            }}
          >
            <Box
              sx={{
                flexDirection: "row",
                columnGap: "8px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>Filters</Box>
              <ArrowDropDownIcon
                arrowTransform={filterOpen ? "rotate(180deg)" : ""}
              />
            </Box>
          </Button>
        </Box>
        <Box sx={{ gridArea: "search", paddingTop: "28px" }}>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            sx={{ height: "48px" }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <PropertyTypeFilter
        closePropertyTypeFilter={closePropertyTypeFilter}
        showDropDown={isPropertyTypeActive ? "block" : "none"}
      />
      <PropertyResultFilterDialog
        handleFilterClickOpen={handleFilterClickOpen}
        open={filterOpen}
        handleFilterClickClose={handleFilterClickClose}
      ></PropertyResultFilterDialog>
      <Box
        sx={{
          justifyContent: "flex-start",
          borderBottom: "1px solid #3227441f",
          ":before": {
            right: "100%",
            width: "calc((100vw - 100%)/2)",
            content: '""',
            background: "#fff",
            display: "block",
            position: "absolute",
            borderBottom: "1px solid #3227441f",
          },
          ":after": {
            left: "100%",
            width: "calc((100vw - 100%)/2)",
            content: '""',
            background: "#fff",
            display: "block",
            position: "absolute",
            borderBottom: "1px solid #3227441f",
          },
        }}
      ></Box>
    </Box>
  );
}

export default PropertyFilter;
