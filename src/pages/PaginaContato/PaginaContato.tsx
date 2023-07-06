import BannerComponent from "../../components/BannerComponent/BannerComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const PaginaContato = () => {
    return (
        <>
            <HeaderComponent />
            <BannerComponent descricao='Entre em Contato com' titulo='nossa equipe' />

            <FooterComponent />
        </>
    )
}

export default PaginaContato;