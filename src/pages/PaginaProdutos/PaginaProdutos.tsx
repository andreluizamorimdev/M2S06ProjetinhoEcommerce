import { useContext, useEffect } from "react";
import { BannerContext } from "../../contexts/BannerContext/BannerContext.tsx";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent.tsx";
import BannerComponent from "../../components/BannerComponent/BannerComponent.tsx";
import ListaProdutosComponent from "../../components/ListaProdutosComponent/ListaProdutosComponent.tsx";
import FooterComponent from "../../components/FooterComponent/FooterComponent.tsx";

const PaginaProdutos = () => {
    const { setBannerData } = useContext(BannerContext);

    useEffect(() => {
        setBannerData({
            titulo: "Nossos produtos",
            subtitulo: "Especialmente feito para você",
        })
    }, []);

    return (
        <>
            <HeaderComponent />
            <BannerComponent/>
            <ListaProdutosComponent />
            <FooterComponent />
        </>
    )
}

export default PaginaProdutos;