import { Box } from "@mui/material";
import MortgageProviders from "./MortgageProviders";

const Mortgage = (props) => {
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
          <MortgageProviders
            propertyPaymentDetails={props.propertyPrice}
            loanCompanies={props.loanCompanies}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Mortgage;
