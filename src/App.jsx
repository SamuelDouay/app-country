import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Global/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:slug" element={<Detail />} />
        {/* pagge 404 à faire */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
