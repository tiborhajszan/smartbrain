//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Output Field Component Logic
//######################################################################################################################

import "./OutputField.css";

// output field component renderer #####################################################################################

export default function OutputField(props) {
  return (
    <div className="output-field">
      <img ref={props.imageRef} src={props.imageUrl} alt="Analyzed Image" />
      {/* <button onClick={props.clickDetect}>Detect</button> */}
    </div>
  );
};
