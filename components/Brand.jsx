const Brand = () => {
  const brands = [
    "brand01.webp",
    "bankofchina.webp",
    "bankofsinhai.webp",
    "cgb.webp",
    "cttibank.webp",
    "onebank.webp",
    "ping.webp",
    "brand01.webp",
    "bankofchina.webp",
    "bankofsinhai.webp",
    "cgb.webp",
    "cttibank.webp",
    "onebank.webp",
    "ping.webp",
    "cttibank.webp",
  ];

  return (
    <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto mt-10 gap-2">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-4 rounded-lg "
        >
          <img
            className="w-48 h-36 object-contain"
            src={`./Assets/${brand}`}
            alt={brand}
          />
        </div>
      ))}
    </div>
  );
};

export default Brand;
