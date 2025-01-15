import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
