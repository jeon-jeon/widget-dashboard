import Time from "../common/Time";
import Weather from "../common/Weather";

const RightWidget = () => {
  return (
    <section
      style={{
        flex: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        color: "white",
        paddingRight: "100px",
      }}
    >
      <Time />
      <Weather />
    </section>
  );
};

export default RightWidget;
