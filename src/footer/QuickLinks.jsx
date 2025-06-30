//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Quick Links Component Logic
//######################################################################################################################

import "./QuickLinks.css";

// links component renderer ############################################################################################

export default function QuickLinks() {

  // links array -------------------------------------------------------------------------------------------------------

  const linksArray = [
    {key: "l1", href: "https://github.com/tiborhajszan/smartbrain", text: "SmartBrain Frontend Repo"},
    {key: "l2", href: "https://github.com/tiborhajszan/smartbrain-api", text: "SmartBrain Backend Repo"},
    {key: "l3", href: "#", text: "SmartBrain By ZtM"},
    {key: "l4", href: "https://tiborhajszan.github.io/ZtmCourse_WebDeveloper", text: "Course Notes & Projects"}
  ];

  // icons array -------------------------------------------------------------------------------------------------------

  const iconsArray = [
    {key: "i1", href: "https://www.linkedin.com/in/tibor-hajszan", class: "fa fa-linkedin"},
    {key: "i2", href: "https://github.com/tiborhajszan", class: "fa fa-github"},
    {key: "i3", href: "#", class: "fa fa-briefcase"}
  ];

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="footer-item quick-links">
      <h2>Quick&nbsp;&nbsp;Links</h2>
      <ul>{linksArray.map(link => {
        return <li key={link.key}><a href={link.href} target="_blank">{link.text}</a></li>;
      })}</ul>
      <div>{iconsArray.map(icon => {
        return <a key={icon.key} href={icon.href} target="_blank"><i className={icon.class}></i></a>;
      })}</div>
    </div>
  );
};
