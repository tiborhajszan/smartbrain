//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Quick Links Component Logic
//######################################################################################################################

import "./QuickLinks.css";

// quick links component renderer ######################################################################################

export default function QuickLinks(props) {

  // links array -------------------------------------------------------------------------------------------------------

  const linksArray = [
    {key: "ql1", href: "https://github.com/tiborhajszan/smartbrain", text: "SmartBrain Frontend Repo"},
    {key: "ql2", href: "https://github.com/tiborhajszan/smartbrain-api", text: "SmartBrain Backend Repo"},
    {key: "ql3", href: "https://github.com/aneagoie/face-recognition-brain", text: "SB Frontend By ZtM"},
    {key: "ql4", href: "https://github.com/aneagoie/face-recognition-brain-api", text: "SB Backend By ZtM"},
    {key: "ql5", href: "https://tiborhajszan.github.io/ZtmCourse_WebDeveloper", text: "Course Notes & Projects"}
  ];

  // icons array -------------------------------------------------------------------------------------------------------

  const iconsArray = [
    {key: "qi1", href: "https://github.com/tiborhajszan", class: "fa fa-github"},
    {key: "qi2", href: "#", class: "fa fa-briefcase"},
    {key: "qi3", href: "https://www.linkedin.com/in/tibor-hajszan", class: "fa fa-linkedin"}
  ];

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div id={props.route === "Detector" ? "links-detector" : "links-login"} className="footer-item">
      <h2>Quick&nbsp;&nbsp;Links</h2>
      <ul>{linksArray.map(link => {
        return <li key={link.key}><a href={link.href} target="_blank">{link.text}</a></li>;
      })}</ul>
      <div id="quick-icons">{iconsArray.map(icon => {
        return <a key={icon.key} href={icon.href} target="_blank"><i className={icon.class}></i></a>;
      })}</div>
    </div>
  );
};
