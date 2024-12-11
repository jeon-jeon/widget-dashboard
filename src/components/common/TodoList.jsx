import { useState } from "react";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const [todolist, setTodolist] = useState([]);
  const [item, setItem] = useState("");

  const change = (e) => {
    setItem((prev) => e.target.value);
  };

  const enter = (e) => {
    if (e.key === "Enter") {
      setTodolist((prev) => [...prev, item]);
      setItem("");
      localStorage.setItem("todolist", todolist);
    }
  };

  const remove = (i) => {
    setTodolist((prev) => {
      const newTodolist = [...prev];
      const filterdArr = newTodolist.filter((v, idx) => i != idx);
      return filterdArr;
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>TO DO LIST</h1>
      <div
        style={{
          minHeight: "100px",
          width: "90%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {todolist.map((v, i) => (
          <TodoItems key={i} items={v} remove={() => remove(i)} />
        ))}
      </div>
      <input
        onChange={change}
        onKeyDown={enter}
        value={item}
        type="text"
        placeholder="Write down your list"
        style={{
          padding: "10px",
          border: "1px solid white",
          width: "90%",
          background: "none",
          color: "white",
        }}
      />
    </div>
  );
};

export default TodoList;
