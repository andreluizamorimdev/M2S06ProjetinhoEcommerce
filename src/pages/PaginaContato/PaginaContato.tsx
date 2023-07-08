import BannerComponent from "../../components/BannerComponent/BannerComponent";
import CardContatoComponent from "../../components/CardContatoComponent/CardContatoComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import FormularioComponent from "../../components/FormularioComponent/FormularioComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const PaginaContato = () => {
    return (
        <>
            <HeaderComponent />
            <BannerComponent descricao='Entre em Contato com' titulo='nossa equipe' />
            <FormularioComponent />
            <CardContatoComponent />
            <FooterComponent />
        </>
    )
}

export default PaginaContato;