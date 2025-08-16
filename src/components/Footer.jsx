import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#c8dad9] font-sans py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start text-left gap-8">
        {/* Logo and Tagline */}
        <div>
          <h1
            className="text-8xl font-brownsugar text-gray-800"
            style={{ letterSpacing: "-0.05em" }}
          >
            OZIA
          </h1>
          <p className="text-1xl text-gray-700 font-light tracking-widest mt-1"
          style={{letterSpacing: "2px"}}>
            Elegance in Every Element
          </p>
        </div>

        {/* Footer Links */}
        <nav className="flex flex-col gap-4 font-light text-gray-800 md:items-end">
          <a href="#" className="hover:text-black transition-colors">
            Contact Us
          </a>
          <a href="#" className="hover:text-black transition-colors">
            FAQs
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Terms & Conditions
          </a>
        </nav>
      </div>

      {/* Bottom Center Social Icons */}
      <div className="mt-8 flex justify-center gap-6 text-gray-800 text-2xl">
        <a href="#" className="hover:text-black transition-colors">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-black transition-colors">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-black transition-colors">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-black transition-colors">
          <FaPinterestP />
        </a>
        <a href="#" className="hover:text-black transition-colors">
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-700 text-center text-sm mt-4">
        &copy; {new Date().getFullYear()} OZIA. All rights reserved.
      </p>
    </footer>
  );
}
