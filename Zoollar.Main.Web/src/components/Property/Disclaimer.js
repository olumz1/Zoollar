import { Box, SvgIcon } from "@mui/material";
import { Colors } from "../../styles/theme";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

export default function Disclaimer(props) {
  return (
    <article style={{ maxWidth: "1300px", margin: "auto auto 24px auto" }}>
      <Box sx={{ padding: " 0 16px 16px", width: "calc(100% - 383px)" }}>
        <Box sx={{ marginTop: "16px" }}></Box>
        <Box sx={{ marginTop: "16px", padding: 0 }}>
          <h2
            style={{
              fontSize: "16px",
              letterSpacing: ".1px",
              lineHeight: "24px",
              margin: "0 0 8px",
              fontWeight: "550",
              color: "#322744",
            }}
          >
            Keeping yourself safe when looking for a home
          </h2>
          <p
            style={{
              letterSpacing: ".1px",
              lineHeight: "19px",
              margin: "8px 0",
              fontSize: "14px",
              color: "#322744",
            }}
          >
            Be sure to follow our most recent tips for avoiding fraud and scams
            when searching for real estate online.
          </p>
          <a
            style={{
              letterSpacing: ".1px",
              lineHeight: "19px",
              margin: "8px 0",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              "-webkit-box-orient": "vertical",
              color: Colors.primary,
              cursor: "pointer",
              textDecoration: "none",
            }}
            href="/disclaimer/safety-and-security/"
          >
            <span>
              Visit our security centre to find out more
              <SvgIcon
                sx={{
                  height: "8px",
                  width: "8px",
                  marginLeft: "4px",
                  marginTop: "2px",
                  overflow: "hidden",
                }}
              >
                <ArrowForwardIosOutlinedIcon />
              </SvgIcon>
            </span>
          </a>
        </Box>
        <Box sx={{ marginTop: "16px" }}></Box>
        <Box
          sx={{
            backgroundColor: "#e8e8eb",
            width: "100%",
            height: "1px",
            maxWidth: "1168px",
            margin: "auto",
          }}
        ></Box>
        <Box sx={{ position: "relative", marginTop: "24px" }}>
          <p
            style={{
              letterSpacing: ".1px",
              lineHeight: "19px",
              margin: "8px 0",
              fontSize: "14px",
              color: "#322744",
            }}
          >
            <b>Disclaimer</b> - Reference to Property <b>{props.propertyId}</b>.
            The details displayed about this property are an advertising for it.
            Zoollar.com disclaims all responsibility and liability for any
            inaccuracies or omissions in the advertisement or any attached,
            related, or third-party information and has no editorial control
            over the content. Property particulars are not included in this real
            estate advertisement.
            <b>{props.agent.Name}</b> is the source of the data and is
            responsible for its upkeep. To learn more about the aforementioned
            property, kindly get in touch with the developer or selling agent
            directly.
          </p>
        </Box>
        <Box sx={{ marginTop: "16px" }}></Box>
        <Box>
          <a
            style={{
              marginTop: "16px",
              borderTop: "1px solid #dedee2",
              padding: "16px 0px 0 0px",
              display: "block",
              color: "#6c6d7f",
              fontSize: "14px",
              "-webkit-box-orient": "vertical",
              cursor: "pointer",
              textDecoration: "none",
            }}
            target="_blank"
            href="/report/report-an-issue/propertyId="
          >
            <SvgIcon
              sx={{
                overflow: "hidden",
                fill: "#4f5064",
                width: "12px",
                height: "14px",
                marginRight: "8px",
                top: "3px",
                position: "relative",
              }}
            >
              <ReportProblemOutlinedIcon />
            </SvgIcon>
            <span>Report a problem with this property</span>
          </a>
        </Box>
      </Box>
    </article>
  );
}
