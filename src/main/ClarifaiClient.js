//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Clarifai REST API Client
//######################################################################################################################

const USER_ID = "clarifai";
const APP_ID = "main";
const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
const PAT = "c630d23f71d34c849dfd0602898d3e8d";
const MODEL_ID = "face-detection";

// clarifai client function ############################################################################################

export default async function ClarifaiClient(IMAGE_URL) {

  // setting request body ----------------------------------------------------------------------------------------------

  const requestBody = JSON.stringify({
    "user_app_id": {"user_id": USER_ID, "app_id": APP_ID},
    "inputs": [{"data": {"image": {"url": IMAGE_URL}}}]
  });

  // setting request options -------------------------------------------------------------------------------------------

  const requestOptions = {
    method: "POST",
    headers: {"Accept": "application/json", "Authorization": "Key " + PAT},
    body: requestBody
  };

  // api call ----------------------------------------------------------------------------------------------------------

  const apiResponse = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions);
  if (!apiResponse.ok) throw new Error("Bad API response");
  const responseObj = apiResponse.json();
  // if (responseObj.status.code !== 10000) throw new Error("Bad model response");
  return responseObj;

    //   const regions = resultObj.outputs[0].data.regions;

    //   regions.forEach(region => {
    //     // Accessing and rounding the bounding box values
    //     const boundingBox = region.region_info.bounding_box;
    //     const topRow = boundingBox.top_row.toFixed(3);
    //     const leftCol = boundingBox.left_col.toFixed(3);
    //     const bottomRow = boundingBox.bottom_row.toFixed(3);
    //     const rightCol = boundingBox.right_col.toFixed(3);
    //     console.log(`BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
    //   });
    // })
    // .catch(error => console.log('error', error));
};
