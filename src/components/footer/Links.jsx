//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Links Component Logic
//######################################################################################################################

import "./Links.css";

// links component renderer ############################################################################################

export default function Links() {

  // links array -------------------------------------------------------------------------------------------------------

  const linksArray = [
    {key: "1", href: "https://github.com/tiborhajszan/smartbrain", text: "SmartBrain Frontend Repo"},
    {key: "2", href: "https://github.com/tiborhajszan/smartbrain-api", text: "SmartBrain Backend Repo"},
    {key: "3", href: "https://tiborhajszan.github.io/ZtmCourse_WebDeveloper", text: "WebDev Course Home"},
    {key: "4", href: "https://www.linkedin.com/in/tibor-hajszan", text: "My LinkedIn"},
    {key: "5", href: "https://github.com/tiborhajszan", text: "My GitHub"},
    {key: "6", href: "#", text: "My Portfolio"}
  ];

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="links">
      <p>Quick Links</p>
      <ul>{linksArray.map(link => {
        return <li key={link.key}><a href={link.href} target="_blank">{link.text}</a></li>;
      })}</ul>
    </div>
  );
};
