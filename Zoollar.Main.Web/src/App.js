import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ForSale from "./pages/property/forsale";
import ToLet from "./pages/property/tolet";
import Property from "./pages/property/property";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title =
      "Zoollar - Nigerian Real Estate, To Buy, To Let and Property Evaluation";
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" />
            <Route index element={<Home />} />
            <Route path="/property/forsale" element={<ForSale />} />
            <Route path="/property/tolet" element={<ToLet />} />
            <Route path="property/property/:id" element={<Property />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
