import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ContactState from "./context/contact/ContactState";
import './App.css';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" Component={Home}   />
              <Route path="/about" Component={About}   />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
