import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";

const WaterSlider = (props) => {
  return (
    <div
      style={{
        border: "1px solid white",
        width: "220px",
        height: "20px",

        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: props.left,
          top: 0,
          transition: "all 0.3s",
        }}
      >
        {props.left > 160 ? (
          <BsEmojiHeartEyes size={20} color="white" />
        ) : (
          <BsEmojiNeutral size={20} color="white" />
        )}
      </span>
    </div>
  );
};

export default WaterSlider;
