// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Final Project :: Smart Brain :: Root Component Logic
// #####################################################################################################################

// imports -------------------------------------------------------------------------------------------------------------

import React from "react";
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Navigation from "./components/header/Navigation.jsx";

// root component renderer ---------------------------------------------------------------------------------------------

function App() {
  return (
    <>
      <Navigation />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

// exports -------------------------------------------------------------------------------------------------------------

export default App
