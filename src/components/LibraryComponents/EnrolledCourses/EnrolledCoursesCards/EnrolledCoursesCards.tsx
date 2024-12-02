import React from 'react'
import { IEnrolledCoursesCardsProps } from './types'
import Link from 'next/link'
import Image from 'next/image'

const EnrolledCoursesCards: React.FC<IEnrolledCoursesCardsProps> = ({language, title, image, description}): React.ReactElement => {
  return (
    <Link
      href={`/language/${language}/${title?.toLowerCase()}`}
      className="
        mx-auto w-[80%] max-w-[280px] border border-solid border-lightgray rounded-[7px] cursor-pointer transition-all duration-300 ease-in-out 
        hover:border-[#fff0] hover:shadow-lg hover:scale-[1.02]
        sm:w-[100%] max"
    >
      <Image
        className="rounded-t-[7px] max-h-[160px] min-h-[160px]"
        src={image!}
        width={500}
        height={500}
        priority
        alt="imagen de ingles"
      />
      <div className="p-2 text-center">
        <h3 className="text-[16px] font-semibold pb-2 lg:text-[18px]">{title}</h3>
        <p className="font-light text-gray text-[12px] md:text-[13px] lg:text-[15px] line-clamp-4">
          {description}
        </p>
      </div>
    </Link>
  )
}

export default EnrolledCoursesCards