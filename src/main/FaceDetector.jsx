//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Face Detector Component Logic
//######################################################################################################################

import InputField from "./InputField";
import aiFace from "/src/assets/face.jpg";
import "./FaceDetector.css";

// face detector component renderer ####################################################################################

export default function FaceDetector() {
  return (
    <main>
      {/* <h1>SmartBrain Face Detector</h1> */}
      <p>Enter an image URL and click "Detect". SmartBrain will find and mark human faces in your image.</p>
      <InputField />
      <img src={aiFace} alt="Analyzed Image" />
    </main>
  );
};
