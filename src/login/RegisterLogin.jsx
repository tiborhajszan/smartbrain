//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Register/Login Component Logic
//######################################################################################################################

import {useRef, useState} from "react";
import "./RegisterLogin.css";

// register/login component renderer ###################################################################################

export default function RegisterLogin(props) {

  // ref ---------------------------------------------------------------------------------------------------------------

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [legend, setLegend] = useState(props.route);

  // press enter callback ----------------------------------------------------------------------------------------------

  function pressEnter(event) {
    if (event.keyCode === 13) clickLogin();
    return;
  }

  // click login callback ----------------------------------------------------------------------------------------------

  function clickLogin() {

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
        props.setUser(responseObj.user);
        props.setLastLogin(new Date());
        props.setRoute("Detector");
      } else {
        props.setUser({});
        props.setLastLogin(null);
        setLegend(responseObj.message);
      };
    })
    .catch(() => {
      props.setUser({});
      props.setLastLogin(null);
      setLegend("API Error");
    });

    // returning .......................................................................................................
    return;
  };

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="register-login">
      <legend>{legend}</legend>
      {props.route === "Register" ? <p>Name:</p> : null}
      {props.route === "Register" ? <input ref={nameRef} type="text" onKeyDown={pressEnter} /> : null}
      <p>Email:</p>
      <input ref={emailRef} type="text" onKeyDown={pressEnter} />
      <p>Password:</p>
      <input ref={passwordRef} type="password" onKeyDown={pressEnter} />
      <button onClick={clickLogin}>{props.route}</button>
    </div>
  );
};
