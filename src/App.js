import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "./Pages/Context/ContextProvider";
import Home from "./Pages/Home/Home/Home";
import SingIn from "./Pages/Share/SingIn/SingIn";
import SingUp from "./Pages/Share/SingUp/SingUp";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="singIn" element={<SingIn />} />
            <Route path="singup" element={<SingUp />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
