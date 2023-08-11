import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingScreen from "./Components/Fallback"

const Yorushika = lazy(() => import("./Routes/Yorushika"))
const ThoughtCrime = lazy(() => import("./Routes/ThoughtCrime"))
const Plagiarism = lazy(() => import("./Routes/Plagiarism"))
const Prostitution = lazy(() => import("./Routes/Prostitution"))
const TheSettingSun = lazy(() => import("./Routes/TheSettingSun"))
const ThatsWhyIGaveUpOnMusic = lazy(() => import("./Routes/ThatsWhyIGaveUpOnMusic"))

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen/>}>
        <Routes>
          <Route path="/" element={<Yorushika/>}></Route>
          <Route path="/thoughtCrime" element={<ThoughtCrime/>}></Route>
          <Route path="/plagiarism" element={<Plagiarism/>}></Route>
          <Route path="/prostitution" element={<Prostitution/>}></Route>
          <Route path="/theSettingSun" element={<TheSettingSun/>}></Route>
          <Route path="/thatsWhyIGaveUpOnMusic" element={<ThatsWhyIGaveUpOnMusic/>}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
