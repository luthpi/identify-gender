import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Home from "./pages/Home";
import Identify from "./pages/Identify";
import Navbar from "/src/components/Navbar";

export default function App(): React.FC {
  return (
    <Router>
      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/identify" element={<Identify />} />
      </SlideRoutes>
      <Navbar />
    </Router>
  );
}
