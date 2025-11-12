// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Category from "./pages/Category";
import Create from "./pages/Create";
import Download from "./pages/Download";
import MotivationGallery from "./pages/MotivationGallery"; // <-- import here

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<Category />} />
        <Route path="/create" element={<Create />} />
        <Route path="/download" element={<Download />} />
        <Route path="/motivation" element={<MotivationGallery />} /> {/* <-- add route */}
      </Routes>
    </Router>
  );
}

export default App;
