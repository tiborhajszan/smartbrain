//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Front End Component Logic
//######################################################################################################################

import logoVite from "/src/assets/vite.svg";
import logoReact from "/src/assets/react.svg";
import "./FrontEnd.css";

// front end component renderer ########################################################################################

export default function FrontEnd() {

  // links array -------------------------------------------------------------------------------------------------------

  const linksArray = [
    {key: "fl1", href: "https://icons8.com", text: "Icons 8"},
    {key: "fl2", href: "https://www.npmjs.com/package/react-parallax-tilt", text: "React Parallax Tilt"},
    {key: "fl3", href: "https://fontawesome.com", text: "Font Awesome"},
    {key: "fl4", href: "https://fonts.google.com/specimen/Roboto", text: "Google Fonts"},
    {key: "fl5", href: "https://www.npmjs.com/package/particles-bg", text: "Particles Bg"},
    {key: "fl6", href: "https://paletton.com", text: "Paletton"},
    {key: "fl7", href: "https://vite.dev", text: "Vite"},
    {key: "fl8", href: "https://react.dev", text: "React"}
  ];

  // icons array -------------------------------------------------------------------------------------------------------

  const iconsArray = [
    {key: "fi1", href: "https://vite.dev", src: logoVite, alt: "Vite Logo"},
    {key: "fi2", href: "https://react.dev", src: logoReact, alt: "React Logo"}
  ];

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="footer-item front-end">
      <h2>Frontend&nbsp;&nbsp;Stack</h2>
      <ul>{linksArray.map(link => {
        return <li key={link.key}><a href={link.href} target="_blank">{link.text}</a></li>;
      })}</ul>
      <div>{iconsArray.map(icon => {
        return <a key={icon.key} href={icon.href} target="_blank"><img src={icon.src} alt={icon.alt} /></a>;
      })}</div>
    </div>
  );
};
