import { Box, styled } from "@mui/material";
import "@fontsource/montez";

// container
export const BodyHomeContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateRows:
    "[header] auto [body] auto [body] auto [rail] auto [footer] auto",
  gridTemplateColumns:
    "[marginLeft] minmax(24px,auto) [content] minmax(auto,1224px) [marginRight] minmax(24px,auto)",
  gridTemplateAreas: `"header header header"
  "main main main"
  ". bottomRail ."
  "footer footer footer"`,
}));

export const BodyContentContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateRows:
    "[header] auto [breadcrumbs] auto [body] auto [rail] auto [footer] auto",
  gridTemplateColumns:
    "[marginLeft] minmax(24px,auto) [content] minmax(auto,1224px) [marginRight] minmax(24px,auto)",
  gridTemplateAreas: `"header header header"
          ". breadcrumbs ."
  ". main ."
  ". bottomRail ."
  "footer footer footer"`,
}));
