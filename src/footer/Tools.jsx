//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Tools Component Logic
//######################################################################################################################

import viteLogo from "/src/assets/vite.svg";
import reactLogo from "/src/assets/react.svg";
import "./Tools.css";

// tools component renderer ############################################################################################

export default function Tools() {

  // tools list --------------------------------------------------------------------------------------------------------

  const toolsArray = [
    {key: "t1", href: "https://www.clarifai.com", text: "Clarifai API"},
    {key: "t2", href: "https://icons8.com", text: "Icons 8"},
    {key: "t3", href: "https://www.npmjs.com/package/react-parallax-tilt", text: "React Parallax Tilt"},
    {key: "t4", href: "https://fontawesome.com", text: "Font Awesome"},
    {key: "t5", href: "https://fonts.google.com/specimen/Roboto", text: "Google Fonts"},
    {key: "t6", href: "https://www.npmjs.com/package/particles-bg", text: "Particles Bg"},
    {key: "t7", href: "https://paletton.com", text: "Paletton"}
  ];

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="tools">
      <p>Built&nbsp;&nbsp;With</p>
      <ul>{toolsArray.map(tool => {
        return <li key={tool.key}><a href={tool.href} target="_blank">{tool.text}</a></li>;
      })}</ul>
      <div>
        <a href="https://vite.dev" target="_blank"><img src={viteLogo} alt="Vite Logo" /></a>
        <a href="https://react.dev" target="_blank"><img src={reactLogo} alt="React Logo" /></a>
      </div>
    </div>
  );
};
