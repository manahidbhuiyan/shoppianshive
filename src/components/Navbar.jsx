import { useState } from "react";
import { X, AlignJustify, ChevronDown, Phone, Plus, Minus, MoveUpRight } from "lucide-react"; // Sidebar Icons
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
    <nav className="bg-white border-b border-b-[#eee3fa] fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="w-40 md:w-52">
          <img src={reactLogo} alt="" />
        </a>

        <ul className="hidden md:flex items-center space-x-8 text-black">
          <li>
            <a
              href="#"
              className="text-[#161616] hover:text-[#615cf6] text-base leading-7 py-5 font-medium transition cursor-pointer"
            >
              Home
            </a>
          </li>
          <li className="relative group" onMouseLeave={() => toggleDropdown(null)}>
            <button
              onMouseEnter={() => toggleDropdown("pages")}
              className="flex items-center space-x-1 text-[#161616] hover:text-[#615cf6] text-base leading-7 py-5 font-medium transition cursor-pointer"
            >
              Pages <ChevronDown className="w-4 h-4 ml-1 mt-1" />
            </button>
            {openDropdown === "pages" && (
              <ul className="absolute top-[50px] left-0 min-w-[200px] bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] translate-y-[10px] transition-all duration-400 ease-in-out">
                <li className="">
                  <a
                    href="#"
                    className="block py-3 px-5 hover:bg-[#615cf6] text-base font-medium leading-7 hover:text-white border-b border-[#eeeeee]"
                  >
                    About Us
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="block py-3 px-5 hover:bg-[#615cf6] text-base font-medium leading-7 hover:text-white border-b border-[#eeeeee]"
                  >
                    Blog
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="block py-3 px-5 hover:bg-[#615cf6] text-base font-medium leading-7 hover:text-white border-b border-[#eeeeee]"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group" onMouseLeave={() => toggleDropdown(null)}>
            <button
              onMouseEnter={() => toggleDropdown("services")}
              className="flex items-center space-x-1 text-[#161616] hover:text-[#615cf6] text-base leading-7 py-5 font-medium transition cursor-pointer"
            >
              Services <ChevronDown className="w-4 h-4 ml-1 mt-1" />
            </button>
            {openDropdown === "services" && (
              <ul className="absolute top-[50px] left-0 min-w-[200px] bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] translate-y-[10px] transition-all duration-400 ease-in-out">
                <li className="">
                  <a
                    href="#"
                    className="block py-3 px-5 hover:bg-[#615cf6] text-base font-medium leading-7 hover:text-white border-b border-[#eeeeee]"
                  >
                    Web Development
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="block py-3 px-5 hover:bg-[#615cf6] text-base font-medium leading-7 hover:text-white border-b border-[#eeeeee]"
                  >
                    Web Design
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="block py-3 px-5 hover:bg-[#615cf6] text-base font-medium leading-7 hover:text-white border-b border-[#eeeeee]"
                  >
                    SEO
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className="text-[#161616] hover:text-[#615cf6] text-base leading-7 py-5 font-medium transition cursor-pointer"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#161616] hover:text-[#615cf6] text-base leading-7 py-5 font-medium transition cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Contact & Sidebar Toggle */}
        <div className="flex items-center space-x-8">
          <div className="hidden xl:flex text-gray-700 justify-start items-center gap-2">
            <span className="bg-gray-200 p-1.5 rounded-sm">
              <Phone />
            </span>
            <div>
              <p className="text-xs font-semibold text-[#3f444b]">Any Question</p>
              <p className="text-base text-[#161616] "> +123 456 789</p>
            </div>
          </div>

          <button className="hidden md:flex justify-center items-center gap-1 bg-black relative overflow-hidden text-white leading-7 min-w-[145px] py-2 px-[18px] rounded-md transition-all duration-300 cursor-pointer text-[15px] group">
  <span className="relative z-10 flex items-center gap-1">
    Contact Us <MoveUpRight className="text-white h-4 w-4 mt-[-3px]" />
  </span>
  
  {/* Hover Effect - Background Sliding in from Left */}
  <span className="absolute inset-0 bg-[#3147ff] translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
</button>


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
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 shadow-md ">
          <a href="#" className="w-40">
            <img src={reactLogo} alt="" />
          </a>
          <button
            onClick={toggleMenubar}
            className="w-[45px] h-[45px] flex justify-center items-center rounded-[50%] bg-[#615cf6] "
          >
            <X className="w-6 h-6 text-white font-bold" />
          </button>
        </div>

        <ul className="p-4 space-y-2 text-gray-700">
          <li className=" py-2 border-b border-gray-700">
            <a href="#">Home</a>
          </li>
          <li className="relative py-2 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <button className={`block ${openDropdown === "pages" ? "text-[#615cf6]" : ""}`}>Pages</button>
              <button onClick={() => toggleDropdown("pages")}>
                {openDropdown === "pages" ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                  <a href="#" className="block p-2 pl-5 ">
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
                {openDropdown === "services" ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
