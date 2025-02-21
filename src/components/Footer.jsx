const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            BRAINWONDERS
          </h2>
          <p className="text-sm text-gray-300">
            India&apos;s Largest Career Counselling Company
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2 text-center">
            Join Our Newsletter
          </h3>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="px-3 py-2 border rounded-md bg-transparent text-white text-sm focus:outline-none w-64"
            />
            <button className="bg-white text-blue-900 px-4 py-2 text-sm font-semibold rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container ml-[272px]">
        <h3 className="text-lg font-semibold mb-2  ">Our Other Links</h3>
        <div className="flex flex-wrap gap-4 justify-start text-base font-medium">
          <a href="#" className="hover:underline">
            DMIT TEST
          </a>
          <a href="#" className="hover:underline">
            CAREER COUNSELLING
          </a>
          <a href="#" className="hover:underline">
            APTITUDE TEST
          </a>
          <a href="#" className="hover:underline">
            PERSONALITY TEST
          </a>
          <a href="#" className="hover:underline">
            I.Q. TEST
          </a>
          <a href="#" className="hover:underline">
            INTEREST TEST
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-6 border-t border-gray-700 pt-4 text-center md:flex md:justify-between text-sm text-gray-300">
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
