import { Routes, Route } from "react-router-dom";

import Spline from "@splinetool/react-spline";

import Header from "./components/Header.js";
import Landing from "./pages/landing/Landing.js";
import Work from "./pages/work/Work.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
