import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Home from "./pages/Home";
import Identify from "./pages/Identify";
import Result from "./pages/Result";
import Navbar from "/src/components/Navbar";

export default function App(): React.FC {
  return (
    <Router basename={import.meta.env.PUBLIC_URL}>
      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/identify" element={<Identify />} />
        <Route path="/result" element={<Result />} />
      </SlideRoutes>
      <Navbar />
    </Router>
  );
}
