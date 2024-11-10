/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
  return (



    <div className="max-w-[1200px] mx-auto bg-white h-[854px] md:h-[586px] lg:h-[586px] xl:h-[586px] flex flex-col font-poppins relative">


 
              <div className="flex flex-col gap-[100px] md:flex-row lg:flex-row xl:flex-row items-center h-full justify-center">

                  <img src="/assets/images/logoRB.png" alt="logoRB" className="hidden lg:block w-[230px] h-[230px]" />

                 <div className="flex flex-col gap-[20px]">
                    <div className="flex justify-center">
                      <p className="font-bold">Redes Sociales</p>
                    </div>
                    <div className="flex flex-col gap-[10px] justify-center">
                      <div className="flex gap-[5px] items-center justify-center">
                      <img src="/assets/images/youtubeRB.png" alt="youtubeRB"/><p>/rompiendobarreras</p>                      
                      </div>
                      <div className="flex gap-[5px] items-center justify-center">
                      <img src="/assets/images/twitterRB.png" alt="twitterRB" /><p>/rompiendobarreras</p>
                      </div>
                      <div className="flex gap-[5px] items-center justify-center">
                      <img src="/assets/images/linkedinRB.png" alt="linkedinRB" /><p>/rompiendobarreras</p>
                      </div>
                      <div className="flex gap-[5px] items-center justify-center">
                      <img src="/assets/images/instagramRB.png" alt="instagramRB" /><p>/rompiendobarreras</p>
                    </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[20px]">
                    <div className="flex justify-center">
                      <p className="font-bold">Informacion de contacto</p>
                    </div>
                    <div className="flex flex-col gap-[10px] justify-center">
                      <div className="flex gap-[5px] items-center justify-center">
                      <img src="/assets/images/locationRB.png" alt="locationRB"/><p>Av. Rompiendo Barreras 2870</p>                      
                      </div>
                      <div className="flex gap-[5px] items-center justify-center">
                      <img src="/assets/images/mailRB.png" alt="mailRB" /><p>rompiendobarreras@gmail.com</p>
                      </div>
                    </div>
                  </div>

              </div>
    














      <div className="flex flex-col items-center justify-center absolute bottom-0 gap-[8px] mb-[8px] w-full">

        
          <hr className="bg-black w-[340px] h-[1px] sm:w-[620px] md:w-[740px] lg:w-[860px] xl:w-[1200px]" />

          <p className="text-[gray] text-[16px] sm:text-[24px] md:text-[24px] lg:text-[24px]">© Copyright rompiendo barreras 2025</p>
        

      </div>     
        
    </div>
  

)
}




export default Footer









