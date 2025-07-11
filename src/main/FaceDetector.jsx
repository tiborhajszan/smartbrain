//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Face Detector Component Logic
//######################################################################################################################

import {useRef, useState, useEffect} from "react";
import InputField from "./InputField.jsx";
import {Model} from "clarifai-nodejs";
import aiFace from "/src/assets/face.jpg";
import "./FaceDetector.css";

// face detector component renderer ####################################################################################

export default function FaceDetector(props) {

  // ref and state -----------------------------------------------------------------------------------------------------

  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(aiFace);
  const imageRef = useRef(null);

  // press enter callback ----------------------------------------------------------------------------------------------

  function onEnter(event) {
    if (event.keyCode === 13) onDetect();
    return;
  };

  // click detect callback ---------------------------------------------------------------------------------------------

  function onDetect() {
    if (inputRef.current.value === "" && imageUrl === aiFace) return;
    if (inputRef.current.value === imageUrl) return;
    if (inputRef.current.value.startsWith("Error")) return;
    if (inputRef.current.value === "") setImageUrl(aiFace);
    else setImageUrl(inputRef.current.value);
    return;
  };

  // image handler -----------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (imageUrl === aiFace) return;
    // const clarifaiCall = async () => await gRpcClient(imageUrl);
    // const faceRegions = clarifaiCall();
    // console.log(faceRegions);
    const navHeight = props.refNav.current.getBoundingClientRect().height;
    window.scrollTo({top: imageRef.current.offsetTop - navHeight - 60, behavior: "smooth"});
    return;
  }, [imageUrl, props.refNav]);

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <main>
      <p>Enter an image URL and click "Detect". SmartBrain will find and mark human faces in your image.</p>
      <InputField refInput={inputRef} pressEnter={onEnter} clickDetect={onDetect} />
      <img id="face-image" ref={imageRef} src={imageUrl} alt="Analyzed Image" />
    </main>
  );
};
