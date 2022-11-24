import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";
import Utils from "./pages/components/utils/Utils";
import Sections from "./pages/components/sections/Sections";
import Cards from "./pages/components/utils/Cards";
import FoundMe from "./pages/FoundMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/components" element={<Components />} />
        <Route path="/projects/components/utils" element={<Utils />} />
        <Route path="/projects/components/utils/sections" element={<Sections />} />
        <Route path="/projects/components/utils/cards" element={<Cards />} />
        <Route path="about" element={<About />} />
        <Route path="foundme" element={<FoundMe />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
