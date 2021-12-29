import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "./Pages/Context/ContextProvider";
import Home from "./Pages/Home/Home/Home";
import PrivateRoute from "./Pages/Share/PrivateRoute/PrivateRoute";
import SignIn from "./Pages/Share/SignIn/SignIn";
import SignUp from "./Pages/Share/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            {/* <PrivateRoute>
            <Route exact path="/" element={<Home />} />
            </PrivateRoute> */}
             <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
           
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
