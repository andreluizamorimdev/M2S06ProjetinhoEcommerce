import { useContext, useEffect } from "react";

import { BannerContext } from "../../contexts/BannerContext/BannerContext";

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import BannerComponent from "../../components/BannerComponent/BannerComponent";

const PaginaError = () => {
    const { setBannerData } = useContext(BannerContext);

    useEffect(() => {
        setBannerData({
            titulo: "Algo de errado aconteceu",
            subtitulo: "Não foi possivel encontrar essa página",
        })
    }, []);

    return (
        <>
            <HeaderComponent />
            <BannerComponent />
                <p>Error page in construction</p>
            <FooterComponent />
        </>
    );
}
 
export default PaginaError;