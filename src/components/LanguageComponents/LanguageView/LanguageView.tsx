"use client";

import React from "react";
import CardCourse from "../../GeneralComponents/CardCourse/CardCourse";
import ILanguage from "@/interfaces/ILanguage";
import useLanguages from "@/hooks/useLanguage";
import Loading from "@/components/GeneralComponents/Loading/Loading";
import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";

const LanguageView: React.FC<{ slug: string }> = ({ slug }: { slug: string }): React.ReactElement => {

    const { languages, loading } = useLanguages();

    const findLanguage = languages.find((language: ILanguage) => slug === language.path.toLowerCase())

    return (

        <div className="min-h-[calc(100vh-80px)] flex items-center mt-10">
            {
                loading ? <Loading /> : (
                    <div className="w-full sm:px-[16px] flex flex-col gap-16">
                        <div className="flex flex-col items-center gap-[50px] sm:flex-row md:flex-row lg:flex-row xl:flex-row md:justify-center lg:justify-center xl:justify-center">
                            <div className="w-full flex flex-col items-end relative sm:w-[50%]">
                                <img
                                    src={findLanguage?.country_photo_url}
                                    alt="languageImage"
                                    className="w-[269px] h-[236px] flex-shrink-0 rounded-[20px] shadow-md shadow-gray md:w-[300px] lg:w-[345px] xl:w-[433px] md:h-[280px] lg:h-[280px] xl:h-[280px]"
                                />
                                <img
                                    src={findLanguage?.flag_url}
                                    alt="languageFlag"
                                    className="w-[122px] h-[70px] rounded-md absolute bottom-[-35px] left-0 flex-shrink-0 lg:left-[0px] xl:left-[80px]"
                                />
                            </div>

                            <div className="flex flex-col gap-[15px] items-start sm:w-[50%]">
                                <h1 className="flex-shrink-0 justify-center text-center text-[24px] font-bold leading-none text-black">
                                    {findLanguage?.name}
                                </h1>
                                <p className="flex-shrink-0 md:w-[340px] lg:w-[393px] text-[12px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-normal leading-none text-gray">
                                    {findLanguage?.general_description}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-[40px]">
                            <Subtitle label={`¿Por qué te gustaria estudiar ${findLanguage?.name}?`} />

                            <div className="w-full flex justify-between md:justify-center md:gap-10">
                                <button className="buttonFilterCategory buttonFilterCategoryActive">Todos</button>
                                <button className="buttonFilterCategory">Viajar</button>
                                <button className="buttonFilterCategory">Exámen</button>
                                <button className="buttonFilterCategory">Trabajo</button>
                            </div>
                        </div>

                        <div className="shadow-md shadow-lightgray py-6 px-2 mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
                            {findLanguage &&
                                findLanguage?.courses.map((course) => {
                                    return <CardCourse key={course.id} course={course} />;
                                })}
                        </div>
                    </div>
                )
            }
        </div>

    );

};

export default LanguageView;