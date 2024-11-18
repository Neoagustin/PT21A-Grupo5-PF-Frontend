import { useToken } from "@/context/TokenContext/TokenContext";
import { useUser } from "@/context/UserContext/UserContext";
import React from "react";

export const UserAction: React.FC = (): React.ReactElement => {

    const { handleLogout } = useToken();
    const { handleOpenModal } = useUser();

    return (

        <div className="mt-10 flex flex-col gap-5 items-center justify-center sm:flex-row">
            <button onClick={handleOpenModal} className="w-[152px] h-[36px] border-[1px] transition-all border-violet text-sm font-bold rounded-[4px] text-violet sm:w-[230px] sm:h-[38px] hover:border-transparent hover:text-whitePage hover:bg-violet">MODIFICAR DATOS</button>
            <button onClick={handleLogout} className="w-[152px] h-[36px] border-[1px] border-transparent text-sm transition-all font-bold rounded-[4px] text-whitePage bg-red sm:w-[230px] sm:h-[38px] hover:border-red hover:bg-whitePage hover:text-red">CERRAR SESIÓN</button>
        </div>

    );

};

export default UserAction;