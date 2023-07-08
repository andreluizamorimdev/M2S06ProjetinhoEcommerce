import { createContext, useState, ReactNode } from "react";
import { IBannerContextData } from "../../shared/interfaces/IBannerContextData";
import { IBanner } from "../../shared/interfaces/IBanner";

const defaultState = {
    bannerData: {
        titulo: "",
        subtitulo: ""
    },
    setBannerData: () => {/*do nothing.*/}
} as IBannerContextData;

export const BannerContext = createContext(defaultState);

type BannerProviderProps = {
    children: ReactNode
}

export const BannerProvider = ({children}: BannerProviderProps) => {
    const [banner, setBanner] = useState<IBanner>({
        titulo: "Bem Vindo",
        subtitulo: "Ao nosso ecommerce seja",
    });

    return(
        <BannerContext.Provider value={{bannerData: banner, setBannerData: setBanner}}>
            {children}
        </BannerContext.Provider>
    )
}