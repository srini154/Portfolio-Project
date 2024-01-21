import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Portfolio-Project" Component={Landing} />
        <Route exact path="/Portfolio-Project/about" Component={About} />
        <Route exact path="/Portfolio-Project/projects" Component={Projects} />
        <Route exact path="/Portfolio-Project/contact" Component={Contact} />
        <Route path="*" element={<p>Invalid Path</p>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
