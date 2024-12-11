import { useState } from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { CiCircleRemove } from "react-icons/ci";

const TodoItems = ({ items, remove }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        color: "white",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={checked}
          style={{ border: "none", background: "none" }}
        >
          {isChecked ? (
            <RiCheckboxBlankCircleFill color="yellow" />
          ) : (
            <RiCheckboxBlankCircleLine color="white" />
          )}
        </button>
        <div>{items}</div>
      </div>
      <button
        onClick={remove}
        style={{ border: "none", background: "none", color: "red" }}
      >
        <CiCircleRemove />
      </button>
    </div>
  );
};

export default TodoItems;
