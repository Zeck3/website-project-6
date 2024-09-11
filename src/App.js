import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Fallback from "./Components/Fallback";

const Yorushika = lazy(() => import("./Routes/Yorushika"));
const About = lazy(() => import("./Routes/About"));
const ThoughtCrime = lazy(() => import("./Routes/ThoughtCrime"));
const Plagiarism = lazy(() => import("./Routes/Plagiarism"));
const Prostitution = lazy(() => import("./Routes/Prostitution"));
const TheSettingSun = lazy(() => import("./Routes/TheSettingSun"));
const ThatsWhyIGaveUpOnMusic = lazy(() => import("./Routes/ThatsWhyIGaveUpOnMusic"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Yorushika />} />
          <Route path="/about" element={<About />} />
          <Route path="/thoughtCrime" element={<ThoughtCrime />} />
          <Route path="/plagiarism" element={<Plagiarism />} />
          <Route path="/prostitution" element={<Prostitution />} />
          <Route path="/theSettingSun" element={<TheSettingSun />} />
          <Route path="/thatsWhyIGaveUpOnMusic" element={<ThatsWhyIGaveUpOnMusic />}/>
        </Routes>
      </Suspense>
    </Router>
  );
}
