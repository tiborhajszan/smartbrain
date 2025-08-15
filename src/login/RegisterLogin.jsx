//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Register/Login Component Logic
//######################################################################################################################

import "./RegisterLogin.css";

// register/login component renderer ###################################################################################

export default function RegisterLogin(props) {
  return (
    <form action="">
      <legend>{props.route}</legend>
      {props.route === "Register" ? <label htmlFor="name">Name:</label> : null}
      {props.route === "Register" ? <input type="text" name="username" required /> : null}
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" required />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" required />
      <button type="submit">{props.route}</button>
    </form>
  );
};
