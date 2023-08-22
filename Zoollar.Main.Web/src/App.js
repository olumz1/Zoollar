import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ForSale from "./pages/property/forsale";
import ToLet from "./pages/property/tolet";
import Property from "./pages/property/property";

function App() {
  useEffect(() => {
    document.title =
      "Zoollar - Nigerian Real Estate, To Buy, To Let and Property Evaluation";
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path="/property/forsale" element={<ForSale />} />
        <Route path="/property/tolet" element={<ToLet />} />
        <Route path="property/property/:id" element={<Property />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
