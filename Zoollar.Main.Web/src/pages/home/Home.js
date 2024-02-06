import { Box } from "@mui/material";
import Navbar from "../../components/navbar";
import Banner from "../../components/Home/Banner";
import Promotion from "../../components/Home/promotions";
import Blog from "../../components/Home/Blog";
import Charts from "../../components/Home/chart";
import Footer from "../../components/footer/Footer";
import TownAndCities from "../../components/Home/townsandcities";
import RegAndLoginBanner from "../../components/Home/RegAndLoginBanner";
import { BodyHomeContainer } from "../../styles/root";

function Home() {
  return (
    <BodyHomeContainer>
      <Navbar />
      <main style={{ gridArea: "main" }}>
        <Banner />
        <Box
          sx={{
            gridColumnGap: "24px",
            paddingLeft: "24px",
            paddingRight: "24px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(12,minmax(0,1fr))`,
              gridAutoRows: "max-content",
              width: "100%",
              maxWidth: "1224px",
              gridColumnGap: "16px",
            }}
          >
            <Box
              sx={{
                rowGap: "72px",
                gridColumn: "span 12",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Promotion />
              <Blog />
              <Box
                sx={{
                  overflow: "hidden",
                  background: "#f6f9fa",
                  borderRadius: "10px",
                }}
              >
                <Charts
                  aspect={2.4}
                  title={"See the properties we have in your zone"}
                />
              </Box>
              <Box
                sx={{
                  overflow: "visible",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  display: "block",
                  position: "relative",
                }}
              >
                <TownAndCities />
              </Box>

              <RegAndLoginBanner />
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </BodyHomeContainer>
  );
}

export default Home;
