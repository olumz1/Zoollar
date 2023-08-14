import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, SvgIcon, Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./fullscreendialog.css";
import { pattern } from "../../data/property";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import { Colors } from "../../styles/theme";
import { CardMedia } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function FullScreenDialog(props) {
  const [activeState, setActiveState] = React.useState(props.setTabNo);
  const [propImage, setPropImage] = React.useState({ img: "", index: 0 });
  const viewImage = (img, index) => {
    setPropImage({ img, index });
  };
  const imgAction = (action) => {
    let i = propImage.index;
    if (action === "next-img") {
      setPropImage({
        img:
          propImage.index === props.propertyImages.length - 1
            ? props.propertyImages[0].imageUrl
            : props.propertyImages[i + 1].imageUrl,
        index: propImage.index === props.propertyImages.length - 1 ? 0 : i + 1,
      });
    }

    if (action === "prev-img") {
      setPropImage({
        img:
          propImage.index === 0
            ? props.propertyImages[props.propertyImages.length - 1].imageUrl
            : props.propertyImages[i - 1].imageUrl,
        index: propImage.index === 0 ? props.propertyImages.length - 1 : i - 1,
      });
    }

    if (!action) {
      setPropImage({ img: "", index: 0 });
    }
  };

  console.log(props.propertyImages);
  const toggleMedia = (index) => {
    setActiveState(index);
  };

  React.useEffect(() => {
    setActiveState(props.setTabNo);
  }, [props.setTabNo]);

  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.handleClose}
      TransitionComponent={Transition}
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        inset: 0,
        zIndex: 900,
        animation: `_7f0sek0 0.16s cubic-bezier(0.3,0,0.8,1)`,
        overflowY: "hidden",
      }}
    >
      <Box
        sx={{
          display: "contents",
          boxSizing: "border-box",
          overflowY: "hidden",
        }}
      >
        <AppBar
          sx={{
            position: "relative",
            display: "-webkit-inline-box",
            justifyContent: "space-between",
            padding: "8px",
            boxShadow: `0px 0px 8px #3227440a,0px 0px 1px #32274452,0px 8px 8px -8px #32274429`,
            zIndex: 1,
            backgroundColor: "#fff",
          }}
        >
          <Box sx={{ outline: "none", display: "flex" }}>
            <button
              className={activeState === 1 ? "media active-media" : "media"}
              onClick={() => toggleMedia(1)}
            >
              Images
            </button>
            <button
              className={activeState === 2 ? "media active-media" : "media"}
              onClick={() => toggleMedia(2)}
            >
              Floor Plan
            </button>
            <button
              className={activeState === 3 ? "media active-media" : "media"}
              onClick={() => toggleMedia(3)}
            >
              Virtual Tour
            </button>
            <button
              className={activeState === 4 ? "media active-media" : "media"}
              onClick={() => toggleMedia(4)}
            >
              Video
            </button>
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.handleClose}
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
        </AppBar>
        <div className="content-media">
          <div style={{ overflowY: "auto" }}>
            <div
              className={
                activeState === 1
                  ? "mediacontent  active-mediacontent"
                  : "mediacontent"
              }
            >
              {propImage.img && (
                <div
                  style={{
                    minWidth: "100%",
                    minHeight: "100vh",
                    background: "black",
                    position: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    zIndex: 100,
                  }}
                >
                  <button
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => imgAction()}
                  >
                    <CloseIcon
                      sx={{
                        height: "24px",
                        width: "24px",
                        fillRule: "evenodd",
                      }}
                    />
                  </button>
                  <button
                    onClick={() => imgAction("prev-img")}
                    style={{
                      backgroundColor: "rgb(0, 0, 0, 0.5)",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{
                        fontSize: 50,
                      }}
                    />
                  </button>
                  <img
                    src={propImage.img}
                    style={{
                      width: "70%",
                      height: "700px",
                    }}
                    alt={propImage.index}
                  />
                  <button
                    onClick={() => imgAction("next-img")}
                    style={{
                      backgroundColor: "rgb(0, 0, 0, 0.5)",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowForwardIosIcon
                      sx={{
                        fontSize: 50,
                      }}
                    />
                  </button>
                </div>
              )}
              <Box sx={{ width: "100%", height: "100%" }}>
                <ImageList variant="quilted" cols={4} rowHeight={200}>
                  {props.propertyImages?.map((item, index) => (
                    <ImageListItem
                      key={index}
                      cols={
                        pattern[
                          index -
                            Math.floor(index / pattern.length) * pattern.length
                        ].cols
                      }
                      rows={
                        pattern[
                          index -
                            Math.floor(index / pattern.length) * pattern.length
                        ].rows
                      }
                    >
                      <img
                        {...srcset(
                          item.imageUrl,
                          200,
                          pattern[
                            index -
                              Math.floor(index / pattern.length) *
                                pattern.length
                          ].rows,
                          pattern[
                            index -
                              Math.floor(index / pattern.length) *
                                pattern.length
                          ].cols
                        )}
                        alt={`Property ${index}`}
                        loading="lazy"
                        style={{ cursor: "pointer" }}
                        onClick={() => viewImage(item.imageUrl, index)}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </div>
            <div
              className={
                activeState === 2
                  ? "mediacontent  active-mediacontent"
                  : "mediacontent"
              }
            >
              <img
                {...srcset("/images/mortgage/property-floor-map.jpg", 50)}
                alt="Floor plan"
                loading="lazy"
                style={{ width: "100%", height: "90vh" }}
              />
            </div>
            <div
              className={
                activeState === 3
                  ? "mediacontent  active-mediacontent"
                  : "mediacontent"
              }
            >
              <div className="matterPortStyle">
                <CardMedia
                  component="iframe"
                  image={props.virtualLink}
                  allow="xr-spatial-tracking"
                  title="Virtual display"
                  sx={{ height: "100%" }}
                />
              </div>
            </div>
            <div
              className={
                activeState === 4
                  ? "mediacontent  active-mediacontent"
                  : "mediacontent"
              }
            >
              <CardMedia
                component="iframe"
                image="https://www.youtube.com/embed/ZVqIFtNoank"
                title="title"
                controls
                sx={{ height: "100%" }}
              />
            </div>
          </div>
          <div className="contact-card">
            <div style={{ gridAutoFlow: "row", display: "grid", gap: "16px" }}>
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
                    fontSize: "15px",
                    lineHeight: "16px",
                    borderWidth: "1px",
                    textAlign: "center",
                    borderStyle: "solid",
                    height: "30px",
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
                <p
                  style={{
                    margin: "7px 0 4px 0",
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
                        fontSize: "16px",
                        fontWeight: "normal",
                        margin: "0",
                        lineHeight: "24px",
                      }}
                    >
                      Ibeju Lekki, Lagos State
                    </h1>
                  </Box>
                </Box>
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
                      2 bath
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
                      2 bed
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
                      2 lounge
                    </p>
                  </li>
                </ul>

                <Button
                  variant="outlined"
                  sx={{
                    color: Colors.black,
                    border: `2px solid #322744`,
                    height: "50px",
                    columnGap: "8px",
                    "&:hover": {
                      backgroundColor: "#322744",
                      boxShadow: "none",
                      color: Colors.white,
                    },
                  }}
                >
                  Call estate agent
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: Colors.white,
                    border: `2px solid #322744`,
                    height: "50px",
                    columnGap: "8px",
                    marginTop: "16px",
                    "&:hover": {
                      backgroundColor: "#662dbe",
                      boxShadow: `0px 0px 12px #32274414,0px 0px 1px #32274452,0px 8px 16px -8px #322744cc`,
                      color: Colors.white,
                      cursor: "pointer",
                    },
                  }}
                >
                  Email estate agent
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </Dialog>
  );
}
