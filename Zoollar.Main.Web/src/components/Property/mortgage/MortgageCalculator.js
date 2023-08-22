import * as React from "react";
import { Box, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import formatter from "../../common/CurrencyFormatter";
import removeCurrencySymbol from "../../common/RemoveCurrencySymbol";

export default function MortgageCalculator(props) {
  let propertyPaymentDetails = props?.propertyPaymentDetails?.propertyPayment;
  let loanCompany = props?.propertyPaymentDetails?.loanCompany;
  const [age, setAge] = React.useState(25);
  const [interestInput, setInterestInput] = React.useState(
    loanCompany[0]?.rate
  );
  const repaymentYears = Array.from({ length: 40 }, (_, i) => i + 1);
  const calculateDefaultDeposit = (price) => {
    return Math.round((10 * price) / 100);
  };
  const [depositInput, setDepositInput] = React.useState(
    calculateDefaultDeposit(propertyPaymentDetails?.price)
  );
  const [propertyPriceInput, setpropertyPriceInput] = React.useState(
    propertyPaymentDetails?.price
  );

  const calculateDeposit = (deposit, total) => {
    return Math.round((deposit / total) * 100);
  };

  const calculateMortgage = (interest, principal, deposit, term) => {
    let calculatedInterest = interest / 100;
    let rate = calculatedInterest / 12;
    let noOfTotalPayment = term * 12;
    let percentagePlusOne = rate + 1;
    let exponentialOperation = percentagePlusOne ** noOfTotalPayment;
    let numerator = rate * exponentialOperation;
    let denominator = exponentialOperation - 1;
    let division = numerator / denominator;
    let loanAmount = principal - deposit;
    let mortgage = loanAmount;
    let monthlyRepayments = Math.round(mortgage * division);
    return monthlyRepayments;
  };

  return (
    <div>
      <form style={{ padding: "10px" }}>
        <Box
          sx={{
            gridTemplateColumns: "repeat(2,minmax(min-content,1fr))",
            display: "grid",
            gridRowGap: "16px",
            gridColumnGap: "16px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box sx={{ paddingBottom: "4px" }}>
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Price
              </label>
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
                  name="price"
                  id="price"
                  value={formatter(propertyPriceInput)}
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
                  }}
                  onInput={(e) => setpropertyPriceInput(e.target.value)}
                ></input>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ paddingBottom: "4px" }}>
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                {`Deposit (${calculateDeposit(
                  removeCurrencySymbol(depositInput),
                  removeCurrencySymbol(propertyPriceInput)
                )}%)`}
              </label>
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
                  placeholder="Deposit amount"
                  min="0.0"
                  step="1000"
                  name="deposit"
                  id="deposit"
                  value={formatter(depositInput)}
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
                  }}
                  onInput={(e) => setDepositInput(e.target.value)}
                ></input>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", rowGap: "4px", flexDirection: "column" }}>
            <label
              style={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Repayment term
            </label>
            <FormControl
              sx={{
                display: "flex",
                position: "relative",
                rowGap: "4px",
                flexDirection: "column",
                flex: "1 1",
              }}
            >
              <Select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  color: "#322744",
                  textAlign: "left",
                  display: "flex",
                  columnGap: "8px",
                  backgroundColor: "#fff",
                  height: "48px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#322744ad",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              >
                {repaymentYears.map((year) => (
                  <MenuItem value={year}>
                    {year === 1 ? `${year} year` : `${year} years`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ paddingBottom: "4px" }}>
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Interest rate
              </label>
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
                  placeholder="Interest rate"
                  min="0.01"
                  step="c.c1"
                  type="number"
                  name="rate"
                  id="rate"
                  value={interestInput}
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
                  }}
                  onInput={(e) => setInterestInput(e.target.value)}
                ></input>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
      <Box>
        <Box
          sx={{
            borderTop: "1px solid #d1d0cf",
            position: "relative",
            padding: "0 !important",
            ":before": {
              position: "absolute",
              left: "50%",
              bottom: "-8px",
              width: "16px",
              height: "16px",
              backgroundColor: "#fff",
              borderWidth: "1px 0 0 1px",
              borderStyle: "solid",
              borderColor: "#d1d0cf",
              marginLeft: "-6px",
              transform: "rotate(-135deg) scale(1)",
              content: "''",
            },
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            padding: "16px 16px 0 16px",
            textAlign: "center",
            background: "#F4F4F5",
          }}
        >
          <p
            style={{
              textAlign: "right",
              marginRight: "10px",
              color: "#53535F",
              marginBottom: "8px",
              width: "100%",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Monthly repayments:
          </p>
          <span
            style={{
              textAlign: "left",
              marginLeft: "30px",
              fontSize: "24px",
              color: "#262637",
              width: "100%",
              border: "none",
              display: "inline-block",
              background: "transparent",
              fontWeight: "bold",
            }}
          >
            {formatter(
              calculateMortgage(
                interestInput,
                removeCurrencySymbol(propertyPriceInput),
                removeCurrencySymbol(depositInput),
                age
              )
            )}
          </span>
        </Box>
        <Box
          sx={{
            position: "relative",
            ":before": {
              position: "absolute",
              left: "50%",
              bottom: "-8px",
              width: "16px",
              height: "16px",
              backgroundColor: "#F4F4F5",
              borderWidth: "1px 0 0 1px",
              borderStyle: "solid",
              borderColor: "#D5D5D5",
              marginLeft: "-6px",
              transform: "rotate(-135deg) scale(1)",
              content: "''",
            },
          }}
        ></Box>
        <Box
          sx={{
            background: "#F4F4F5",
            paddingBottom: "15px",
            borderBottomRightRadius: "10px",
          }}
        >
          <Box
            sx={{
              flexDirection: "column",
              justifyContent: "space-between",
              display: "flex",
              textAlign: "center",
              padding: "10px",
              margin: "0 16px",
              background: "white",
              borderRadius: "2px",
              boxShadow: `0 4px 8px 0 rgba(38,38,55,0.24), 0 0 1px 0 rgba(38,38,55,0.32)`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                textAlign: "left",
                marginBottom: "2px",
              }}
            >
              <a
                style={{
                  height: "42px",
                  backgroundColor: "#8046f1",
                  color: "#fff",
                  transitionDuration: "0.16s",
                  transitionTimingFunction: `cubic-bezier(0.3,0,0.8,1)`,
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  textDecoration: "none",
                  transitionProperty: "transform,box-shadow,background-color",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "4px",
                  textAlign: "center",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
                target="_blank"
                rel="noreferrer"
                href={loanCompany[0].mortgageUrl}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    columnGap: "8px",
                  }}
                >
                  How much credit could I get?
                </Box>
              </a>
              <Box
                sx={{
                  paddingTop: 0,
                  columnGap: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "100%",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                <p>In partnership with:</p>
                <a
                  style={{ display: "flex" }}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  href={loanCompany[0].mortgageUrl}
                >
                  <img
                    style={{ width: "42px", height: "42px" }}
                    src={loanCompany[0].logo}
                    alt={`${loanCompany[0].logo} logo`}
                  ></img>
                </a>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "8.5px", wordBreak: "initial" }}>
                These results are for a repayment mortgage and are only intended
                as a guide. Make sure you obtain accurate figures from your
                lender before committing to any mortgage. Your home may be
                repossessed if you do not keep up repayments on a mortgage.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
