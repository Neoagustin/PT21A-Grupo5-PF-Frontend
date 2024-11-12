import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const FooterInfo: React.FC = (): React.ReactElement => {

    return (

        <div className="flex flex-col gap-3 items-center">
            <h2 className="text-xl font-semibold">Información de contacto</h2>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon className="w-[35px] h-[30px] text-violet" icon={faLocationDot} />
                    <h3>Av. Rompiendo Barreras 2870</h3>
                </div>
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon className="w-[35px] h-[30px] text-violet" icon={faEnvelope} />
                    <h3>rompiendobarreras@gmail.com</h3>
                </div>
            </div>
        </div>

    );

};

export default FooterInfo;