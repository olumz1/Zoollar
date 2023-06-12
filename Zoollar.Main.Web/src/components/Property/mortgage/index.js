import { Box } from "@mui/material";
import MortgageProviders from "./MortgageProviders";

const Mortgage = () => {
  return (
    <Box>
      <Box>
        <h2
          style={{
            marginBottom: "24px",
            color: "#322744",
            fontWeight: "600",
            fontSize: "22px",
            lineHeight: "32px",
          }}
        >
          Payment Options
        </h2>
        <Box>
          <MortgageProviders />
        </Box>
      </Box>
    </Box>
  );
};

export default Mortgage;
