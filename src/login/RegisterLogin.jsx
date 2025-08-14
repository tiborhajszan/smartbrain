//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Register/Login Component Logic
//######################################################################################################################

import "./RegisterLogin.css";

// input field component renderer ######################################################################################

export default function RegisterLogin(props) {
  return (
    <form action="">
      <legend>{props.route}</legend>
      {props.route === "Register"
        ? <><label htmlFor="name">Name:</label><input type="text" name="username" /></>
        : null}
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <button type="submit">{props.route}</button>
    </form>
  );
};
