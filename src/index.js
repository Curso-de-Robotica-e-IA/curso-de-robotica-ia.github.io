import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AllTeam } from "./pages/allTeam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Project0 } from "./pages/projects/project0";
import { Project1 } from "./pages/projects/project1";
import { Project2 } from "./pages/projects/project2";
import { Project3 } from "./pages/projects/project3";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/all-team" element={<AllTeam/>} />
    <Route path="/project-0" element={<Project0/>} />
    <Route path="/project-1" element={<Project1/>} />
    <Route path="/project-2" element={<Project2/>} />
    <Route path="/project-3" element={<Project3/>} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
