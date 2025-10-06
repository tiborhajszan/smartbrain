//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Profile Component Logic
//######################################################################################################################

import "./Profile.css";

// profile component renderer ##########################################################################################

export default function Profile(props) {
  return (
    <div ref={props.refProfile} className={`profile ${props.profileOpen ? "open" : "close"}`}>
      <p>{props.user.name}</p>
      <p>{props.user.email}</p>
      <hr />
      <p>Detect Count:&nbsp;&nbsp;<br /><span>{props.user.detects}</span></p>
      <p>Last Login:&nbsp;&nbsp;<br /><span>{props.user.lastLogin.toLocaleString()}</span></p>
      <hr />
      <button>Delete Account</button>
    </div>
  );
};
