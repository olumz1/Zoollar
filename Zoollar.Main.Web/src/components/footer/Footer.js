import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { FooterTitle } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#f7f6f5",
        color: Colors.black,
        marginTop: "230px",
        p: { sx: 4, ml: 10 },
        pt: 8,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={3} justifyContent={"center"}>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            boxSizing: "border-box",
            marginLeft: "80px",
            marginRight: "80px",
          }}
        >
          <ListItem>
            <FooterTitle variant="body1">For sale</FooterTitle>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">New homes</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">
                Commercial properties for sale
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Find estate agents</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Land for sale</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Latest properties</Typography>
            </ListItemText>
          </ListItem>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            boxSizing: "border-box",
            marginLeft: "80px",
            marginRight: "80px",
          }}
        >
          <ListItem>
            <FooterTitle variant="body1">To rent</FooterTitle>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Latest properties</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">New homes</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">
                Commercial properties to rent
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Find letting agents</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Short Lets</Typography>
            </ListItemText>
          </ListItem>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            boxSizing: "border-box",
            marginLeft: "80px",
            marginRight: "80px",
          }}
        >
          <ListItem>
            <FooterTitle variant="body1">Latest on Zoollar</FooterTitle>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Shared Ownership</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Buying guides</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Selling guides</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Renting guides</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Short Lets</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Renovation guides</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Construction guides</Typography>
            </ListItemText>
          </ListItem>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            boxSizing: "border-box",
            marginLeft: "80px",
            marginRight: "80px",
          }}
        >
          <ListItem>
            <FooterTitle variant="body1">Lets do business</FooterTitle>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">List with Zoollar</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography variant="caption2">Partner with Zoollar</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Divider
        sx={{
          padding: "8px 8px 10px",
          width: "80%",
          margin: `0 auto`,
          height: "5px",
        }}
      />
      <Grid container spacing={3} justifyContent={"center"} marginTop={"35px"}>
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          <ListItem sx={{ margin: "auto", whiteSpace: "nowrap" }}>
            <FooterTitle variant="body1">Privacy</FooterTitle>
          </ListItem>
          <ListItem sx={{ margin: "auto", whiteSpace: "nowrap" }}>
            <FooterTitle variant="body1">Contact us</FooterTitle>
          </ListItem>
          <ListItem sx={{ margin: "auto", whiteSpace: "nowrap" }}>
            <FooterTitle variant="body1">About Zoollar</FooterTitle>
          </ListItem>
          <ListItem sx={{ margin: "auto", whiteSpace: "nowrap" }}>
            <FooterTitle variant="body1">Careers</FooterTitle>
          </ListItem>
          <ListItem sx={{ margin: "auto", whiteSpace: "nowrap" }}>
            <FooterTitle variant="body1">Display advertising</FooterTitle>
          </ListItem>
          <ListItem sx={{ margin: "auto", whiteSpace: "nowrap" }}>
            <FooterTitle variant="body1">Sitemap</FooterTitle>
          </ListItem>
          <ListItem sx={{ margin: "auto", whiteSpace: "nowrap" }}>
            <FooterTitle variant="body1">Terms</FooterTitle>
          </ListItem>
        </List>

        <Box sx={{ mt: 1, ml: 30, color: Colors.primary }}>
          <FacebookIcon sx={{ mr: 3 }} />
          <TwitterIcon sx={{ mr: 3 }} />
          <InstagramIcon sx={{ mr: 3 }} />
          <YoutubeIcon sx={{ mr: 3 }} />
          <LinkedinIcon sx={{ mr: 2 }} />
        </Box>
      </Grid>
    </Box>
  );
}
