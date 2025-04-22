// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Final Project | SmartBrain | Root Component Logic
// #####################################################################################################################

import React from "react";
import Navigation from "./components/header/Navigation.jsx";
import viteLogo from "/vite.svg"
import reactLogo from "./assets/react.svg"
import "./App.css"

// root component renderer #############################################################################################

function App() {
  return (
    <>
      <Navigation />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img className="logo" src={viteLogo} alt="Vite Logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img className="logo react" src={reactLogo} alt="React Logo" />
        </a>
      </div>
    </>
  )
}

// exports #############################################################################################################

export default App
