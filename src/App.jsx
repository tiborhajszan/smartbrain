//######################################################################################################################
//  Zero To Mastery Academy
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Root Component Logic
//######################################################################################################################

import React from "react";
import Logo from "./components/header/Logo.jsx";
import NavBar from "./components/header/NavBar.jsx";
import InputField from "./components/main/InputField.jsx";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

// root component renderer #############################################################################################

function App() {
  return (
    <>
      <NavBar />
      <Logo className="app-logo" />
      <InputField />
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
