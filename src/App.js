import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "./Pages/Context/ContextProvider";
import Home from "./Pages/Home/Home/Home";
import ViewJob from "./Pages/Home/ViewJob/ViewJob";
import Header from "./Pages/Share/Header/Header";
import PrivateRoute from "./Pages/Share/PrivateRoute/PrivateRoute";
import SignIn from "./Pages/Share/SignIn/SignIn";
import SignUp from "./Pages/Share/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
        <Header></Header>
          <Routes>
             <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
            
          >  
            </Route>
            <Route path=":id" element={ <PrivateRoute><ViewJob /></PrivateRoute>} />
          
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
