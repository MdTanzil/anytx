const Hero = () => {
  return (
    <div className={` bg-[#005bc4] pt-24 min-h-[600px] clip-polygon    `}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="grid items-center pt-10 grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="min-h-full clip-card">
            <h1 className=" z-40  text-4xl font-montserrat montserrat-font font-medium text-white sm:text-6xl lg:text-7xl">
              Embrace the
            </h1>
            <h1 className=" z-40 text-4xl lg:mt-3 montserrat-font font-montserrat whitespace-nowrap font-medium text-white sm:text-6xl lg:text-6xl">
              future of finance
            </h1>
            <p className="mt-8 text-xl font-semibold  z-40 text-white sm:text-xl">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </p>
            <div className="mt-10 cursor-pointer sm:flex sm:items-center sm:space-x-8">
              <a
                href="#"
                title
                className="inline-flex cursor-pointer rounded-sm items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#fe8b53] hover:bg-orange-500 focus:bg-orange-500  z-40"
                role="button"
              >
                Reach Out To Us
              </a>
            </div>
          </div>
          <div className="flex clip-image justify-center lg:justify-end">
            <img
              style={{ height: "100%", width: "100%" }}
              src="/Assets/heropic.jpg"
              alt="Illustration 1"
              className="w-full mix-blend-plus-darker  max-w-md lg:max-w-5xl object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
