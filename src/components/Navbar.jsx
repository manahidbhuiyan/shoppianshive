import { useState } from "react";
import { X, AlignJustify , ChevronDown, Phone, Plus, Minus } from "lucide-react"; // Sidebar Icons
import reactLogo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track dropdown state

  // Toggle Menubar
  const toggleMenubar = () => {
    setMenuIsOpen(!isMenuOpen);
  };
  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Toggle Dropdowns
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <a href="#" className="w-40 md:w-52">
          <img src={reactLogo} alt="" />
        </a>

        <ul className="hidden md:flex space-x-8 text-black">
          <li>
            <a href="#" className="hover:text-blue-600 transition cursor-pointer">
              Home
            </a>
          </li>
          <li className="relative group">
            <button onMouseOver={() => toggleDropdown("pages")} className="flex items-center space-x-1 hover:text-blue-600 transition cursor-pointer">
              Pages <ChevronDown className="w-4 h-4 ml-1 mt-1" />
            </button>
            {openDropdown === "pages" && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 w-40">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-100">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-100">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-100">
                    Careers
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button onMouseOver={() => toggleDropdown("services")} className="flex items-center space-x-1 hover:text-blue-600 transition cursor-pointer">
              Services <ChevronDown className="w-4 h-4 ml-1 mt-1" />
            </button>
            {openDropdown === "services" && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 w-40">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-100">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-100">
                    SEO
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-100">
                    Marketing
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition cursor-pointer">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition cursor-pointer">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Contact & Sidebar Toggle */}
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex text-gray-700 justify-start items-center gap-2">
            <span className="bg-gray-200 p-1.5 rounded-sm">
              <Phone />
            </span>
            <div>
              <p className="text-xs font-semibold text-[#3f444b]">Any Question</p>
              <p className="text-base text-[#161616] "> +123 456 789</p>
            </div>
          </div>

          <button className="hidden md:block bg-black text-white px-4 py-2 rounded-md transition cursor-pointer">Contact Us</button>

          {/* Sidebar Icon (Not Visible on Small Screens) */}
          <button onClick={toggleSidebar}>
            <AlignJustify className="w-6 h-6 text-gray-700 cursor-pointer hidden md:block" />
          </button>
           {/* Munubar Icon (Always Visible on Small Screens) */}
          <button onClick={toggleMenubar}>
            <AlignJustify className="w-6 h-6 text-gray-700 cursor-pointer block md:hidden" />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white shadow-md transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 shadow-md ">
        <a href="#" className="w-40">
          <img src={reactLogo} alt="" />
        </a>
          <button onClick={toggleMenubar} className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] bg-[#3147ff] " >
            <X className="w-6 h-6 text-white font-bold" />
          </button>
        </div>

        <ul className="p-4 space-y-2 text-gray-700">
          <li className=" py-2 border-b border-gray-700">
            <a href="#" >
              Home
            </a>
          </li>
          <li className="relative py-2 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <button className="block">Pages</button>
              <button onClick={() => toggleDropdown("pages")}>
                {openDropdown === "pages" ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
            </div>
            {openDropdown === "pages" && (
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="block p-2 pl-5 border-b border-gray-700">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 pl-5 border-b border-gray-700">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 pl-5 border-b border-gray-700">
                    Careers
                  </a>
                </li>
              </ul>
            )}
          </li>
          {/* Services Dropdown */}
          <li className="relative py-2 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <button className="block">Services</button>
              <button onClick={() => toggleDropdown("services")}>
                {openDropdown === "services" ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
            </div>
            {openDropdown === "services" && (
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="block p-2 pl-5 border-b border-gray-700">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 pl-5 border-b border-gray-700">
                    SEO
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 pl-5 border-b border-gray-700">
                    Marketing
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className=" py-2 border-b border-gray-700">
            <a href="#" className="block">
              Portfolio
            </a>
          </li>
          <li className=" py-2 border-b border-gray-700">
            <a href="#" className="block">
              Contact
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
