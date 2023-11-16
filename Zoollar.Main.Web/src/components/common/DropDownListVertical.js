import * as React from "react";
import { Box, Button, SvgIcon } from "@mui/material";
import DetachedHome from "../../iconComponent/detachedHome";
import SemiDetachedHome from "../../iconComponent/semiDetachedHome";
import TerracedHome from "../../iconComponent/terracedHome";
import FlatHome from "../../iconComponent/flatHome";
import Bungalow from "../../iconComponent/bungalow";
import WareHouse from "../../iconComponent/wareHouse";
import Land from "../../iconComponent/land";

export default function DropDownListVertical(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        border: "1px solid #3227443d",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "0px 8px",
          zIndex: 2000,
          minWidth: "100%",
          position: "relative",
          flexWrap: "wrap",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <Button
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
              sx={{
                margin: "4px",
                padding: "5px 15px",
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
              sx={{
                margin: "4px",
                padding: "5px 15px",
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
              sx={{
                margin: "4px",
                padding: "5px 15px",
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
              sx={{
                margin: "4px",
                padding: "5px 15px",
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
              sx={{
                margin: "4px",
                padding: "5px 15px",
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
              sx={{
                margin: "4px",
                padding: "5px 15px",
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
              sx={{
                margin: "4px",
                padding: "5px 15px",
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
          borderBottom: "1px solid #dfdfe1",
          width: "100%",
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
              sx={{ borderWidth: "1px", borderRadius: "2px", width: "100%" }}
            >
              Done
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
