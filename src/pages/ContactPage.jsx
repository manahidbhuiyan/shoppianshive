import React from 'react'
import BreadCrumb from '../components/breadcrumb'
import Footer_2 from '../components/Footer_2'

import { Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <BreadCrumb current={'Contact'} />
      {/* info */}
      <div className="container mx-auto my-14">
        <div class="flex justify-between rounded-2xl shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] bg-white">

          <div className="relative text-center py-[35px] px-[25px] w-full flex flex-col justify-center">
            <div className="icon w-[86px] h-[86px] mx-auto leading-[86px] text-center bg-[rgba(49,71,255,0.1)] mb-5 rounded-[12px] ">
            <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="content">
              <h3 className='text-2xl text-[#161616] font-bold leading-normal tracking-[0.2px] mb-[50px] '>Head Office</h3>
              <a href="#" className='text-[rgba(38,37,46,0.7)] text-center text-[20px] font-normal '>+7 (212) 654-33-35</a>
            </div>
          </div>

          <div className="relative text-center py-[35px] px-[25px] w-full">
            <div className="icon w-[86px] h-[86px] leading-[86px] text-center bg-[rgba(49,71,255,0.1)] mb-5 rounded-[12px] ">
            <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="content">
              <h3 className='text-2xl text-[#161616] font-bold leading-normal tracking-[0.2px] mb-[50px] '>Head Office</h3>
              <a href="#" className='text-[rgba(38,37,46,0.7)] text-center text-[20px] font-normal '>+7 (212) 654-33-35</a>
            </div>
          </div>

          <div className="relative text-center py-[35px] px-[25px] w-full">
            <div className="icon w-[86px] h-[86px] leading-[86px] text-center bg-[rgba(49,71,255,0.1)] mb-5 rounded-[12px] ">
            <Phone />
            </div>
            <div className="content">
              <h3 className='text-2xl text-[#161616] font-bold leading-normal tracking-[0.2px] mb-[50px] '>Head Office</h3>
              <a href="#" className='text-[rgba(38,37,46,0.7)] text-center text-[20px] font-normal '>+7 (212) 654-33-35</a>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer_2 />
    </div>
  )
}

export default ContactPage
