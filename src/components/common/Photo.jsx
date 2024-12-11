const Photo = () => {
  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const photos = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
  ];

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "12px",
        position: "relative",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        src={photos[rand(0, photos.length - 1)]}
        alt=""
      />
      <h3
        style={{
          color: "white",
          position: "absolute",
          top: 40,
          left: 20,
        }}
      >
        HOW ABOUT
        <br /> THIS PHOTO?
      </h3>
    </div>
  );
};

export default Photo;
