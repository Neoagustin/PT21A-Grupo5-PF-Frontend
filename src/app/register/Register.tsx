import RegisterInfo from "@/components/RegisterComponents/RegisterInfo/RegisterInfo";
import React from "react";

export const Register: React.FC = (): React.ReactElement => {

    return (

        <div className="m-auto mt-10 max-w-[318px] md:max-w-[860px] xl:max-w-[1200px]">
            <RegisterInfo />
        </div>

    );

};

export default Register;