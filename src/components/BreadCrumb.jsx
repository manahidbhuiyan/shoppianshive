import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bgImage from '../assets/images/about/page-header-bg.jpg'

const BreadCrumb = ({current}) => {
  return (
    <div className='bg-cover bg-no-repeat bg-center w-full relative ' style={{ backgroundImage: `url(${bgImage})` }}>
      <div class="absolute inset-0 w-full h-full bg-gradient-to-t from-[#0F175B]/[0.94] to-[#1E2FC0]/[0.94] "></div>
      <div className="container mx-auto">
        <div className="relative py-[100px] z-10">
            <h1 className='wow fadeInU text-white text-[35px] md:text-[45px] lg:text-[56px] font-bold leading-[114%] mb-3 '>About</h1>
            <div className='inline-flex justify-center gap-2.5 py-2.5 px-[30px] bg-white rounded-4xl mt-5 text-base font-medium '>
                <p className='text-[#161616]'>Home</p>
                <p> <FontAwesomeIcon icon={faArrowRight} className='text-[#3147ff]' /> </p>
                <p className='text-[#3147ff]'> {current} </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
