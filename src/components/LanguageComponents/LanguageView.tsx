/* eslint-disable @next/next/no-img-element */

import CardCourse from "../GeneralComponents/CardCourse"








const LanguageView = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-[100px] sm:mt-[110px] md:mt-[115px] lg:mt-[115px] xl:mt-[115px] bg-white font-poppins">

        <div className="flex flex-col items-center gap-[50px] mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[80px] xl:mb-[80px] sm:flex-row md:flex-row lg:flex-row xl:flex-row sm:justify-center md:justify-center lg:justify-center xl:justify-center">

          
          <div className="flex flex-col relative">
            <img src="/assets/images/bigBeng.png" alt="languageImage" className="w-[269px] h-[236px] flex-shrink-0 rounded-[20px] ml-[61px] md:w-[300px] lg:w-[345px] xl:w-[433px] md:h-[280px] lg:h-[280px] xl:h-[280px]"/>
            <img src="/assets/images/englandFlag.png" alt="languageFlag" className="w-[122px] h-[70px] absolute bottom-[-35px] left-0 flex-shrink-0"/>
          </div>
          

          <div className="flex flex-col gap-[15px] items-start sm:h-[200px] md:h-[250px] lg:h-[280px] xl:h-[280px]">
            <h1 className="w-[88px] h-[21px] flex-shrink-0 justify-center text-center text-[24px] font-bold leading-none text-black">English</h1>
            <p className="w-[283px] flex-shrink-0 md:w-[340px] lg:w-[393px] text-[12px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-normal leading-none text-gray">El inglés es uno de los idiomas más influyentes y extendidos en el mundo, y su importancia abarca numerosos ámbitos, desde el académico hasta el profesional. Es el idioma más común para la comunicación internacional. En viajes, negocios y encuentros culturales, el inglés permite la interacción entre personas de diferentes países y culturas, facilitando el intercambio de ideas y la cooperación global. Entonces, el inglés es el idioma principal en tecnología e informática. Con esto podrás postular a muchas universidades y programas internacionales, muchos de los cuales se imparten en inglés, sin importar el país.</p>
            </div>

        </div>

        <div className="flex flex-col items-center gap-[40px] text-black mb-[40px]">
          
          <h2 className="font-bold text-[15px] sm:text-[18px] md:text-[23px] lg:text-[25px] xl:text-[25px]">¿Por qué te gustaria estudiar Inglés?</h2>

        <div className="flex gap-[30px] sm:gap-[70px] md:gap-[90px] lg:gap-[100px] xl:gap-[100px] justify-center items-center">
          <button className="shadow-md shadow-[#c5c5c5] bg-violet p-[4px] pl-[10px] pr-[10px] text-[12px] sm:text-[18px] md:text-[18px] lg:text[20px] xl:text[22px] lg:pl-[45px] lg:pr-[45px] xl:pl-[45px] xl:pr-[45px]">Todos</button>
          <button className="shadow-md shadow-[#c5c5c5] p-[4px] pl-[10px] pr-[10px] text-[12px] sm:text-[18px] md:text-[18px] lg:text[20px] xl:text[22px] lg:pl-[45px] lg:pr-[45px] xl:pl-[45px] xl:pr-[45px]">Viajar</button>
          <button className="shadow-md shadow-[#c5c5c5] p-[4px] pl-[10px] pr-[10px] text-[12px] sm:text-[18px] md:text-[18px] lg:text[20px] xl:text[22px] lg:pl-[45px] lg:pr-[45px] xl:pl-[45px] xl:pr-[45px]">Exámen</button>
          <button className="shadow-md shadow-[#c5c5c5] p-[4px] pl-[10px] pr-[10px] text-[12px] sm:text-[18px] md:text-[18px] lg:text[20px] xl:text[22px] lg:pl-[45px] lg:pr-[45px] xl:pl-[45px] xl:pr-[45px]">Trabajo</button>  
        </div>

        </div>


        <div>

            <CardCourse
            title="languageName"
            img="/assets/images/englishCourse.png"
            description="The First Certificate in English (FCE), also known as the B2 First, is an internationally recognized English language examination organized by Cambridge English. It assesses a candidate's proficiency at a ...."
            />  

        </div>



   </div>

    
  )
}

export default LanguageView


