import LanguageView from "@/components/LanguageComponents/LanguageView/LanguageView";

export const Language: React.FC <{params: { slug: string }}> = ({params}: {params:{slug:string}}): React.ReactElement => {

    return (

        <>
        <LanguageView slug={params.slug}/>
        </>

    );

};

export default Language;