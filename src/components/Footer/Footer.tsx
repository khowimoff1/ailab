import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../../assets/AI LAB logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#0D0B21] text-white py-16 text-center">

      <img src={logo} alt="AI LAB" className="w-[200px] mb-8 mx-auto" />

      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://www.facebook.com/ailab.bpo/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#333] w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/ailab.bpo/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#333] w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC5-gQfHltBCNVFsn2pnsXtg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#333] w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://t.me/endcode_manager"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#333] w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <FaTelegramPlane size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/ai-labor%D0%B0tory/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#333] w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>

      <p className="text-sm text-[#AAB0E5]">
        © AI LAB, located in Uzbekistan <br />
        <span className="text-[#FFD95A]">E-mail: manager@ai-lab.company</span>
      </p>
    </footer>
  );
};

export default Footer;
