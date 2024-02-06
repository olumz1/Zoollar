import { Box, SvgIcon } from "@mui/material";
import { Colors } from "../../styles/theme";
import formatter from "../common/CurrencyFormatter";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import getPropertyAddress from "../common/GetPropertyAddress";

export default function SimilarPropertiesLising(props) {
  return (
    <Box
      sx={{
        marginRight: "18px",
        width: "240px",
        flexShrink: 0,
        height: "100%",
        position: "relative",
        transitionProperty: "transform",
      }}
    >
      <a
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          "-webkit-box-orient": "vertical",
          color: "#11828d",
          cursor: "pointer",
          textDecoration: "none",
        }}
        target="_blank"
        rel="noreferrer"
        href={"../property/" + props.property.id}
      >
        <li>
          <Box
            sx={{
              width: "240px",
              boxShadow: `0 2px 4px 0 rgba(0,0,0,.1)`,
              borderRadius: "8px",
              margin: "0 0 4px 0",
            }}
          >
            <Box
              sx={{
                display: "block",
                position: "relative",
                height: "243px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "135px",
                    display: "block",
                    position: "relative",
                    borderRadius: "8px 8px 0 0",
                    objectFit: "cover",
                  }}
                  src={props.property.propertyData.propertyImage[0].imageUrl}
                  alt="missing caption"
                  loading="lazy"
                ></img>
              </Box>
              <p
                style={{
                  color: Colors.primary,
                  fontSize: "18px",
                  padding: "4px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {formatter(props.property.propertyData.propertyPayment.price)}
              </p>
              <Box
                sx={{
                  padding: "0 16px 8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <p
                  style={{
                    maxWidth: "95px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    color: "#322744",
                    fontSize: "14px",
                    lineHeight: "20px",
                    margin: "0",
                  }}
                >
                  {props.property.propertyData.propertyType}
                </p>
                <p
                  style={{
                    display: "flex",
                    color: "#322744",
                    fontSize: "14px",
                    lineHeight: "20px",
                    margin: 0,
                  }}
                >
                  <span>
                    <SvgIcon
                      sx={{
                        width: "16px",
                        height: "16px",
                        marginRight: "12px",
                        position: "relative",
                        top: "2px",
                        stroke: "black",
                        strokeWidth: "0",
                      }}
                    >
                      <BedOutlinedIcon />
                    </SvgIcon>
                    {props.property.propertyData.propertyDetails.noOfBeds}
                  </span>
                  <span>
                    <span
                      style={{
                        borderRight: "1px solid #6c6d7f",
                        margin: "0 12px",
                      }}
                    ></span>
                    <SvgIcon
                      sx={{
                        width: "16px",
                        height: "16px",
                        marginRight: "12px",
                        position: "relative",
                        top: "2px",
                        stroke: "black",
                        strokeWidth: "0",
                      }}
                    >
                      <BathtubOutlinedIcon />
                    </SvgIcon>
                    {props.property.propertyData.propertyDetails.noOfBathrooms}
                  </span>
                </p>
              </Box>
              <p
                style={{
                  color: "#322744",
                  fontSize: "12px",
                  padding: "0 16px 10px",
                  lineHeight: "16px",
                  height: "36px",
                  display: "-webkit-box",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  "-webkit-line-clamp": 2,
                  "-webkit-box-orient": "vertical",
                }}
              >
                {getPropertyAddress(
                  props.property.propertyData.propertyDetails.address
                )}
              </p>
            </Box>
          </Box>
        </li>
      </a>
    </Box>
  );
}
