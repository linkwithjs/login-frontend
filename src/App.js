import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route>
            <Route
              index
              element={
                user && user._id ? (
                  <Homepage setLoginUser={setLoginUser} />
                ) : (
                  <Login setLoginUser={setLoginUser} />
                )
              }
            />
            <Route
              path='/login'
              element={<Login setLoginUser={setLoginUser} />}
            />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
