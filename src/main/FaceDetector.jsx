//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Face Detector Component Logic
//######################################################################################################################

import {useRef, useState, useEffect} from "react";
import InputField from "./InputField.jsx";
import aiFace from "/src/assets/ai-face.jpg";
import ClarifaiClient from "./ClarifaiClient.js";
import OutputField from "./OutputField.jsx";
import "./FaceDetector.css";
const BASE_PROMPT = "Enter an image URL and click \"Detect\". SmartBrain will find and mark human faces in your image.";

// face detector component renderer ####################################################################################

export default function FaceDetector(props) {

  // ref and state -----------------------------------------------------------------------------------------------------

  const inputRef = useRef(null);
  const imageRef = useRef(null);
  const [prompt, setPrompt] = useState(BASE_PROMPT);
  const [imageUrl, setImageUrl] = useState(aiFace);
  const [faceRegions, setFaceRegions] = useState([]);

  // press enter callback ----------------------------------------------------------------------------------------------

  function pressEnter(event) {
    if (event.keyCode === 13) clickDetect();
    return;
  };

  // click detect callback ---------------------------------------------------------------------------------------------

  function clickDetect() {

    // no action cases .................................................................................................
    if (inputRef.current.value === "") {
      setPrompt(BASE_PROMPT);
      setImageUrl(aiFace);
      setFaceRegions([]);
      return;
    };
    if (inputRef.current.value === imageUrl) return;

    // api call ........................................................................................................
    const apiResponse = ClarifaiClient(inputRef.current.value);

    // detect success ..................................................................................................
    apiResponse.then(regions => {
      setPrompt("Detect Success");
      setImageUrl(inputRef.current.value);
      setFaceRegions(regions);
    });

    // detect failure ..................................................................................................
    apiResponse.catch(error => {
      setPrompt("Detect Error : " + error.message);
      inputRef.current.value = "";
      setImageUrl(aiFace);
      setFaceRegions([]);
    });

    // returning .......................................................................................................
    return;
  };

  // page scroll effect ------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (imageUrl === aiFace) return;
    const navHeight = props.refNav.current.getBoundingClientRect().height;
    window.scrollTo({top: imageRef.current.offsetTop - navHeight - 60, behavior: "smooth"});
    return;
  }, [props.refNav, imageUrl]);

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <main>
      <p>{prompt}</p>
      <InputField refInput={inputRef} pressEnter={pressEnter} clickDetect={clickDetect} />
      <OutputField refImage={imageRef} imageUrl={imageUrl} faceRegions={faceRegions} />
    </main>
  );
};
