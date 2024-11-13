import UserInfo from "@/components/DashboardComponents/UserInfo/UserInfo";
import React from "react";

export const Dashboard: React.FC = (): React.ReactElement => {

    return (

        <div className="m-auto max-w-[318px] sm:max-w-[640px] md:max-w-[860px] xl:max-w-[1200px]">
            <UserInfo />
        </div>

    );

};

export default Dashboard;