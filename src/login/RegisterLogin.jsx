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
        props.setUser(responseObj.user);
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

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="register-login">
      <legend>{props.route}</legend>
      {props.route === "Register" ? <p>Name:</p> : null}
      {props.route === "Register" ? <input ref={nameRef} type="text" onKeyDown={pressEnter} /> : null}
      <p>Email:</p>
      <input ref={emailRef} type="text" onKeyDown={pressEnter} />
      <p>Password:</p>
      <input ref={passwordRef} type="password" onKeyDown={pressEnter} />
      <button onClick={clickRegisterLogin}>{props.route}</button>
    </div>
  );
};
