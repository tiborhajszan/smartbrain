//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Face Detector Component Logic
//######################################################################################################################

import {useRef, useState} from "react";
import InputField from "./InputField";
import aiFace from "/src/assets/face.jpg";
import "./FaceDetector.css";

// face detector component renderer ####################################################################################

export default function FaceDetector() {

  // ref and state -----------------------------------------------------------------------------------------------------

  const refImage = useRef(null);
  const [imageUrl, setImageUrl] = useState(aiFace);

  // detect onclick callback -------------------------------------------------------------------------------------------

  function onDetect() {
    window.scrollTo({top: refImage.current.offsetTop - 158, behavior: "smooth"});
  };

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <main>
      <p>Enter an image URL and click "Detect". SmartBrain will find and mark human faces in your image.</p>
      <InputField callBack={onDetect} />
      <img ref={refImage} src={imageUrl} alt="Analyzed Image" />
    </main>
  );
};
