import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const FooterSocial: React.FC = (): React.ReactElement => {

    return (

        <div className="flex flex-col gap-3 items-center">
            <h2 className="text-xl font-semibold">Redes sociales</h2>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon className="w-[35px] h-[30px] text-violet" icon={faYoutube} />
                    <h3>/rompiendobarrerasYT</h3>
                </div>
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon className="w-[35px] h-[30px] text-violet" icon={faTwitter} />
                    <h3>/rompiendobarreras</h3>
                </div>
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon className="w-[35px] h-[30px] text-violet" icon={faLinkedin} />
                    <h3>/rompiendobarreras</h3>
                </div>
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon className="w-[35px] h-[30px] text-violet" icon={faInstagram} />
                    <h3>/rompiendobarreras</h3>
                </div>
            </div>
        </div>

    );

};

export default FooterSocial;