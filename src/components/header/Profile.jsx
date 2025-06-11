//######################################################################################################################
//  Zero To Mastery Academy
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Profile Component Logic
//######################################################################################################################

import "./Profile.css";

// Profile component renderer ##########################################################################################

function Profile(props) {
  return (
    <div ref={props.ref} className={`nav-menu ${props.profileOpen ? "open" : "close"}`}>
      <p>Tibor Hajszan</p>
      <hr />
      <p>Detect Count:<br /><span>#110</span></p>
      <hr />
      <p>Last Login:<br /><span>2025.06.10</span></p>
    </div>
  );
};

// exports #############################################################################################################

export default Profile;
