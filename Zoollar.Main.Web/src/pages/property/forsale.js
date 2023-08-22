import { Container, ThemeProvider } from "@mui/material";
import theme from "../../styles/theme";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer/Footer";
import PropertyListing from "../../components/Property/PropertyListing";

function ForSale() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ background: "#fff", maxWidth: "100%" }}
        maxWidth={false}
        disableGutters
      >
        <Navbar />
        <PropertyListing />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default ForSale;
