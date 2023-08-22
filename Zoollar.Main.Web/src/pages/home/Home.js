import { Container, ThemeProvider } from "@mui/material";
import theme from "../../styles/theme";
import Navbar from "../../components/navbar";
import Banner from "../../components/Home/Banner";
import Promotion from "../../components/Home/promotions";
import Blog from "../../components/Home/Blog";
import Charts from "../../components/Home/chart";
import Footer from "../../components/footer/Footer";
import TownAndCities from "../../components/Home/townsandcities";
import RegAndLoginBanner from "../../components/Home/RegAndLoginBanner";

function Home() {
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
        <RegAndLoginBanner />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Home;
