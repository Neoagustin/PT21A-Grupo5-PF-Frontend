
"use client"
import React, { useEffect, useState } from 'react'
import CertificationsImage from '../CertificationsImage/CertificationsImage'
import CertificationsCardsContainer from '../CertificationsCardsContainer/CertificationsCardsContainer'
import CertificationsQuestion from '../CertificationsQuestion/CertificationsQuestion'
import EnrolledCourses from '../EnrolledCourses/EnrolledCourses'
import CertificationsPosibilities from '../CertificationsPosibilities/CertificationsPosibilities'
import { IUserLocalStorage } from '@/interfaces/IUserLocalStorage'

const LibraryView: React.FC = (): React.ReactElement => {

  const [userData, setUserData] = useState<IUserLocalStorage | null>(null);


  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const data = JSON.parse(localStorage.getItem("userData")!);
      setUserData(data);
    }
  }, []);

  return (
    <>
                  {/*Certifications contaier*/}

                <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-[35px] items-center justify-center mt-[50px] sm:gap-[20px]'> 
                          <CertificationsImage/>
                          <CertificationsCardsContainer userData={userData}/>                    
                </div>

                  {/*Courses container*/}

                <div className='flex flex-col gap-[35px] mt-[50px] items-center'> 
                    <CertificationsQuestion/>
                    <EnrolledCourses userCourses={userData?.courses}/>
                </div>


                {/*Posibilities container*/}
                <CertificationsPosibilities />
    </>
  );
};

export default LibraryView;
