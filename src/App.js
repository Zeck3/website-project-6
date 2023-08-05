import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
