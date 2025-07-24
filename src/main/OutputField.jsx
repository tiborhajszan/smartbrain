//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Output Field Component Logic
//######################################################################################################################

import "./OutputField.css";

// output field component renderer #####################################################################################

export default function OutputField(props) {

  // calculating face bounding boxes -----------------------------------------------------------------------------------

  const faceBoxes = props.faceRegions.map(region => {return {
    top: (100 * region.region_info.bounding_box.top_row).toFixed(2) + "%",
    left: (100 * region.region_info.bounding_box.left_col).toFixed(2) + "%",
    right: (100 * (1 - region.region_info.bounding_box.right_col)).toFixed(2) + "%",
    bottom: (100 * (1 - region.region_info.bounding_box.bottom_row)).toFixed(2) + "%"
  };});

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <div className="output-field"><div ref={props.refImage} className="image-box">
      <img src={props.imageUrl} alt="Analyzed Image" />
      {faceBoxes.map((box, index) => {return (<div
        key={index} className="face-box"
        style={{top: box.top, left: box.left, right: box.right, bottom: box.bottom}}
      />);})}
    </div></div>
  );
};
