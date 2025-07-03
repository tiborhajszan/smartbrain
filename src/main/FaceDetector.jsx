//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Face Detector Component Logic
//######################################################################################################################

import {useRef, useState, useEffect} from "react";
import InputField from "./InputField.jsx";
import aiFace from "/src/assets/face.jpg";
import "./FaceDetector.css";

// face detector component renderer ####################################################################################

export default function FaceDetector() {

  // ref and state -----------------------------------------------------------------------------------------------------

  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(aiFace);
  const imageRef = useRef(null);
  const scrollFlag = useRef(false);

  // press enter callback ----------------------------------------------------------------------------------------------

  function onEnter(event) {
    if (event.keyCode === 13) onDetect();
    return;
  };

  // click detect callback ---------------------------------------------------------------------------------------------

  function onDetect() {
    if (inputRef.current.value === "" && imageUrl === aiFace) return;
    if (inputRef.current.value === imageUrl) return;
    // const supportedExtensions = [".jpeg", ".jpg", ".png", ".tiff", ".tif", ".bmp", ".webp"];
    // if (!supportedExtensions.some(ext => inputRef.current.value.endsWith(ext))) return;
    if (inputRef.current.value === "") setImageUrl(aiFace);
    else setImageUrl(inputRef.current.value);
    scrollFlag.current = true;
    return;
  };

  // image error callback ----------------------------------------------------------------------------------------------

  function onImageError() {
    inputRef.current.value = "Image Error!";
    setImageUrl(aiFace);
    return;
  };

  // image handler -----------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (scrollFlag.current) {
      window.scrollTo({top: imageRef.current.offsetTop - 158, behavior: "smooth"});
      scrollFlag.current = false;
    };
    return;
  }, [imageUrl]);

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <main>
      <p>Enter an image URL and click "Detect". SmartBrain will find and mark human faces in your image.</p>
      <InputField refInput={inputRef} pressEnter={onEnter} clickDetect={onDetect} />
      <img ref={imageRef} src={imageUrl} alt="Analyzed Image" onError={onImageError} />
    </main>
  );
};
