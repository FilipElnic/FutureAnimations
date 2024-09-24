import "./App.css";
import img1 from "./assets/FutureAnimationsPic/img1.png";
import img2 from "./assets/FutureAnimationsPic/img2.png";
import img3 from "./assets/FutureAnimationsPic/img3.png";
import img4 from "./assets/FutureAnimationsPic/img4.png";
import img5 from "./assets/FutureAnimationsPic/img5.png";
import img6 from "./assets/FutureAnimationsPic/img6.png";
import img7 from "./assets/FutureAnimationsPic/img7.png";
import img8 from "./assets/FutureAnimationsPic/img8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Animations() {
  // Set the necessary CSS variables
  const width = "250px"; // Width of each image
  const height = "250px"; // Height of each image
  const quantity = images.length; // Total number of images

  return (
    <main>
      <div
        className="slider"
        style={{ "--height": height, "--width": width, "--quantity": quantity }}
      >
        <div className="list">
          {images.map((image, index) => (
            <div
              key={index}
              className="item"
              style={{ "--position": index + 1, "--width": width }}
            >
              <img src={image} alt={`Animation ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Animations;
