import { Box } from "@mui/material";

export default function MortgageCalculator() {
  return (
    <form>
      <Box
        sx={{
          gridTemplateColumns: "repeat(2,minmax(min-content,1fr))",
          display: "grid",
          gridRowGap: "16px",
          gridColumnGap: "16px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ paddingBottom: "4px" }}>
            <label style={{ fontWeight: "600" }}>Price</label>
          </Box>
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
                placeholder="Price"
                min="0.0"
                step="1000"
                type="number"
                name="price"
                id="price"
                value="250000000"
                style={{
                  color: "#0000",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  padding: "12px",
                  height: "48px",
                  width: "100%",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#322744ad",
                  textOverflow: "ellipsis",
                }}
              ></input>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
}
