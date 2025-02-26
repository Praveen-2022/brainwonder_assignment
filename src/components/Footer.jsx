import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#20398F] text-white px-[140px] w-full">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <img src={Logo} alt="Brain Wonder's" className="w-[270px] h-[48px]" />
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">Join Our Newsletter</h3>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="px-3 py-2 border rounded-sm bg-transparent text-white text-sm focus:outline-none w-64"
            />
            <button className="bg-white text-[#20398F] px-4 py-2 text-sm font-semibold rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <h3 className="text-base mb-2  ">Our Other Links</h3>
        <div className="flex flex-wrap gap-4 justify-start text-sm font-semibold no-underline">
          <a href="#" className="">
            DMIT TEST
          </a>
          <a href="#" className="">
            CAREER COUNSELLING
          </a>
          <a href="#" className="">
            APTITUDE TEST
          </a>
          <a href="#" className="">
            PERSONALITY TEST
          </a>
          <a href="#" className="">
            I.Q. TEST
          </a>
          <a href="#" className="">
            INTEREST TEST
          </a>
        </div>
      </div>
      <div className="container border-t border-[#fff] py-4 text-center md:flex md:justify-between text-sm text-gray-300">
        <p>Copyright © 2025 Brainwonders. All Rights Reserved.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:underline">
            Terms & Services
          </a>
          <a href="#" className="hover:underline">
            Return & Refund
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
