import Home from "./pages/Home";
import Detect from "./pages/Detect";
import "./styles.css";
import NavBar from "./components/NavBar";
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import AboutDeveloper from "./pages/AboutDeveloper";


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="detect" element={<Detect />} />
        <Route path="about" element={<AboutDeveloper />} />
        <Route path="*" element={<Navigate to="home"/>} />
      </Routes>
    </BrowserRouter>
  );
}
