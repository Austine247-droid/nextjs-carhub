import { images } from '@/constants/images'
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import Image from 'next/image'
import React from 'react'

const CarCard = ({ city_mpg, year, make, model, transmission, drive }: CarProps) => {
  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className=" flex mt-6 text-[32px]">
        <span className="text-[14px] font-semibold">$54,000</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={images.hero} alt="car model" fill priority className="object-contain" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2"></div>
        </div>
      </div>
    </div>
  )
}

export default CarCard
