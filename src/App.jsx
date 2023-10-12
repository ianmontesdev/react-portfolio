import "./App.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
