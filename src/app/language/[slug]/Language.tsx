import LanguageView from "@/components/LanguageComponents/LanguageView/LanguageView";


export const Language: React.FC<{ params: { slug: string } }> = ({ params }: { params: { slug: string } }): React.ReactElement => {

    return (

        <div className="m-auto max-w-[318px] sm:max-w-[640px] md:max-w-[860px] xl:max-w-[1200px]">
            <LanguageView slug={params.slug} />
        </div>

    );

};

export default Language;