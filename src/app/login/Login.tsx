import LoginInfo from "@/components/LoginComponents/LoginInfo/LoginInfo";
import React from "react";

export const Login: React.FC = (): React.ReactElement => {

    return (

        <div className="m-auto max-w-[318px] md:max-w-[860px] xl:max-w-[1200px]">
            <LoginInfo />
        </div>

    );

};

export default Login;