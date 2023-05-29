import { Container, ThemeProvider } from "@mui/material";
import theme from "../../styles/theme";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer/Footer";
import PropertyDetail from "../../components/Property/PropertyDetails";
import { useParams } from "react-router-dom";

function Property(props) {
  const params = useParams();
  const id = params.id;
  console.log(id);
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ background: "#fff", maxWidth: "100%" }}
        maxWidth={false}
        disableGutters
      >
        <Navbar />
        <PropertyDetail />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Property;
