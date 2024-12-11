import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Name from "../common/Name";
import Photo from "../common/Photo";
import Water from "../common/Water";
import { useState } from "react";
import TodoList from "../common/TodoList";

const LeftWidget = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        height: "96%",
        backgroundColor: "rgba(109, 109, 109, 0.3)",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Name />
        <Photo />
      </div>
      <Water />
      <Calendar onChange={onChange} value={value} />
      <TodoList />
    </section>
  );
};

export default LeftWidget;
