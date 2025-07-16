'use client'

import { images } from '@/constants/images'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className="mx-auto max-w-[1440px] px-6 pt-36 flex flex-col gap-y-8 md:flex-row md:gap-x-10">
      {/* Hero text */}
      <div className="">
        <h1 className="hero__title">
          Find It. Book It. Drive It. <span className="text-[#0971b3]">CARZONE</span> makes it fast
          and easy.
        </h1>

        <p className="hero__subtitle">Drive Freedom. Book in Seconds. Explore Without Limits.</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-[#0971b3] text-white rounded-full mt-10 py-3 px-6 max-md:w-full hover:outline-neutral-300"
          handleClick={() => {
            handleScroll
          }}
        />
      </div>

      {/* Hero Image */}
      {/* <div className="w-fit flex justify-start items-start mb-10">
          <Image src={images.bannerCar} alt="hero" className="object-contain" width={700} height={700} />  
        </div> */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[600px] mb-5">
        <Image src={images.bannerCar} alt="hero" fill className="object-contain" priority />
      </div>
    </div>
  )
}

export default Hero
