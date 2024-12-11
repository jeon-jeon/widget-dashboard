import { MdOutlineWaterDrop } from "react-icons/md";
import { MdWaterDrop } from "react-icons/md";

const WaterButton = (props) => {
  return (
    <button
      style={{
        color: "skyblue",
        border: "none",
        background: "none",
      }}
      onClick={props.change}
    >
      {props.isWater ? (
        <MdWaterDrop size={20} />
      ) : (
        <MdOutlineWaterDrop size={20} />
      )}
    </button>
  );
};

export default WaterButton;
