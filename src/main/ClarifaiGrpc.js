//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Clarifai gRPC API Node.js Client
//######################################################################################################################

import {grpc, ClarifaiStub} from "clarifai-nodejs-grpc";
const USER_ID = "clarifai";
const APP_ID = 'main';
const MODEL_ID = "face-detection";
const PAT = "c630d23f71d34c849dfd0602898d3e8d";
const imgURL = "https://phlearn.com/wp-content/uploads/2023/09/Thumbnail-360x360-3.jpg?fit=360%2C360&quality=99&strip=all";

// client function #####################################################################################################

export default function gRpcClient(IMAGE_URL) {

  // setting model inputs ----------------------------------------------------------------------------------------------

  const modelInputs = {
    user_app_id: {"user_id": USER_ID, "app_id": APP_ID},
    model_id: MODEL_ID,
    inputs: [{data: {image: {url: IMAGE_URL, allow_duplicate_url: true}}}]
  };

  // setting authentication data ---------------------------------------------------------------------------------------

  const metaData = new grpc.Metadata();
  metaData.set("authorization", "Key " + PAT);

  // api call ----------------------------------------------------------------------------------------------------------

  const stub = ClarifaiStub.grpc();
  stub.PostModelOutputs(modelInputs, metaData, (err, response) => {

    // error handling ..................................................................................................
    if (err) {
      throw new Error(err);
    };
    if (response.status.code !== 10000) {
      throw new Error("Post model outputs failed: " + response.status.description);
    };

    // displaying model response .......................................................................................
    response.outputs[0].data.regions.forEach(region => {
      const boundingBox = region.region_info.bounding_box;
      const topRow = boundingBox.top_row.toFixed(3);
      const leftCol = boundingBox.left_col.toFixed(3);
      const bottomRow = boundingBox.bottom_row.toFixed(3);
      const rightCol = boundingBox.right_col.toFixed(3);
      console.log(`Bounding Box: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
    });
  });

  return;
};

// testing #############################################################################################################

gRpcClient(imgURL);
