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

// import { GlobalStyle } from './globalStyles'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <GlobalStyle/> */}
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="jci-home" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="suscripciones" element={<Suscription />} />
          <Route path="actas" element={<Actas />} />
          <Route path="informes" element={<Informes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
