// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Final Project | SmartBrain | Root Component Logic
// #####################################################################################################################

import React from "react";
import Logo from "./components/header/Logo.jsx";
import Navigation from "./components/header/Navigation.jsx";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

// root component renderer #############################################################################################

function App() {
  return (
    <>
      <Logo />
      <Navigation />
      <div className="build-logos">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="Vite Logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React Logo" />
        </a>
      </div>
    </>
  );
};

// exports #############################################################################################################

export default App;
