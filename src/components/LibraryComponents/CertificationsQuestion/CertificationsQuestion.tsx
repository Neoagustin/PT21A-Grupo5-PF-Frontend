import Image from 'next/image'
import React from 'react'

const CertificationsQuestion = () => {
  return (
    <div className='flex gap-[10px] items-center'>
                      <Image
                      className="hidden sm:block md:block lg:block xl:block md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[270px] xl:h-[270px]"
                      src='https://i.pinimg.com/236x/8f/6d/98/8f6d98620dcb617e5d1caea3d11c5b2b.jpg'
                      alt='languages'
                      width={170}
                      height={170}
                      />
                      <p className='text-[14px] font-bold sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[34px]'>¿Con qué nuevos idiomas te vas especializando?</p>
                    </div>
  )
}

export default CertificationsQuestion