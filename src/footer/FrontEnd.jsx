//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Front End Component Logic
//######################################################################################################################

import viteLogo from "/src/assets/vite.svg";
import reactLogo from "/src/assets/react.svg";
import "./FrontEnd.css";

// front end component renderer ########################################################################################

export default function FrontEnd() {

  // front end stack ---------------------------------------------------------------------------------------------------

  const frontendArray = [
    {key: "fe1", href: "https://icons8.com", text: "Icons 8"},
    {key: "fe2", href: "https://www.npmjs.com/package/react-parallax-tilt", text: "React Parallax Tilt"},
    {key: "fe3", href: "https://fontawesome.com", text: "Font Awesome"},
    {key: "fe4", href: "https://fonts.google.com/specimen/Roboto", text: "Google Fonts"},
    {key: "fe5", href: "https://www.npmjs.com/package/particles-bg", text: "Particles Bg"},
    {key: "fe6", href: "https://paletton.com", text: "Paletton"},
    {key: "fe7", href: "https://vite.dev", text: "Vite"},
    {key: "fe8", href: "https://react.dev", text: "React"}
  ];

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="footer-item front-end">
      <h2>Frontend&nbsp;&nbsp;Stack</h2>
      <ul>{frontendArray.map(tool => {
        return <li key={tool.key}><a href={tool.href} target="_blank">{tool.text}</a></li>;
      })}</ul>
      <div>
        <a href="https://vite.dev" target="_blank"><img src={viteLogo} alt="Vite Logo" /></a>
        <a href="https://react.dev" target="_blank"><img src={reactLogo} alt="React Logo" /></a>
      </div>
    </div>
  );
};
