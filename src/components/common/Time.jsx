import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime((prev) => new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  return <h1 style={{ fontSize: "100px" }}>{time}</h1>;
};

export default Time;
