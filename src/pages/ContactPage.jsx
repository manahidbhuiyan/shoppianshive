import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb.jsx";
import Footer_2 from "../components/Footer_2";

import { Phone, Mail, MapPin, PhoneCall } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <BreadCrumb current={"Contact"} />
      {/* info */}
      <div className="container mx-auto my-14">
        <div class="lg:flex lg:justify-between grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] bg-white ">
          <div className="relative text-center py-[35px] px-[25px] w-full">
            <div className="absolute w-[70%] mx-auto md:w-0.5 h-0.5 md:h-[112px] bg-[#EBEDFF] top-full md:top-1/2 transform translate-[-50%] left-[50%] md:right-0 md:left-full "></div>
            <div className="icon w-[86px] h-[86px] mx-auto leading-[86px] text-center bg-[rgba(49,71,255,0.1)] mb-5 rounded-[12px] flex justify-center items-center ">
              <Phone className="text-[#3147ff] w-8 h-8 " />
            </div>
            <div className="content">
              <h3 className="text-2xl text-[#161616] font-bold leading-normal tracking-[0.2px] ">Head Office</h3>
              <a href="#" className="text-[rgba(38,37,46,0.7)] text-center text-[20px] font-normal ">
                +7 (212) 654-33-35
              </a>
            </div>
          </div>

          <div className="relative text-center py-[35px] px-[25px] w-full">
            <div className="absolute w-0 h-0 lg:w-0.5 lg:h-[112px] bg-[#EBEDFF] lg:top-1/2 transform translate-[-50%] lg:right-0 "></div>
            <div className="icon w-[86px] h-[86px] mx-auto leading-[86px] text-center bg-[rgba(49,71,255,0.1)] mb-5 rounded-[12px] flex justify-center items-center ">
              <Mail className="text-[#3147ff] w-8 h-8" />
            </div>
            <div className="content">
              <h3 className="text-2xl text-[#161616] font-bold leading-normal tracking-[0.2px] ">Our Email Address</h3>
              <a href="#" className="text-[rgba(38,37,46,0.7)] text-center text-[20px] font-normal ">
                info@example.com
              </a>
            </div>
          </div>

          <div className="relative text-center py-[35px] px-[25px] w-full">
            <div className="icon w-[86px] h-[86px] mx-auto leading-[86px] text-center bg-[rgba(49,71,255,0.1)] mb-5 rounded-[12px] flex justify-center items-center ">
              <MapPin className="text-[#3147ff] w-8 h-8" />
            </div>
            <div className="content">
              <h3 className="text-2xl text-[#161616] font-bold leading-normal tracking-[0.2px] ">Office Location</h3>
              <a href="#" className="text-[rgba(38,37,46,0.7)] text-center text-[20px] font-normal ">
                666 road, broklyn street new york
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* info 2 */}
      <div className="container mx-auto flex gap-5 flex-col md:flex-row ">
        <div className="w-full md:w-1/3 flex flex-col gap-10">
          <div className="w-full border border-[#EEEEEE] rounded-2xl p-[35px] pr-[5px]">
            <h3 className="text-2xl font-semibold leading-[31px] text-[#161616] mb-5 ">Sydne, Australia</h3>
            <ul>
              <li className="flex justify-start items-center gap-5 mb-3 ">
                <div className="w-[34px] h-[34px] flex justify-center items-center rounded-full bg-[rgb(249,249,249)] shadow-xl border border-[#3147ff] ">
                  <PhoneCall className="text-[#3147ff] w-4 h-4 " />
                </div>
                <div>
                  <p className="text-[#161616] text-base font-normal mb-1 hover:text-[#3147ff] cursor-pointer ">
                    +44-2002-5432111
                  </p>
                  <p className="text-[#161616] text-base font-normal hover:text-[#3147ff] cursor-pointer ">
                    +44-2002-5432111
                  </p>
                </div>
              </li>
              <li className="flex justify-start items-center gap-5 mb-3">
                <div className="w-[34px] h-[34px] flex justify-center items-center rounded-full bg-[rgb(249,249,249)] shadow-xl border border-[#3147ff] ">
                  <Mail className="text-[#3147ff] w-4 h-4 " />
                </div>
                <div>
                  <p className="text-[#161616] text-base font-normal mb-1 hover:text-[#3147ff] cursor-pointer ">
                    info@example.com
                  </p>
                  <p className="text-[#161616] text-base font-normal hover:text-[#3147ff] cursor-pointer ">
                    info@example.com
                  </p>
                </div>
              </li>
              <li className="flex justify-start items-center gap-5 mb-3">
                <div className="max-w-[34px] w-full h-[34px] flex justify-center items-center rounded-full bg-[rgb(249,249,249)] shadow-xl border border-[#3147ff] ">
                  <MapPin className="text-[#3147ff] w-4 h-4 " />
                </div>
                <div>
                  <p className="text-[#161616] text-base font-normal mb-1 hover:text-[#3147ff] cursor-pointer ">
                    23 Division Park, New York, NY 10002, USA
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full border border-[#EEEEEE] rounded-2xl p-[35px] pr-[5px]">
            <h3 className="text-2xl font-semibold leading-[31px] text-[#161616] mb-5 ">New York, USA</h3>
            <ul>
              <li className="flex justify-start items-center gap-5 mb-3 ">
                <div className="w-[34px] h-[34px] flex justify-center items-center rounded-full bg-[rgb(249,249,249)] shadow-xl border border-[#3147ff] ">
                  <PhoneCall className="text-[#3147ff] w-4 h-4 " />
                </div>
                <div>
                  <p className="text-[#161616] text-base font-normal mb-1 hover:text-[#3147ff] cursor-pointer ">
                    +44-2002-5432111
                  </p>
                  <p className="text-[#161616] text-base font-normal hover:text-[#3147ff] cursor-pointer ">
                    +44-2002-5432111
                  </p>
                </div>
              </li>
              <li className="flex justify-start items-center gap-5 mb-3">
                <div className="w-[34px] h-[34px] flex justify-center items-center rounded-full bg-[rgb(249,249,249)] shadow-xl border border-[#3147ff] ">
                  <Mail className="text-[#3147ff] w-4 h-4 " />
                </div>
                <div>
                  <p className="text-[#161616] text-base font-normal mb-1 hover:text-[#3147ff] cursor-pointer ">
                    info@example.com
                  </p>
                  <p className="text-[#161616] text-base font-normal hover:text-[#3147ff] cursor-pointer ">
                    info@example.com
                  </p>
                </div>
              </li>
              <li className="flex justify-start items-center gap-5 mb-3">
                <div className="max-w-[34px] w-full h-[34px] flex justify-center items-center rounded-full bg-[rgb(249,249,249)] shadow-xl border border-[#3147ff] ">
                  <MapPin className="text-[#3147ff] w-4 h-4 " />
                </div>
                <div>
                  <p className="text-[#161616] text-base font-normal mb-1 hover:text-[#3147ff] cursor-pointer ">
                    23 Division Park, New York, NY 10002, USA
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-2/3 bg-[#F6F8FF] p-5 lg:py-[35px] lg:px-[45px] rounded-2xl shadow-lg">
          <h2 className="text-[#161616] text-[27px] font-semibold leading-[45px] mb-4 ">Get In Touch With Us.</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-b border-[#d4dcff] text-[#49515B] focus:outline-none placeholder-[#49515B] pt-[30px] pr-[10px] pb-[10px]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Mail*"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-[#d4dcff] text-[#49515B] focus:outline-none placeholder-[#49515B] pt-[30px] pr-[10px] pb-[10px]"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-[#d4dcff] text-[#49515B] focus:outline-none placeholder-[#49515B] pt-[30px] pr-[10px] pb-[10px]"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border-b border-[#d4dcff] text-[#49515B] focus:outline-none placeholder-[#49515B] pt-[30px] pr-[10px] pb-[10px]"
                required
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                placeholder="Your Message*"
                onChange={handleChange}
                className="w-full border-b border-[#d4dcff] text-[#49515B] focus:outline-none placeholder-[#49515B] pt-[30px] pr-[10px] pb-[10px]"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2 mt-2.5 mb-10">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="w-4 h-4 border-[#d4dcff] text-[#49515B] rounded cursor-pointer "
                required
              />
              <label className="text-[#515151] text-[15px] font-normal leading-5 ">
                I agree to the Terms & Conditions
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="min-w-[170px] inline-block py-[21px] px-10 bg-[#3147ff] text-white leading-none text-[18px] rounded-[66px] font-semibold transition"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
      {/* map */}


      <div className="w-full h-[800px] mt-[60px] md:mt-[80px] lg:mt-[110px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930141334!2d90.25487247764767!3d23.781067239454273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1741296497412!5m2!1sen!2sbd"
    className="w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      {/* footer */}
      <Footer_2 />
    </div>
  );
};

export default ContactPage;
