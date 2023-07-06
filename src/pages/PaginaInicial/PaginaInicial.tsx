import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const PaginaInicial = () => {
    return (
        <>
            <HeaderComponent />
            <BannerComponent descricao='Ao nosso ecommerce seja' titulo='Bem Vindo' />

            <FooterComponent />
        </>
    )
}

export default PaginaInicial;