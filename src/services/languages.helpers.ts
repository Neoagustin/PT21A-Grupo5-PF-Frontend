/* eslint-disable @typescript-eslint/no-explicit-any */

import { ILanguage } from "@/components/LanguageComponents/LanguageView/types";



const APIURL = process.env.NEXT_PUBLIC_API_URL


export async function getAllLanguages(): Promise<ILanguage[]> {
    try{
       
        const response = await fetch(`${APIURL}/language`, {
            next: {revalidate: 1200}
        });
        const languages: ILanguage[] = await response.json(); 
        return languages
    } catch (error: any){
        throw new Error(error)
    }
};


export async function getLanguageByName(name: string): Promise<ILanguage> {
    try{
       const languages: ILanguage[] = await getAllLanguages();
       const language = languages.find((language) => language.name.toLowerCase() === name);
       if (!language) throw new Error("Language not found");
       return language
    } catch (error: any){
        throw new Error(error)
    }
};