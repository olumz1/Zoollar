import { Button, Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";

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
        {/**
        Buy Sell Rent Component
        House Chart in Nigerian zones
        Blogs top Listing
        Discover Towns and Cities
        Popular Locations
        Footer
  */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
