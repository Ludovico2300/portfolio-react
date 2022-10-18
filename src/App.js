import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Utils from "./pages/components/utils/Utils";
import Sections from "./pages/components/sections/Sections";
import Cards from "./pages/components/utils/Cards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="components" element={<Components />} />
        <Route path="components/utils" element={<Utils />} />
        <Route path="components/sections" element={<Sections />} />
        <Route path="components/utils/cards" element={<Cards />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
