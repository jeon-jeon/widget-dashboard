import { useEffect, useState } from "react";

const Name = () => {
  const [user, setUser] = useState("");
  const login = (e) => {
    if (e.key === "Enter") {
      setUser(e.target.value);
      localStorage.setItem("username", e.target.value);
    }
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUser(username);
    }
  }, []);

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "12px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <input
        onKeyDown={login}
        type="text"
        placeholder="YOUR NAME"
        size={9}
        style={{
          padding: "10px",
          textAlign: "center",
          display: user == "" ? "block" : "none",
        }}
      />
      <h3
        style={{
          textAlign: "center",
          display: user == "" ? "none" : "block",
        }}
      >
        {user}'s <br /> Daily Board
      </h3>
    </div>
  );
};

export default Name;
