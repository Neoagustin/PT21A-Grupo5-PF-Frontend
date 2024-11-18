import LanguageView from "@/components/LanguageComponents/LanguageView/LanguageView";
import { ILanguageProps } from "./types";


export const Language: React.FC<ILanguageProps> = async ({ params }: ILanguageProps) => {

    const { slug } = await params;

    return (

        <div className="m-auto max-w-[318px] sm:max-w-[640px] md:max-w-[860px] xl:max-w-[1200px]">
            <LanguageView slug={slug} />
        </div>

    );

};

export default Language;