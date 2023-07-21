import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./fullscreendialog.css";
import { pattern } from "../../data/property";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

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
  console.log(props.propertyImages);
  const toggleMedia = (index) => {
    console.log("I am in");
    setActiveState(index);
  };

  React.useEffect(() => {
    setActiveState(props.setTabNo);
  }, [props.setTabNo]);

  console.log(props.setTabNo);
  console.log("hhh", activeState);
  console.log(props);
  console.log("hhh");
  return (
    <div>
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
        }}
      >
        <Box sx={{ display: "contents", boxSizing: "border-box" }}>
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
                Virtual Tour
              </button>
              <button
                className={activeState === 3 ? "media active-media" : "media"}
                onClick={() => toggleMedia(3)}
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
                <Box sx={{ width: "100%", height: "100%" }}>
                  <SimpleReactLightbox>
                    <SRLWrapper>
                      <ImageList variant="quilted" cols={4} rowHeight={200}>
                        {props.propertyImages?.map((item, index) => (
                          <ImageListItem
                            key={index}
                            cols={
                              pattern[
                                index -
                                  Math.floor(index / pattern.length) *
                                    pattern.length
                              ].cols
                            }
                            rows={
                              pattern[
                                index -
                                  Math.floor(index / pattern.length) *
                                    pattern.length
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
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </SRLWrapper>
                  </SimpleReactLightbox>
                </Box>
              </div>

              <div
                className={
                  activeState === 2
                    ? "mediacontent  active-mediacontent"
                    : "mediacontent"
                }
              >
                <div className="matterPortStyle">
                  <iframe
                    width="90%"
                    height="90%"
                    src={props.virtualLink}
                    allowFullScreen
                    allow="xr-spatial-tracking"
                    title="Virtual display"
                    display="block"
                  />
                </div>
              </div>

              <div
                className={
                  activeState === 3
                    ? "mediacontent  active-mediacontent"
                    : "mediacontent"
                }
              >
                third tab
              </div>
            </div>
            <div className="contact-card"></div>
          </div>
        </Box>
      </Dialog>
    </div>
  );
}
