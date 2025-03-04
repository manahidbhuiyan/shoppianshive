import React from 'react'
import bgImage from '../assets/images/about/page-header-bg.jpg'

const BreadCrumb = () => {
  return (
    <div className='bg-cover bg-no-repeat bg-center w-full relative ' style={{ backgroundImage: `url(${bgImage})` }}>
      <div class="absolute inset-0 w-full h-full bg-gradient-to-t from-blue-800/90 to-blue-900/90 z-[-1]"></div>
      <div className="container mx-auto">
        <div className="py-[100px]">
            <h1 className='wow fadeInU text-white text-[35px] md:text-[45px] lg:text-[56px] font-bold leading-[114%] mb-3 '>About</h1>
            <div className='inline-flex py-2.5 px-[30x] gap-2.5 bg-white rounded-4xl mt-5  '>
                <p>Home</p>
                <p> - </p>
                <p>About</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
