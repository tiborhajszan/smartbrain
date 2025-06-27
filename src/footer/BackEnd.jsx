//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Back End Component Logic
//######################################################################################################################

import logoNode from "/src/assets/nodejs.svg";
import logoPostgre from "/src/assets/postgre.svg";
import logoClarifai from "/src/assets/clarifai.svg";
import "./BackEnd.css";

// back end component renderer #########################################################################################

export default function BackEnd() {

  // backend stack -----------------------------------------------------------------------------------------------------

  const backendArray = [
    {key: "be1", href: "https://www.clarifai.com", text: "Clarifai API"},
    {key: "be2", href: "https://www.postgresql.org", text: "PostgreSQL"},
    {key: "be3", href: "https://expressjs.com", text: "Express.js"},
    {key: "be4", href: "https://nodejs.org", text: "Node.js"},
  ];

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="back-end">
      <p>Backend&nbsp;&nbsp;Stack</p>
      <ul>{backendArray.map(tool => {
        return <li key={tool.key}><a href={tool.href} target="_blank">{tool.text}</a></li>;
      })}</ul>
      <div>
        <a href="https://www.clarifai.com" target="_blank"><img src={logoClarifai} alt="Clarifai Logo" /></a>
        <a href="https://www.postgresql.org" target="_blank"><img src={logoPostgre} alt="PostgreSQL Logo" /></a>
        <a href="https://nodejs.org" target="_blank"><img src={logoNode} alt="Node.js Logo" /></a>
      </div>
    </div>
  );
};
