import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Alerts from "./Components/Layout/Alerts";
import PrivateRoute from "./Components/Routing/PrivateRoute";

import setAuthToken from "./utils/setAuthToken";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token);
} 

const App = () => {
  return (
    <AuthState>
  <ContactState>
    <AlertState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Alerts />
            <Routes>
              <Route path="/" element={<PrivateRoute element={<Home />} />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </AlertState>
  </ContactState>
</AuthState>

  );
}

export default App;
