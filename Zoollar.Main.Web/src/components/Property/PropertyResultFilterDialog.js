import { Box, Dialog, InputLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function PropertyResultFilterDialog(props) {
  const theme = useTheme();
  const [selectedDistance, setSelectedDistance] = useState([]);
  const [selectedMinRooms, setselectedMinRooms] = useState([]);
  const [selectedMaxRooms, setselectedMaxRooms] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedDistance(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.replace(/[^\d.-]/g, "") : value
    );
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
                sx={{
                  appearance: "none",
                  textAlign: "left",
                  display: "flex",
                  columnGap: "8px",
                  backgroundColor: "#fff",
                  height: "48px",
                  padding: "12px",
                  borderRadius: "4px",
                  width: "100%",
                  color: "#322744",
                }}
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={selectedDistance}
                onChange={handleChange}
                input={<OutlinedInput label="Distance" />}
                MenuProps={MenuProps}
              >
                {distances.map((distance) => (
                  <MenuItem
                    key={distance}
                    value={distance}
                    style={getStyles(distance, selectedDistance, theme)}
                  >
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
                    sx={{
                      appearance: "none",
                      textAlign: "left",
                      display: "flex",
                      columnGap: "8px",
                      backgroundColor: "#fff",
                      height: "48px",
                      padding: "12px",
                      borderRadius: "4px",
                      width: "100%",
                      color: "#322744",
                    }}
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={selectedDistance}
                    onChange={handleChange}
                    input={<OutlinedInput label="Distance" />}
                    MenuProps={MenuProps}
                  >
                    {distances.map((distance) => (
                      <MenuItem
                        key={distance}
                        value={distance}
                        style={getStyles(distance, selectedDistance, theme)}
                      >
                        {distance}
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
                    sx={{
                      appearance: "none",
                      textAlign: "left",
                      display: "flex",
                      columnGap: "8px",
                      backgroundColor: "#fff",
                      height: "48px",
                      padding: "12px",
                      borderRadius: "4px",
                      width: "100%",
                      color: "#322744",
                    }}
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={selectedDistance}
                    onChange={handleChange}
                    input={<OutlinedInput label="Distance" />}
                    MenuProps={MenuProps}
                  >
                    {distances.map((distance) => (
                      <MenuItem
                        key={distance}
                        value={distance}
                        style={getStyles(distance, selectedDistance, theme)}
                      >
                        {distance}
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(distance, selectedDistance, theme) {
  return {
    fontWeight:
      selectedDistance.indexOf(distance) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
