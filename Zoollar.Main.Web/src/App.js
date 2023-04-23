import { Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Promotion from "./components/promotions";
import Blog from "./components/Blog";
import Charts from "./components/chart";
import Footer from "./components/footer/Footer";
import TownAndCities from "./components/townsandcities";

function App() {
  useEffect(() => {
    document.title =
      "Zoollar - Nigerian Real Estate, To Buy, To Let and Property Evaluation";
  });
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ background: "#fff", maxWidth: "100%" }}
        maxWidth={false}
        disableGutters
      >
        <Navbar />
        <Banner />
        <Promotion />
        <Blog />
        <Charts
          aspect={2.4}
          title={"See the properties we have in your zone"}
        />
        <TownAndCities />
        {/**
         * 
        Discover Towns and Cities
        Popular Locations
        Footer
         */}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
