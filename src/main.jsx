import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home/Home';
import About from "./about/About";
import FeedBack from "./feedback/Feedback";
import Dealer from "./dealer/Dealer";
import Models from "./models/Models";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about/*" element={<About/>} />
          <Route path="/models" element={<Models />} />
          <Route path="/dealer" element={<Dealer />} />
          <Route path="/Feedback/*" element={<FeedBack />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
