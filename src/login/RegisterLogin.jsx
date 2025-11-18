//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Register/Login Component Logic
//######################################################################################################################

import {useRef} from "react";
import smartBrainClient from "../api/SmartBrainClient.js";
import "./RegisterLogin.css";

// register/login component renderer ###################################################################################

export default function RegisterLogin(props) {

  // ref and state -----------------------------------------------------------------------------------------------------

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // press enter callback ----------------------------------------------------------------------------------------------

  function pressEnter(event) {
    if (event.keyCode === 13) clickRegisterLogin();
    return;
  };

  // click register/login callback -------------------------------------------------------------------------------------

  function clickRegisterLogin() {

    // setting /login request
    props.apiRoute.current = "/login";
    props.payLoad.current = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    // setting /register request
    // if (props.route === "Register") {
    //   fetchUrl = "http://localhost:3000/register";
    //   payLoad.name = nameRef.current.value;
    // };

    // api call
    smartBrainClient(props)

    // response success
    .then(apiResponse => {
      props.setFrontRoute("Detector");
      props.setUser({
        id: apiResponse.id,
        name: apiResponse.name,
        email: apiResponse.email,
        detects: apiResponse.detects,
        lastLogin: new Date(apiResponse.lastLogin)
      });
      props.currentLogin.current = new Date();
    })

    // response error
    .catch(error => {
      alert(error.message);
      props.setFrontRoute("Login");
      props.setUser({});
      props.currentLogin.current = null;
    });

    // callback ends
    return;
  };

  // rendering register page -------------------------------------------------------------------------------------------

  if (props.frontRoute === "Register") return (
    <div className="register-login">
      <legend>Register</legend>
      <p>Name:</p>
      <input ref={nameRef} type="text" onKeyDown={pressEnter} />
      <p>Email:</p>
      <input ref={emailRef} type="text" onKeyDown={pressEnter} />
      <p>Password:</p>
      <input ref={passwordRef} type="password" onKeyDown={pressEnter} />
      <button onClick={clickRegisterLogin}>Register</button>
    </div>
  );

  // rendering login page ----------------------------------------------------------------------------------------------

  return (
    <div className="register-login">
      <legend>Login</legend>
      <p>Email:</p>
      <input ref={emailRef} type="text" onKeyDown={pressEnter} />
      <p>Password:</p>
      <input ref={passwordRef} type="password" onKeyDown={pressEnter} />
      <button onClick={clickRegisterLogin}>Login</button>
    </div>
  );

};
