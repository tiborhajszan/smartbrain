//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Face Detector Component Logic
//######################################################################################################################

import {useRef, useState} from "react";
import InputField from "./InputField.jsx";
import aiFace from "/src/assets/face.jpg";
import "./FaceDetector.css";

// face detector component renderer ####################################################################################

export default function FaceDetector() {

  // ref and state -----------------------------------------------------------------------------------------------------

  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(aiFace);
  const imageRef = useRef(null);

  // detect onclick callback -------------------------------------------------------------------------------------------

  function onDetect() {
    if (inputRef.current.value === imageUrl) return;
    if (inputRef.current.value === "") setImageUrl(aiFace);
    else setImageUrl(inputRef.current.value);
    window.scrollTo({top: imageRef.current.offsetTop - 158, behavior: "smooth"});
  };

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <main>
      <p>Enter an image URL and click "Detect". SmartBrain will find and mark human faces in your image.</p>
      <InputField refInput={inputRef} callDetect={onDetect} />
      <img ref={imageRef} src={imageUrl} alt="Analyzed Image" />
    </main>
  );
};
