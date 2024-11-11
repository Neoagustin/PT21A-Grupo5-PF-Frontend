import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CardVideo: React.FC = (): React.ReactElement => {

    return (

        <div className="flex shadow-md shadow-gray">
            <div className="relative w-[159px] h-[250px]">
                <div className="w-[159px] h-[250px] bg-[#222222BB] absolute top-0">
                    <div>
                        <Image className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" src={'/assets/icons/iconCircleTestVideo.svg'} alt="Icono de video de prueba" width={50} height={50} />
                        <Image className="absolute top-[50%] left-[50%] -translate-x-[40%] -translate-y-[50%]" src={'/assets/icons/iconTriangleTestVideo.svg'} alt="Icono de video de prueba" width={20} height={20} />
                    </div>
                </div>
            </div>
            <div className="w-[159px] h-[250px] flex flex-col items-center justify-between p-2">
                <h3 className="text-[13px] font-bold">Elige un plan para ver el curso completo</h3>
                <p className="text-gray text-[12px] font-light">Consigue este curso y muchos más de nuestros cursos mejor valorados con el Plan Gold.</p>
                <Link className="text-skyblue text-[10px] underline self-start" href='/#' >Más información</Link>
                <button className="w-full h-[29px] bg-violet text-whitePage text-[10px] font-bold">ELEGIR PLAN</button>
                <h6 className="text-gray text-[10px] font-light text-center">A partir de u$d 11,99 por mes tras la prueba, cancela cuando quieras.</h6>
            </div>
        </div>

    );

};

export default CardVideo;