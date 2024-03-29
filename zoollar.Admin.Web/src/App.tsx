import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import "./style/dark.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { propertyInputs, userInputs } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";

function App() {

  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
          </Route>
          <Route path="properties">
            <Route index element={<List />} />
            <Route path=":propertyId" element={<Single />} />
            <Route path="new" element={<New inputs={propertyInputs} title="Add New Property" />} />
          </Route>
          <Route path="blogs">
            <Route index element={<List />} />
            <Route path=":blogId" element={<Single />} />
            <Route path="new" element={<New inputs={propertyInputs} title="Add New Blog" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
