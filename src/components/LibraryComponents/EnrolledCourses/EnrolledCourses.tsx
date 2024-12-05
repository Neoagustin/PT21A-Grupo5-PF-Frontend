import ICourse from '@/interfaces/ICourse';
import React from 'react'
import EnrolledCoursesCards from './EnrolledCoursesCards/EnrolledCoursesCards';

const EnrolledCourses: React.FC<{userCourses:ICourse[] | undefined}> = ({userCourses}): React.ReactElement => {
  return (
    <div
                          className={`max-w-[1280px] ${
                            userCourses && userCourses.length !== 0 &&
                            "shadow-md shadow-lightgray py-6 px-2 gap-4 mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 justify-center"
                          }`}
                    >
                          {userCourses &&
                            (userCourses.length !== 0 ? (
                              userCourses.map((course) => {
                                return (
                                  <EnrolledCoursesCards key={course.id} language={course.language?.path} title={course.title} image={course.img_url} description={course.brief_description}/>
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
  )
}

export default EnrolledCourses