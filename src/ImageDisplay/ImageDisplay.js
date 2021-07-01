import "./ImageDisplay.css";
import sugar from "../Images/desktop/image-gallery-sugarcubes.jpg";
import orange from "../Images/desktop/image-gallery-orange.jpg";
import milk from "../Images/desktop/image-gallery-milkbottles.jpg";
import cone from "../Images/desktop/image-gallery-cone.jpg";

const ImageDisplay = () => {
  return (
    <div className="images-display">
      <div className="image-display__group">
        <img src={sugar} alt="sugar cubes" />
        <img src={orange} alt="orange slice" />
      </div>
      <div className="image-display__group">
        <img src={milk} alt="milk bottle" />
        <img src={cone} alt="ice cream" />
      </div>
    </div>
  );
};

export default ImageDisplay;
