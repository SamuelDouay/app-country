import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Global/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  const [svg, setSvg] = useState("");

  function darckModeChangeSvg(darkMode) {
    setSvg(darkMode);
  }

  return (
    <BrowserRouter>
      <Header darkModeSvg={darckModeChangeSvg} />
      <Routes>
        <Route path="/" element={<Home svg={svg} />} />
        <Route path="/detail/:slug" element={<Detail />} />
        {/* pagge 404 à faire */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
