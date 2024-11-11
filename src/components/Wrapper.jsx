const Wrapper = ({ children, addStylesOne }) => {
  return (
    <div
      className={`w-[60%] flex items-center flex-col pl-[50px] mt-[100px] pr-[80px] ${addStylesOne}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
