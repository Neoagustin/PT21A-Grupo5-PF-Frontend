import ICourse from '@/interfaces/ICourse'
import React from 'react'
import CertificationsCards from './CertificationsCards/CertificationsCards'
import { IUserLocalStorage } from '@/interfaces/IUserLocalStorage'

const CertificationsCardsContainer: React.FC<{userData: IUserLocalStorage | null}> = ({userData}): React.ReactElement => {
  return (
    <div className="flex flex-col rounded-[10px] shadow-sm bg-slate-400 items-center w-[326px] h-[345px] sm:w-[360px] md:w-[460px] lg:w-[625px] xl:w-[675px] xl:h-[420px]">
    {userData?.courses &&
    (userData?.courses.length !== 0 ? (
      userData?.courses?.map((course: ICourse)=>{
      return(
      <CertificationsCards key={course.id} flag={course.language?.flag_url} language={course.language?.name} courseName={course.title} specialization={course.specialization} level={course.level} name={userData.name} plan={userData.membership.subscription.name}/>  
      )
    })
    ) : (
      <div className="flex justify-center items-center w-full h-[351px]">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          Aún no te has enrolado en ningun curso.
        </p>
      </div>
    ))}
  </div>
  )
}

export default CertificationsCardsContainer