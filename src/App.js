import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Cards from "./pages/components/Cards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="components" element={<Components />} />
        <Route path="components/cards" element={<Cards />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
