const BungalowItem = ({ name, image }) => {
  return (
    <div className="w-[22%]">
      <img
        src={image}
        alt=""
        className="w-full h-[415px] object-cover cursor-pointer"
      />
      <p className="mt-2 font-semibold uppercase text-xs">{name}</p>
    </div>
  );
};

export default BungalowItem;
