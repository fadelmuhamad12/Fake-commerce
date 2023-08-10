import "bootstrap/dist/css/bootstrap.min.css";
import Electronics from "./Pages/Electronics/Electronics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Jewelry from "./Pages/Jewelry/Jewelry";
import MensCloth from "./Pages/MensCloth/MensCloth";
import WomenCloth from "./Pages/WomenCloth/WomenCloth";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/Jewelry" Component={Jewelry}></Route>
          <Route exact path="/Electronics" Component={Electronics}></Route>
          <Route exact path="/MensCloth" Component={MensCloth}></Route>
          <Route exact path="/WomenCloth" Component={WomenCloth}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
