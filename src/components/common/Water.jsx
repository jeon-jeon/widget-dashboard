import { useState } from "react";
import WaterSlider from "./WaterSlider";
import WaterButton from "./WaterButton";

const Water = () => {
  const [waters, setWaters] = useState([false, false, false, false, false]);

  const change = (i) => {
    setWaters((prev) => {
      const newWaters = [...prev];
      newWaters[i] = !newWaters[i];
      return newWaters;
    });
  };

  return (
    <div
      style={{
        width: "300px",
        borderRadius: "12px",
        padding: "10px 20px",
        backgroundColor: "rgba(14, 14, 14, 0.7)",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "white", fontSize: "16px", fontWeight: 600 }}>
          WATER <br />
          SCORE
        </span>

        <WaterSlider left={waters.filter((v) => v).length * 40} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
        }}
      >
        {waters.map((v, i) => (
          <WaterButton key={i} change={() => change(i)} isWater={v} />
        ))}
      </div>
    </div>
  );
};

export default Water;
