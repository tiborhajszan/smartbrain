//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Register/Login Component Logic
//######################################################################################################################

import "./RegisterLogin.css";

// register/login component renderer ###################################################################################

export default function RegisterLogin(props) {
  return (
    <div className="register-login">
      <legend>{props.route}</legend>
      {props.route === "Register" ? <p>Name:</p> : null}
      {props.route === "Register" ? <input type="text" /> : null}
      <p>Email:</p>
      <input type="email" />
      <p>Password:</p>
      <input type="password" />
      <button onClick={() => props.setRoute("Detector")}>{props.route}</button>
    </div>
  );
};
