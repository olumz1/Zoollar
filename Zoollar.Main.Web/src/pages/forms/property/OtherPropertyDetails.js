import { Box } from "@mui/material";

export default function OtherPropertyDetails() {
  return (
    <>
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
          Payment options
        </legend>
      </Box>
    </>
  );
}
