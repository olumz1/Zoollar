import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DropDownList from "../common/DropDownList";
import DropDownListVertical from "../common/DropDownListVertical";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import ArrowDropDownIcon from "../../iconComponent/arrowDropDownIcon";

function PropertyFilter() {
  let clickEvent = false;
  const handleClick = () => {
    clickEvent = true;
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
      <Box></Box>
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
          margin: "4px auto 4px",
          padding: "8px 0 0 0",
          zIndex: 501,
          "::before": {
            right: "100%",
            content: '""',
            display: "block",
            position: "absolute",
            width: ` calc((100vw - 100%) / 2)`,
            top: 0,
            bottom: `calc(0px - 12px)`,
            background: "#fff",
            zIndex: 499,
          },
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
          <Box sx={{ display: "flex", rowGap: "4px", flexDirection: "column" }}>
            <label
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Price
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
              <DropDownList value="Empty" />
            </Box>
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
                arrowTransform={clickEvent ? "rotate(180deg)" : ""}
              />
            </Button>
          </Box>
        </Box>
        <Box sx={{ gridArea: "filter" }}>
          <Box sx={{ display: "flex", rowGap: "4px", flexDirection: "column" }}>
            <label
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Filters
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
              <DropDownList value="Empty" />
            </Box>
          </Box>
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
      <DropDownListVertical value="Empty" />
    </Box>
  );
}

export default PropertyFilter;
