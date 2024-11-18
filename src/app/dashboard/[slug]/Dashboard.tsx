import UserInfo from "@/components/DashboardComponents/UserInfo/UserInfo";
import React from "react";

interface IDashboardProps {
    params: {
        slug: string;
    };
}

export const Dashboard: React.FC<IDashboardProps> = ({ params }: IDashboardProps) => {

    const { slug } = params;

    return (

        <div className="m-auto max-w-[318px] sm:max-w-[640px] md:max-w-[860px] xl:max-w-[1200px]">
            <UserInfo slug={slug} />
        </div>

    );

};

export default Dashboard;