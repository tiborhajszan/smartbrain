//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Clarifai REST API Client
//######################################################################################################################

const PAT = "c630d23f71d34c849dfd0602898d3e8d";
const MODEL_ID = "face-detection";
const USER_ID = "clarifai";
const APP_ID = "main";

// clarifai api client function ########################################################################################

export default async function ClarifaiClient(IMAGE_URL) {

  // setting request body ----------------------------------------------------------------------------------------------

  const requestBody = JSON.stringify({
    user_app_id: {user_id: USER_ID, app_id: APP_ID},
    inputs: [{data: {image: {url: IMAGE_URL}}}]
  });

  // setting request options -------------------------------------------------------------------------------------------

  const requestOptions = {
    method: "POST",
    headers: {Accept: "application/json", Authorization: "Key " + PAT},
    body: requestBody
  };

  // api call ----------------------------------------------------------------------------------------------------------

  const fetchResponse = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions);
  const responseObj = await fetchResponse.json();
  if (responseObj.status.code !== 10000) throw new Error(responseObj.status.description);
  return responseObj.outputs[0].data.regions;
};
