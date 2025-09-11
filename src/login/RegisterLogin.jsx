//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Register/Login Component Logic
//######################################################################################################################

import {useRef} from "react";
import "./RegisterLogin.css";

// register/login component renderer ###################################################################################

export default function RegisterLogin(props) {

  // ref ---------------------------------------------------------------------------------------------------------------

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // click login callback ----------------------------------------------------------------------------------------------

  function clickLogin() {

    let fetchUrl = "http://localhost:3000/login";

    const payLoad = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    if (props.route === "Register") {
      fetchUrl = "http://localhost:3000/register";
      payLoad.name = nameRef.current.value;
    };

    fetch(fetchUrl, {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payLoad)
    })
    .then(response => {
      console.log(response.text());
    })
    .catch(error => {
      console.log("Catch: ", error);
    });

    return;
  };

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="register-login">
      <legend>{props.route}</legend>
      {props.route === "Register" ? <p>Name:</p> : null}
      {props.route === "Register" ? <input ref={nameRef} type="text" /> : null}
      <p>Email:</p>
      <input ref={emailRef} type="email" />
      <p>Password:</p>
      <input ref={passwordRef} type="password" />
      <button onClick={clickLogin}>{props.route}</button>
    </div>
  );
};
