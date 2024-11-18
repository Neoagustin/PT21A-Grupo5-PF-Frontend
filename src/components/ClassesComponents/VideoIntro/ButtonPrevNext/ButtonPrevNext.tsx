import React from "react";

export const ButtonPrevNext: React.FC = () => {

    return (

        <div className="flex justify-around">
            <button className="px-5 py-1 text-sm font-bold border-[1px] border-violet text-violet transition-all hover:bg-violet hover:text-whitePage">ANTERIOR</button>
            <button className="px-5 py-1 text-sm font-bold border-[1px] border-transparent text-whitePage bg-violet transition-all hover:bg-whitePage hover:text-violet hover:border-violet">SIGUIENTE</button>
        </div>

    );

};

export default ButtonPrevNext;