import "./App.css";
import CvTemplate from "./pages/CvTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
////////////////////////////////////////////////
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/RezaGholami" />}></Route> */}
        <Route path="/" element={<CvTemplate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
