import React from 'react'
import { handleGetCertificate, ICertificationsCardsProps } from './types'
import Image from 'next/image'

const CertificationsCards: React.FC<ICertificationsCardsProps> = ({flag, language, courseName, specialization, level, name}): React.ReactElement => {

  return (

    <div className='flex w-[305px] h-[56px] border-[2px] border-black rounded-[8px] shadow-sm mt-[20px] justify-between items-center sm:w-[340px] md:w-[440px] lg:w-[600px] xl:w-[650px]'>
    
    <div className='flex items-center gap-[5px] ml-[5px]'>
        <Image
        className='sm:w-[44px] sm:h-[29px] lg:w-[50px] lg:h-[35px] xl:w-[58px] xl:h-[43px]'
        src={flag!}
        alt="flag"
        width={38}
        height={23}
        />
        <div className='hidden md:block lg:block xl:block sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[15px]'>
        {language}
        </div>
    </div>

    <div className='text-[14px] font-bold sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]'>{courseName}</div>
    
    <div><button className='text-[14px] font-bold text-rose-700 mr-[5px] sm:text-[16px] md:text-[16px] lg:text-[21px] xl:text-[24px] cursor-pointer' onClick={()=>handleGetCertificate(language, specialization, courseName, level, name)}>PDF🥇</button>

    
    </div>

    </div>
  )
}

export default CertificationsCards