import Image from 'next/image'
import React from 'react'

const CertificationsPosibilities: React.FC = (): React.ReactElement => {
  return (
    <div className='flex flex-col items-center gap-[35px] mt-[50px] mb-[50px]'> 

                  <Image
                  className='shadow-2xl sm:w-[350px] sm:h-[250px] md:h-[280px] md:w-[380px] lg:h-[310px] lg:w-[410px] xl:h-[340px] xl:w-[440px]'
                  src="https://i.pinimg.com/236x/3b/63/00/3b6300216af6c5eb41226cd7c5a307ba.jpg"
                  alt='posibilities'
                  width={320}
                  height={220}
                  />

                  <p className='font-bold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px]'>Nunca olvides que tus posibilidades son <br/> amplísimas.... Solo debes animarte 💪💪</p>

                </div>
  )
}

export default CertificationsPosibilities