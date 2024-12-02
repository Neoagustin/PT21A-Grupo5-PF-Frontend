import Image from 'next/image'
import React from 'react'

const CertificationsImage: React.FC = (): React.ReactElement => {
  return (
    <div className='flex flex-col items-center rounded-[10px] shadow-md w-[230px] h-[345px] xl:w-[280px] xl:h-[420px]'>
                              <p className='text-[20px] font-bold absolute mt-[15px] z-10 bg-slate-400 p-[4px] rounded-md shadow-md lg:text-[25px]'>Certificaciones</p>
                              <Image
                              className="rounded-[10px] relative object-cover xl:w-[280px] xl:h-[420px]"
                              src={"https://i.pinimg.com/236x/19/98/d0/1998d0d3e9ce5d60bd28746c0acb9aab.jpg"}
                              alt="Certifications"
                              width={230}
                              height={345}
                              />
    </div>
  )
}

export default CertificationsImage