//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Profile Component Logic
//######################################################################################################################

import "./Profile.css";

// profile component renderer ##########################################################################################

export default function Profile(props) {
  return (
    <div ref={props.refProfile} className={`profile ${props.profileOpen ? "open" : "close"}`}>
      <p>{props.userName}</p>
      <hr />
      <p>Detect Count:<br /><span>{props.detectCount}</span></p>
      <hr />
      <p>Last Login:<br /><span>{props.lastLogin}</span></p>
    </div>
  );
};
