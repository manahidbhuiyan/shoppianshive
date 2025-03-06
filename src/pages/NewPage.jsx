import React from 'react'
import BreadCrumb from '../components/breadcrumb'
import Footer_2 from '../components/Footer_2'

import { Phone, Mail, MapPin, PhoneCall   } from 'lucide-react';

const NewPage = () => {
  return (
    <div>
    <BreadCrumb current={'Contact'} />
    {/* info */}
    <div className="container mx-auto my-14">
      <div class="lg:flex lg:justify-between grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] bg-white ">

        <div className="relative text-center py-[35px] px-[25px] w-full">
          <div className='absolute w-[70%] mx-auto md:w-0.5 h-0.5 md:h-[112px] bg-[#EBEDFF] top-full md:top-1/2 transform translate-[-50%] left-[50%] md:right-0 md:left-full '></div>
          <div className="icon w-[86px] h-[86px] mx-auto leading-[86px] text-center bg-[rgba(49,71,255,0.1)] mb-5 rounded-[12px] flex justify-center items-center ">
          <Phone className="text-[#3147ff] w-8 h-8 " />
          </div>
          <div className="content">
            <h3 className='text-2xl text-[#161616] font-bold leading-normal tracking-[0.2px] '>Head Office</h3>
            <a href="#" className='text-[rgba(38,37,46,0.7)] text-center text-[20px] font-normal '>+7 (212) 654-33-35</a>
          </div>
        </div>

        <div className="relative text-center py-[35px] px-[25px] w-full">
        <div className='absolute w-0 h-0 lg:w-0.5 lg:h-[112px] bg-[#EBEDFF] lg:top-1/2 transform translate-[-50%] lg:right-0 '></div>
          <div className="icon w-[86px] h-[86px] mx-auto leading-[86px] text-center bg-[rgba(49,71,255,0.1)] mb-5 rounded-[12px] flex justify-center items-center ">
          <Mail className='text-[#3147ff] w-8 h-8' />
          </div>
          <div className="content">
            <h3 className='text-2xl text-[#161616] font-bold leading-normal tracking-[0.2px] '>Our Email Address</h3>
            <a href="#" className='text-[rgba(38,37,46,0.7)] text-center text-[20px] font-normal '>info@example.com</a>
          </div>
        </div>

        <div className="relative text-center py-[35px] px-[25px] w-full">
          <div className="icon w-[86px] h-[86px] mx-auto leading-[86px] text-center bg-[rgba(49,71,255,0.1)] mb-5 rounded-[12px] flex justify-center items-center ">
          <MapPin className='text-[#3147ff] w-8 h-8' />
          </div>
          <div className="content">
            <h3 className='text-2xl text-[#161616] font-bold leading-normal tracking-[0.2px] '>Office Location</h3>
            <a href="#" className='text-[rgba(38,37,46,0.7)] text-center text-[20px] font-normal '>666 road, broklyn street new york</a>
          </div>
        </div>
      </div>
    </div>
    {/* info 2 */}
    <div className="container mx-auto flex gap-5 flex-col md:flex-row ">
      <div className="w-full md:w-1/4 border border-[#EEEEEE] rounded-[16px] p-[35px] pr-[5px]">
        <h3 className='text-2xl font-semibold leading-[31px] text-[#161616] mb-5 '>Sydne, Australia</h3>
        <ul>
          <li className='flex justify-start items-center gap-5 mb-3 '>
            <div className='w-[34px] h-[34px] flex justify-center items-center rounded-full bg-[rgb(249,249,249)] shadow-xl border border-[#3147ff] ' >
            <PhoneCall className="text-[#3147ff] w-4 h-4 " />
            </div>
            <div>
              <p className='text-[#161616] text-base font-normal mb-1 hover:text-[#3147ff] cursor-pointer '>+44-2002-5432111</p>
              <p className='text-[#161616] text-base font-normal hover:text-[#3147ff] cursor-pointer '>+44-2002-5432111</p>
            </div>
          </li>
          <li className='flex justify-start items-center gap-5 mb-3'>
          <div className='w-[34px] h-[34px] flex justify-center items-center rounded-full bg-[rgb(249,249,249)] shadow-xl border border-[#3147ff] ' >
            <Mail className="text-[#3147ff] w-4 h-4 " />
            </div>
            <div>
              <p className='text-[#161616] text-base font-normal mb-1 hover:text-[#3147ff] cursor-pointer '>info@example.com</p>
              <p className='text-[#161616] text-base font-normal hover:text-[#3147ff] cursor-pointer '>info@example.com</p>
            </div>

           
          </li>
          <li className='flex justify-start items-center gap-5 mb-3'>
          <div className='max-w-[34px] w-full h-[34px] flex justify-center items-center rounded-full bg-[rgb(249,249,249)] shadow-xl border border-[#3147ff] ' >
            <MapPin className="text-[#3147ff] w-4 h-4 " />
            </div>
            <div>
              <p className='text-[#161616] text-base font-normal mb-1 hover:text-[#3147ff] cursor-pointer '>23 Division Park, New York, NY 10002, USA</p>
            </div>

           
          </li>
          
        </ul>
      </div>
    </div>

    {/* footer */}
    <Footer_2 />
  </div>
  )
}

export default NewPage
