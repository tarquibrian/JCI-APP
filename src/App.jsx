import { useState } from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import Suscription from "./pages/Suscription/Suscription";
import Informes from "./pages/Informes/Informes";
import Actas from "./pages/Actas";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";

import WithPrivateRoute from "./routes/PrivateRoute";

// import { GlobalStyle } from './globalStyles'
import { AuthProvider } from "./context/authContext";

function App() {
  // console.log("process", import.meta.env);
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <GlobalStyle/> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/jci-home"
            element={
              <WithPrivateRoute>
                <Profile />
              </WithPrivateRoute>
            }
          />
          <Route
            path="users"
            element={
              <WithPrivateRoute>
                <Users />
              </WithPrivateRoute>
            }
          />
          <Route
            path="suscripciones"
            element={
              <WithPrivateRoute>
                <Suscription />
              </WithPrivateRoute>
            }
          />
          <Route
            path="actas"
            element={
              <WithPrivateRoute>
                <Actas />
              </WithPrivateRoute>
            }
          />
          <Route
            path="informes"
            element={
              <WithPrivateRoute>
                <Informes />
              </WithPrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
