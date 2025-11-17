//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | SmartBrain RESTful API Client
//######################################################################################################################

const URL = "http://localhost:3000";

// smartbrain api client function ######################################################################################

export default async function smartBrainClient(props) {

  // setting request options -------------------------------------------------------------------------------------------

  const requestOptions = {
    method: "post",
    headers: {"content-type": "application/json", accept: "application/json"},
    body: JSON.stringify(props.payLoad.current)
  };

  // api call ----------------------------------------------------------------------------------------------------------

  const fetchResponse = await fetch(URL+props.apiRoute.current, requestOptions)
  .catch(() => {throw new Error("SmartBrain Server Not Responding");});
  if (!fetchResponse.ok) throw new Error("SmartBrain Server Error");

  // parsing response --------------------------------------------------------------------------------------------------

  const fetchObj = await fetchResponse.json()
  .catch(() => {throw new Error("Response Parsing Error");});
  if (!fetchObj.status) throw new Error(fetchObj.message);

  // returning response ------------------------------------------------------------------------------------------------

  return fetchObj;

};
