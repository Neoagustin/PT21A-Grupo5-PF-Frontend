import LanguageView from "@/components/LanguageComponents/LanguageView/LanguageView";


export const Language: React.FC<{ params: { slug: string } }> = ({ params }: { params: { slug: string } }): React.ReactElement => {

    return (

        <div>
            <LanguageView slug={params.slug} />
        </div>

    );

};

export default Language;