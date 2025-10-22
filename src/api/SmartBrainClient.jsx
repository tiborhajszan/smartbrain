//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | SmartBrain REST API Client
//######################################################################################################################

const URL = "http://localhost:3000";

// smartbrain api client function ######################################################################################

export default async function SmartBrainClient(props) {

  // function init -----------------------------------------------------------------------------------------------------

  let requestOptions = {};

  // setting /login request --------------------------------------------------------------------------------------------

  if (props.apiRoute === "/login") requestOptions = {
    method: "post",
    headers: {Accept: "application/json"},
    body: JSON.stringify(props.payLoad)
  }

  // setting /register request .......................................................................................
  // if (props.route === "Register") {
  //   fetchUrl = "http://localhost:3000/register";
  //   payLoad.name = nameRef.current.value;
  // };

  // api call ----------------------------------------------------------------------------------------------------------

  fetch(URL + props.apiRoute, requestOptions)
  .then(fetchResponse => fetchResponse.json())
  .then(responseObj => {return responseObj;})
  .catch(() => {throw new Error("SmartBrain API Error");});

};
