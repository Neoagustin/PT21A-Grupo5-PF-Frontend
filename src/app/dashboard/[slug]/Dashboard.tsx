import UserInfo from "@/components/DashboardComponents/UserInfo/UserInfo";
import React from "react";
import { IDashboardProps } from "./types";

export const Dashboard: React.FC<IDashboardProps> = async ({ params }: IDashboardProps) => {

    const { slug } = await params;

    return (

        <div className="m-auto max-w-[318px] sm:max-w-[640px] md:max-w-[860px] xl:max-w-[1200px]">
            <UserInfo slug={slug} />
        </div>

    );

};

export default Dashboard;