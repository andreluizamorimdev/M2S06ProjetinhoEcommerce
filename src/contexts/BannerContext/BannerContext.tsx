import { createContext, useState, ReactNode } from "react";
import { IBannerContextData } from "../../shared/interfaces/IBannerContextData";
import { IBanner } from "../../shared/interfaces/IBanner";

const defaultState = {
    banner: {
        titulo: "",
        subtitulo: ""
    },
    setBanner: () => {/*do nothing.*/}
} as IBannerContextData;

export const BannerContext = createContext(defaultState);

type BannerProviderProps = {
    children: ReactNode
}

export const BannerProvider = ({children}: BannerProviderProps) => {
    const [banner, setBanner] = useState<IBanner>({
        titulo: "",
        subtitulo: ""
    });

    return(
        <BannerContext.Provider value={{banner, setBanner}}>
            {children}
        </BannerContext.Provider>
    )
}