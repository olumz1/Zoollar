import { Box, Button } from "@mui/material";
import { Colors } from "../../../styles/theme";
import { MultiStepProgressBar } from "../../../components/common/MultiStepProgressBar";

export function PropertyFormHeader(props) {
  return (
    <header
      style={{
        padding: "16px 0",
        background: "#f7f6f5",
        marginBottom: "16px",
      }}
    >
      <section
        style={{
          maxWidth: "48rem",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          margin: "0 auto 72px",
          marginBottom: 0,
          position: "relative",
          display: "block",
          color: "#242d3d",
        }}
      >
        <section style={{ display: "flex", alignItems: "center" }}>
          {/* <h1
            style={{
              fontSize: "1.625rem",
              lineHeight: "1.2307692308",
              fontVariationSettings: `"wght" 300`,
              fontFamily: `"ATVFabriga",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif!important`,
            }}
          >
            Your ad - Incomplete step {props.currentStepIndex} of{" "}
            {props.totalSteps}
          </h1> */}

          <MultiStepProgressBar></MultiStepProgressBar>

          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "right",
              marginTop: 0,
              marginLeft: "auto",
              maxWidth: "25%",
              paddingLeft: "12px",
              borderLeft: "1px solid #d1d0cf",
            }}
          >
            <p
              style={{
                fontSize: ".875rem",
                lineHeight: 1.4285714286,
                fontVariationSettings: '"wght" 400',
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontWeight: 700,
              }}
            >
              Emmanuel Fabelurin
            </p>
            <p
              style={{
                fontSize: ".875rem",
                lineHeight: 1.4285714286,
                fontVariationSettings: '"wght" 400',
                marginTop: 0,
              }}
            >
              Not you?{" "}
              <Button
                href="/"
                sx={{
                  fontSize: ".875rem",
                  lineHeight: 1.4285714286,
                  fontVariationSettings: '"wght" 400',
                  textDecoration: "underline",
                  borderRadius: "2px",
                  cursor: "pointer",
                  outline: "none",
                  textAlign: "center",
                  transition: `all .25s ease-in-out`,
                  background: "none",
                  textTransform: "capitalize",
                }}
              >
                Sign in
              </Button>
            </p>
          </section>
        </section>
      </section>
    </header>
  );
}
