import { useContext, useEffect } from "react";
import { BannerContext } from "../../contexts/BannerContext/BannerContext";

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import CardContatoComponent from "../../components/CardContatoComponent/CardContatoComponent";
import FormularioComponent from "../../components/FormularioComponent/FormularioComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const PaginaContato = () => {
    const { setBannerData } = useContext(BannerContext);

    useEffect(() => {
        setBannerData({
            titulo: "Nossa equipe",
            subtitulo: "Entre em Contato com",
        })
    }, []);
    
    return (
        <>
            <HeaderComponent />
            <BannerComponent />
            <FormularioComponent />
            <CardContatoComponent />
            <FooterComponent />
        </>
    )
}

export default PaginaContato;