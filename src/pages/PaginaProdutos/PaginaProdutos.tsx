import HeaderComponent from "../../components/HeaderComponent/HeaderComponent.tsx";
import BannerComponent from "../../components/BannerComponent/BannerComponent.tsx";
import ListaProdutosComponent from "../../components/ListaProdutosComponent/ListaProdutosComponent.tsx";
import FooterComponent from "../../components/FooterComponent/FooterComponent.tsx";

const PaginaProdutos = () => {
    return (
        <>
            <HeaderComponent />
            <BannerComponent descricao='Especialmente feito para você' titulo='nossos produtos' />
            <ListaProdutosComponent />
            <FooterComponent />
        </>
    )
}

export default PaginaProdutos;