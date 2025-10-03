//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Register/Login Component Logic
//######################################################################################################################

import {useRef} from "react";
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
  }

  // click register/login callback -------------------------------------------------------------------------------------

  function clickRegisterLogin() {

    // setting /login request ..........................................................................................
    let fetchUrl = "http://localhost:3000/login";
    const payLoad = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    // setting /register request .......................................................................................
    if (props.route === "Register") {
      fetchUrl = "http://localhost:3000/register";
      payLoad.name = nameRef.current.value;
    };

    // api call ........................................................................................................
    fetch(fetchUrl, {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payLoad)
    })
    .then(fetchResponse => fetchResponse.json())
    .then(responseObj => {
      if (responseObj.status) {
        props.setRoute("Detector");
        props.setUser({
          id: responseObj.id,
          name: responseObj.name,
          email: responseObj.email,
          detects: responseObj.detects,
          lastLogin: new Date(responseObj.lastLogin)
        });
        props.setLastLogin(new Date());
      } else {
        props.setUser({});
        props.setLastLogin(null);
        alert(responseObj.message);
      };
    })
    .catch(() => {
      props.setUser({});
      props.setLastLogin(null);
      alert("API error : Try again later.");
    });

    // returning .......................................................................................................
    return;
  };

  // rendering register page -------------------------------------------------------------------------------------------

  if (props.route === "Register") return (
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
