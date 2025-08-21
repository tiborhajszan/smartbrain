//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Back End Component Logic
//######################################################################################################################

import logoClarifai from "/src/assets/clarifai.svg";
import logoPostgre from "/src/assets/postgre.svg";
import logoNode from "/src/assets/nodejs.svg";
import "./BackEnd.css";

// back end component renderer #########################################################################################

export default function BackEnd() {

  // links array -------------------------------------------------------------------------------------------------------

  const linksArray = [
    {key: "bl1", href: "https://www.clarifai.com", text: "Clarifai API"},
    {key: "bl2", href: "https://www.postgresql.org", text: "PostgreSQL"},
    {key: "bl3", href: "https://expressjs.com", text: "Express.js"},
    {key: "bl4", href: "https://nodejs.org", text: "Node.js"},
  ];

  // icons array -------------------------------------------------------------------------------------------------------

  const iconsArray = [
    {key: "bi1", href: "https://www.clarifai.com", src: logoClarifai, alt: "Clarifai Logo"},
    {key: "bi2", href: "https://www.postgresql.org", src: logoPostgre, alt: "PostgreSQL Logo"},
    {key: "bi3", href: "https://nodejs.org", src: logoNode, alt: "Node.js Logo"}
  ];

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="footer-item back-end">
      <h2>Backend&nbsp;&nbsp;Stack</h2>
      <ul>{linksArray.map(link => {
        return <li key={link.key}><a href={link.href} target="_blank">{link.text}</a></li>;
      })}</ul>
      <div>{iconsArray.map(icon => {
        return <a key={icon.key} href={icon.href} target="_blank"><img src={icon.src} alt={icon.alt} /></a>;
      })}</div>
    </div>
  );
};
