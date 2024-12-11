import LeftWidget from "../layout/LeftWidget";
import RightWidget from "../layout/RightWidget";

const Main = () => {
  return (
    <main
      style={{
        backgroundImage: "url(/images/bgImage.jpg)",
        backgroundSize: "cover",
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      <LeftWidget />
      <RightWidget />
    </main>
  );
};

export default Main;
