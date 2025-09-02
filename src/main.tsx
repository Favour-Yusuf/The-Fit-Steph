import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import HomeWorkout9jaStepper from "./pages/HomeWorkout9ja.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="homeworkout9ja" element={<HomeWorkout9jaStepper/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
