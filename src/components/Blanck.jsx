const Blanck = () => {
  return (
    <div className="w-full h-screen bg-[#202224] flex flex-col items-center justify-center gap-10">
      <div className="w-[100px] h-[100px]">
        <img src="/error.png" className="w-full h-full object-cover" />
      </div>
      <p className="text-gray-500 text-3xl">
        This site cant be reached. <br />
      </p>
      <p className="text-red-500 text-3xl">
        Please Contact Developer <br />
      </p>
    </div>
  );
};

export default Blanck;
