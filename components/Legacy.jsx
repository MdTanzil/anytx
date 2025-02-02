import FloatingSvg from "./FloatingSvg";

const Legacy = () => {
  return (
    <div className="relative  mx-auto  bg-[#005bc4] text-white clip-diagonal">
      <FloatingSvg />
      {/* Hero Section with Clip Path */}
      <div className="relative  h-[800px] md:h-[500px] flex flex-col items-start mx-auto justify-center px-6 max-w-7xl text-start">
        <h1 className="text-4xl z-50 md:text-5xl font-bold">
          Legacy no longer
        </h1>
        <p className="mt-4 text-lg">
          Talk to us to find out how we can transform your organisation for the
          future.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-md font-semibold">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Legacy;
