import { useContext, useEffect } from "react";
import { BannerContext } from "../../contexts/BannerContext/BannerContext";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const PaginaInicial = () => {
    const { setBanner } = useContext(BannerContext);

    useEffect(() => {
        setBanner({
            titulo: "Bem Vindo",
            subtitulo: "Ao nosso ecommerce seja",
        })
    }, []);

    return (
        <>
            <HeaderComponent />
            <BannerComponent />

            <FooterComponent />
        </>
    )
}

export default PaginaInicial;