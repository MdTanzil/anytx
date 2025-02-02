const Footer = () => {
  return (
    <footer className="bg-[#002045] text-white pt-6 bt-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="./Assets/white_logo.svg"
            alt="AnyTech Logo"
            className="h-10"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-cyan-400">
          <a href="#" className="font-semibold">
            Our Solutions
          </a>
          <a href="#" className="hover:text-cyan-300">
            AnyCaaS
          </a>
          <a href="#" className="hover:text-cyan-300">
            AnyBaaS
          </a>
          <a href="#" className="hover:text-cyan-300">
            AnyPaaS
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 bg-[#00152d] mt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm text-primary text-bold">
          <p>© 2023 All rights reserved. Any Technology Pte Ltd.</p>
          <a href="#" className="hover:text-gray-400 ">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
