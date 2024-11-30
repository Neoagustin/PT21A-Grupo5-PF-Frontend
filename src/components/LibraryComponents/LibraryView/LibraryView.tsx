import Image from 'next/image'
import React from 'react'
import { certifications } from '../helpers/certifications'
import CertificationsCards from '../CertificationsCards/CertificationsCards'
import { courses } from '../helpers/courses'
import EnrolledCoursesCards from '../EnrolledCoursesCards/EnrolledCoursesCards'

const LibraryView: React.FC = (): React.ReactElement => {



  return (
    <>
                <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-[35px] items-center justify-center mt-[50px] sm:gap-[20px]'> {/*Certifications contaier*/}

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

                          <div className="flex flex-col rounded-[10px] shadow-sm bg-slate-400 items-center w-[326px] h-[345px] sm:w-[360px] md:w-[460px] lg:w-[625px] xl:w-[675px] xl:h-[420px]">

                            {certifications?.map((certification)=>{
                              return(
                              <CertificationsCards key={certification.id} flag={certification.flag} language={certification.language} courseName={certification.courseName}/>  
                              )
                            })}

                          </div>
                    
                </div>



                <div className='flex flex-col gap-[35px] mt-[50px] items-center'> {/*Courses container*/}

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

                    
                    <div
                          className={`max-w-[1280px] ${
                            courses && courses.length !== 0 &&
                            "shadow-md shadow-lightgray py-6 px-2 gap-4 mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 justify-center"
                          }`}
                    >
                          {courses &&
                            (courses.length !== 0 ? (
                              courses.map((course) => {
                                return (
                                  <EnrolledCoursesCards key={course.id} language={course.language} title={course.title} image={course.img_url} description={course.brief_description}/>
                                );
                              })
                            ) : (
                              <div className="flex justify-center items-center w-full h-[351px]">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                                  Aún no te has enrolado en ningun curso.
                                </p>
                              </div>
                            ))}
                    </div>      


                </div>

                <div className='flex flex-col items-center gap-[35px] mt-[50px] mb-[50px]'> {/*Image container*/}

                  <Image
                  className='shadow-2xl sm:w-[350px] sm:h-[250px] md:h-[280px] md:w-[380px] lg:h-[310px] lg:w-[410px] xl:h-[340px] xl:w-[440px]'
                  src="https://i.pinimg.com/236x/3b/63/00/3b6300216af6c5eb41226cd7c5a307ba.jpg"
                  alt='posibilities'
                  width={320}
                  height={220}
                  />

                  <p className='font-bold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px]'>Nunca olvides que tus posibilidades son <br/> amplísimas.... Solo debes animarte 💪💪</p>

                </div>
    
    </>
  )
}

export default LibraryView