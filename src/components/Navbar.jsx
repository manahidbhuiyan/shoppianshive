import { useState, useEffect } from "react";
import { X, AlignJustify, Phone, MoveUpRight, SquareDashed } from "lucide-react"; // Sidebar Icons
import reactLogo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const [isSidebarOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // Get current location/URL

  // Toggle Menubar
  const toggleMenubar = () => {
    setMenuIsOpen(!isMenuOpen);
  };
  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isSidebarOpen);
  };
  // hide side and menu bar
  const toggleSideMenubar = () => {
    setIsOpen(false);
    setMenuIsOpen(false);
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle mobile navigation click - navigate and close sidebar
  const handleNavClick = () => {
    toggleSideMenubar(); // Close both menus
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${isSticky ? "bg-white sticky top-0 shadow-[0px_1px_14px_0px_rgba(0,0,0,0.13)]" : "bg-[#FFFAF6]"} py-2.5 border-b border-b-[#eee3fa] w-full left-0 z-50 transition-all duration-300`}
    >
      <div className="w-full container-fluid mx-auto flex items-center justify-between ">
        <Link to="/" className="w-40 md:w-52">
          <img src={reactLogo} alt="" />
        </Link>

        <ul className="hidden lg:flex items-center space-x-8 text-black">
          <li>
            <Link 
              to="/" 
              className={`${isActive("/") ? "text-[#615cf6]" : "text-[#161616]"} hover:text-[#615cf6] text-base leading-7 py-5 font-medium transition cursor-pointer`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={`${isActive("/services") ? "text-[#615cf6]" : "text-[#161616]"} hover:text-[#615cf6] text-base leading-7 py-5 font-medium transition cursor-pointer`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className={`${isActive("/portfolio") ? "text-[#615cf6]" : "text-[#161616]"} hover:text-[#615cf6] text-base leading-7 py-5 font-medium transition cursor-pointer`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to="/about-us" 
              className={`${isActive("/about-us") ? "text-[#615cf6]" : "text-[#161616]"} hover:text-[#615cf6] text-base leading-7 py-5 font-medium transition cursor-pointer`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`${isActive("/contact") ? "text-[#615cf6]" : "text-[#161616]"} hover:text-[#615cf6] text-base leading-7 py-5 font-medium transition cursor-pointer`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Contact & Sidebar Toggle */}
        <div className="flex items-center space-x-8">
          <div className="hidden xl:flex text-[#161616] justify-start items-center gap-2">
            <span className="bg-gray-200 p-1.5 rounded-sm">
              <Phone />
            </span>
            <div>
              <p className="text-xs font-semibold text-[#3f444b]">Any Question</p>
              <p className="text-base text-[#161616] "> +123 456 789</p>
            </div>
          </div>

          <button className="hidden xl:flex justify-center items-center gap-1 bg-black relative overflow-hidden text-white leading-7 min-w-[145px] py-2 px-[18px] rounded-md transition-all duration-300 cursor-pointer text-[15px] group">
            <span className="relative z-10 flex items-center gap-1">
              Contact Us <MoveUpRight className="text-white h-4 w-4 mt-[-3px]" />
            </span>

            {/* Hover Effect - Background Sliding in from Left */}
            <span className="absolute inset-0 bg-[#3147ff] translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          </button>

          {/* Sidebar Icon (Not Visible on Small Screens) */}
          <button onClick={toggleSidebar}>
            <AlignJustify className="w-6 h-6 text-[#161616] cursor-pointer hidden lg:block" />
          </button>
          {/* Munubar Icon (Always Visible on Small Screens) */}
          <button onClick={toggleMenubar}>
            <AlignJustify className="w-6 h-6 text-[#161616] cursor-pointer block lg:hidden" />
          </button>
        </div>
      </div>

      {/* Sidebar (large) */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] z-20 bg-[#f3f7fb] border-l-2 border-[#3147ff] transform p-[30px] ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="w-40">
            <img src={reactLogo} alt="" />
          </Link>
          <button onClick={toggleSidebar} className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] bg-[#615cf6] cursor-pointer">
            <X className="w-6 h-6 text-white font-bold" />
          </button>
        </div>

        <p className="text-[#49515b] text-base font-normal leading-7 mb-4">
          Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
        </p>
        <div className="">
          <h3 className="text-xl font-bold leading-[130%] text-[#161616] mb-[15px] ">Contact Info</h3>
          <ul className="mb-4">
            <li className="flex justify-start gap-3 items-center py-2">
              {" "}
              <SquareDashed className="w-4 h-5 text-[#615cf6]" /> Main Street, Melbourne, Australia{" "}
            </li>
            <li className="flex justify-start gap-3 items-center py-2">
              {" "}
              <SquareDashed className="w-4 h-5 text-[#615cf6]" /> info@example.com{" "}
            </li>
            <li className="flex justify-start gap-3 items-center py-2">
              {" "}
              <SquareDashed className="w-4 h-5 text-[#615cf6]" /> Mod-friday, 09am -05pm{" "}
            </li>
            <li className="flex justify-start gap-3 items-center py-2">
              {" "}
              <SquareDashed className="w-4 h-5 text-[#615cf6]" /> +11002345909{" "}
            </li>
          </ul>
          <button className="w-full flex justify-center items-center gap-1 bg-[#3147ff] relative overflow-hidden text-white leading-7 min-w-[145px] py-4 px-[18px] rounded-[66px] transition-all duration-300 cursor-pointer text-[15px] group">
            <span className="relative z-10 flex items-center gap-1">Get A Quote</span>

            {/* Hover Effect - Background Sliding in from Left */}
            <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          </button>

          <div className="flex justify-start gap-3 my-6">
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] border border-[#d4dcff] transition-all duration-500 ease-in-out group hover:bg-[#3147ff] cursor-pointer">
              <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 text-[#49515b] group-hover:text-white " />
            </span>
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] border border-[#d4dcff] transition-all duration-500 ease-in-out group hover:bg-[#3147ff] cursor-pointer">
              <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 text-[#49515b] group-hover:text-white " />
            </span>
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] border border-[#d4dcff] transition-all duration-500 ease-in-out group hover:bg-[#3147ff] cursor-pointer">
              <FontAwesomeIcon icon={faYoutube} className="w-4 h-4 text-[#49515b] group-hover:text-white " />
            </span>
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] border border-[#d4dcff] transition-all duration-500 ease-in-out group hover:bg-[#3147ff] cursor-pointer">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 text-[#49515b] group-hover:text-white " />
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed overflow-scroll top-0 right-0 h-full w-full min-[350px]:w-[80%] sm:w-[70%] z-20 p-5 bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-4 ">
          <Link to="/" className="w-40">
            <img src={reactLogo} alt="" />
          </Link>
          <button onClick={toggleMenubar} className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] bg-[#615cf6] ">
            <X className="w-6 h-6 text-white font-bold" />
          </button>
        </div>

        <ul className="mb-4 space-y-2 text-[#161616]">
          <li className="py-2 border-b border-gray-700">
            <Link 
              to="/" 
              onClick={handleNavClick}
              className={`${isActive("/") ? "text-[#615cf6]" : "text-[#161616]"} hover:text-[#615cf6] text-base leading-7 font-medium transition cursor-pointer`}
            >
              Home
            </Link>
          </li>
          <li className="py-2 border-b border-gray-700">
            <Link 
              to="/services" 
              onClick={handleNavClick}
              className={`block ${isActive("/services") ? "text-[#615cf6]" : "text-[#161616]"} hover:text-[#615cf6] text-base leading-7 font-medium transition cursor-pointer`}
            >
              Services
            </Link>
          </li>
          <li className="py-2 border-b border-gray-700">
            <Link 
              to="/portfolio" 
              onClick={handleNavClick}
              className={`block ${isActive("/portfolio") ? "text-[#615cf6]" : "text-[#161616]"} hover:text-[#615cf6] text-base leading-7 font-medium transition cursor-pointer`}
            >
              Portfolio
            </Link>
          </li>
          <li className="py-2 border-b border-gray-700">
            <Link 
              to="/about-us" 
              onClick={handleNavClick}
              className={`block ${isActive("/about-us") ? "text-[#615cf6]" : "text-[#161616]"} hover:text-[#615cf6] text-base leading-7 font-medium transition cursor-pointer`}
            >
              About us
            </Link>
          </li>
          <li className="py-2 border-b border-gray-700">
            <Link 
              to="/contact" 
              onClick={handleNavClick}
              className={`block ${isActive("/contact") ? "text-[#615cf6]" : "text-[#161616]"} hover:text-[#615cf6] text-base leading-7 font-medium transition cursor-pointer`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="py-2">
          <h3 className="text-xl font-bold leading-[130%] text-[#161616] mb-[15px] ">Contact Info</h3>
          <ul className="mb-4">
            <li className="flex justify-start gap-3 items-center py-2">
              {" "}
              <SquareDashed className="w-4 h-5 text-[#615cf6]" /> Main Street, Melbourne, Australia{" "}
            </li>
            <li className="flex justify-start gap-3 items-center py-2">
              {" "}
              <SquareDashed className="w-4 h-5 text-[#615cf6]" /> info@example.com{" "}
            </li>
            <li className="flex justify-start gap-3 items-center py-2">
              {" "}
              <SquareDashed className="w-4 h-5 text-[#615cf6]" /> Mod-friday, 09am -05pm{" "}
            </li>
            <li className="flex justify-start gap-3 items-center py-2">
              {" "}
              <SquareDashed className="w-4 h-5 text-[#615cf6]" /> +11002345909{" "}
            </li>
          </ul>
          <button className="w-full flex justify-center items-center gap-1 bg-[#3147ff] relative overflow-hidden text-white leading-7 min-w-[145px] py-4 px-[18px] rounded-[66px] transition-all duration-300 cursor-pointer text-[15px] group">
            <span className="relative z-10 flex items-center gap-1">Get A Quote</span>

            {/* Hover Effect - Background Sliding in from Left */}
            <span className="absolute inset-0 bg-black translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          </button>

          <div className="flex justify-start gap-3 my-6">
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] border border-[#d4dcff] transition-all duration-500 ease-in-out group hover:bg-[#3147ff] cursor-pointer">
              <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 text-[#49515b] group-hover:text-white " />
            </span>
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] border border-[#d4dcff] transition-all duration-500 ease-in-out group hover:bg-[#3147ff] cursor-pointer">
              <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 text-[#49515b] group-hover:text-white " />
            </span>
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] border border-[#d4dcff] transition-all duration-500 ease-in-out group hover:bg-[#3147ff] cursor-pointer">
              <FontAwesomeIcon icon={faYoutube} className="w-4 h-4 text-[#49515b] group-hover:text-white " />
            </span>
            <span className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] border border-[#d4dcff] transition-all duration-500 ease-in-out group hover:bg-[#3147ff] cursor-pointer">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 text-[#49515b] group-hover:text-white " />
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay (Closes Sidebar on Click) */}
      {(isSidebarOpen || isMenuOpen) && (
        <div
          className="fixed overflow-hidden inset-0 bg-[#151515] opacity-80 z-10"
          onClick={() => {
            toggleSideMenubar();
          }}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;