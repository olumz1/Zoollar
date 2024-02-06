import { Container, ThemeProvider } from "@mui/material";
import theme from "../../styles/theme";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer/Footer";
import PropertyListing from "../../components/Property/PropertyListing";
import { BodyContentContainer } from "../../styles/root";

function ForSale() {
  return (
    <BodyContentContainer>
      <Navbar />
      <PropertyListing />
      <Footer />
    </BodyContentContainer>
  );
}

export default ForSale;
