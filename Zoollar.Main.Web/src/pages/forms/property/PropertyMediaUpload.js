import { useState } from "react";
//import { FileUploader } from "react-drag-drop-files";
//import FileUpload from "react-mui-fileuploader";
import "./propertyimageupload.css";
import { Box, Button, TextField } from "@mui/material";
import YoutubeClip from "../../../components/common/YoutubeClip";

function PropertyMediaUpload({
  propertyImage,
  propertyVideo,
  propertyVideoUrl,
  virtualTourUrl,
  floorPlanImage,
  updateFields,
}) {
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFile, setVideoFiles] = useState([]);
  const [image, setImage] = useState();
  const [video, showVideo] = useState();

  const handleImageFileUploadError = (error) => {
    // Do something...
  };

  const handleImageFilesChange = (imageFiles) => {
    // Do something...

    updateFields({ propertyImage: imageFiles });
    console.log(imageFiles);
  };

  const handleVideoFileUploadError = (error) => {
    // Do something...
  };

  const handleVideoFilesChange = (videoFile) => {
    // Do something...
    updateFields({ propertyVideo: videoFile });
    console.log(videoFile);
  };

  return (
    <Box
      component="fieldset"
      sx={{
        border: "1px solid lightgrey",
        padding: "22px",
        borderRadius: ".5rem",
        marginBottom: "16px",
      }}
    >
      <legend style={{ color: "#A9A9A9", fontSize: "16px" }}>
        Media section
      </legend>
      {/* <FileUpload
        getBase64={false}
        multiFile={true}
        disabled={false}
        title=""
        id="propertyImage"
        //imageSrc="/dragdroplogo.png"
        header="Drag to drop your image"
        leftLabel="or"
        rightLabel="to add photos"
        buttonLabel="browse"
        buttonRemoveLabel="Remove all"
        maxFileSize={0}
        maxUploadFiles={0}
        maxFilesContainerHeight={357}
        acceptedType={"image/*"}
        errorSizeMessage={
          "fill it or remove it to use the default error message"
        }
        defaultFiles={propertyImage}
        Files={propertyImage}
        allowedExtensions={["jpg", "jpeg", "png", "tiff", "tif"]}
        onFilesChange={handleImageFilesChange}
        onError={handleImageFileUploadError}
        BannerProps={{ elevation: 0, variant: "outlined" }}
        onContextReady={(context) => {}}
        PlaceholderGridProps={{ md: 6 }}
        LabelsGridProps={{ md: 6 }}
        ContainerProps={{
          elevation: 0,
          variant: "elevation",
        }}
        placeholderImageDimension={{
          xs: { width: 128, height: 128 },
          sm: { width: 128, height: 128 },
          md: { width: 164, height: 164 },
          lg: { width: 256, height: 256 },
        }}
      /> */}
      {/* <FileUpload
        getBase64={false}
        multiFile={true}
        disabled={false}
        title=""
        id="propertyVideo"
        //imageSrc="/dragdroplogo.png"
        header="Drag to drop your video"
        leftLabel="or"
        rightLabel="to a video"
        buttonLabel="browse"
        buttonRemoveLabel="Remove all"
        maxFileSize={0}
        maxUploadFiles={1}
        defaultFiles={propertyVideo}
        value={propertyVideo}
        maxFilesContainerHeight={357}
        acceptedType={"video/*"}
        errorSizeMessage={
          "fill it or remove it to use the default error message"
        }
        allowedExtensions={["mp4", "mov", "wmv"]}
        onFilesChange={handleVideoFilesChange}
        onError={handleVideoFileUploadError}
        BannerProps={{ elevation: 0, variant: "outlined" }}
        onContextReady={(context) => {}}
        PlaceholderGridProps={{ md: 6 }}
        LabelsGridProps={{ md: 6 }}
        showPlaceholderImage={false}
        ContainerProps={{
          elevation: 0,
          variant: "elevation",
        }}
        placeholderImageDimension={{
          xs: { width: 128, height: 128 },
          sm: { width: 128, height: 128 },
          md: { width: 164, height: 164 },
          lg: { width: 256, height: 256 },
        }}
      /> */}
      {videoFile.length <= 0 && (
        <TextField
          label="Video URL"
          variant="outlined"
          fullWidth
          sx={{ marginRight: "16px", m: 1, width: "45rem" }}
          onChange={(e) => showVideo(e.target.value)}
        />
      )}

      {video ? (
        <video
          id="propertyVideoUrl"
          value={propertyVideoUrl}
          onChange={(e) => updateFields({ propertyVideoUrl: e.target.value })}
          width="400"
          style={{ margin: "10px", borderRadius: "4px" }}
          controls
        >
          <source src={video} />
          Your browser does not support HTML5 video.
        </video>
      ) : (
        //todo: integrate youtube video later
        // <YoutubeClip embedId="rokGy0huYEA"></YoutubeClip>
        <></>
      )}

      <TextField
        id="virtualTourUrl"
        label="Virtual tour URL"
        value={virtualTourUrl}
        onChange={(e) => updateFields({ virtualTourUrl: e.target.value })}
        variant="outlined"
        fullWidth
        sx={{ marginRight: "16px", m: 1, width: "45rem" }}
      />
      {/* <FileUpload
        getBase64={false}
        multiFile={true}
        disabled={false}
        id="floorPlanImage"
        title=""
        //imageSrc="/dragdroplogo.png"
        header="Drag to drop your floor plan image"
        leftLabel="or"
        rightLabel="to add an image"
        buttonLabel="browse"
        buttonRemoveLabel="Remove all"
        maxFileSize={0}
        maxUploadFiles={1}
        value={floorPlanImage}
        maxFilesContainerHeight={357}
        acceptedType={"image/*"}
        errorSizeMessage={
          "fill it or remove it to use the default error message"
        }
        allowedExtensions={["jpg", "jpeg", "png", "tiff", "tif"]}
        onFilesChange={handleVideoFilesChange}
        onError={handleVideoFileUploadError}
        BannerProps={{ elevation: 0, variant: "outlined" }}
        onContextReady={(context) => {}}
        onChange={(e) => updateFields({ floorPlanImage: e.target.value })}
        PlaceholderGridProps={{ md: 6 }}
        LabelsGridProps={{ md: 6 }}
        showPlaceholderImage={false}
        ContainerProps={{
          elevation: 0,
          variant: "elevation",
        }}
        placeholderImageDimension={{
          xs: { width: 128, height: 128 },
          sm: { width: 128, height: 128 },
          md: { width: 164, height: 164 },
          lg: { width: 256, height: 256 },
        }}
      /> */}
    </Box>
  );
}

export default PropertyMediaUpload;
