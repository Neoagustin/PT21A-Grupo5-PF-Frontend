import Link from "next/link";
import React from "react";

export const NotFound: React.FC = () => {

    return (

        <div className="flex items-center justify-center m-auto max-w-[318px] sm:max-w-[640px] md:max-w-[860px] xl:max-w-[1200px] h-[calc(100vh-110px)]">
            <div className="text-center max-w-full flex flex-col gap-5">
                <h1 className="text-8xl font-bold text-red">404</h1>
                <h2 className="text-xl">¡Ups! Página no encontrada</h2>
                <p className="text-lg text-gray">La página que estás buscando no existe o ha sido movida.</p>
                <Link href="/" className="">
                    <button className="bg-violet text-whitePage py-4 px-8 border-none rounded-md transition-all hover:bg-violetHover">Volver al inicio</button>
                </Link>
            </div>
        </div>

    );

};

export default NotFound;
