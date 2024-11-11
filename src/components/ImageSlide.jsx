const ImageSlide = ({ id, mainImgUrl }) => {
  return (
    <div
      id={id}
      className="top-10 right-10 w-[40%] h-[90vh] rounded-3xl overflow-clip"
    >
      <img
        src={mainImgUrl}
        alt="hero-main"
        className="h-[90vh] w-full object-cover"
      />
    </div>
  );
};

export default ImageSlide;
