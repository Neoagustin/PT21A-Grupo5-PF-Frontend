import CodeVerificationView from "@/components/CodeVerificationComponents/CodeVerificationView/CodeVerificationView";
import React from "react";

export const CodeVerfication: React.FC = () => {
  return (
    <div className="m-auto max-w-[318px] sm:max-w-[640px] md:max-w-[860px] xl:max-w-[1200px]">
      <CodeVerificationView />
    </div>
  );
};

export default CodeVerfication;
