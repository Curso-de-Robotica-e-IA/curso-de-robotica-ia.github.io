import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AllTeam } from "./pages/allTeam";
import { AllTestimonials } from "./pages/allTestimonials";
import { AllGallery } from "./pages/allGallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Project2022 } from "./pages/projects/project2022";
import { Project } from "./components/projects/2022/project";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={< App />} />
      <Route path="/all-team" element={< AllTeam />} />
      <Route path="/all-testimonials" element={< AllTestimonials />} />
      <Route path="/all-gallery" element={< AllGallery />} />
      <Route path="/blogpost" element={< Project />} />
      <Route path="/project-0" element={< Project2022 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
