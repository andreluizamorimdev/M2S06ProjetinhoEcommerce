import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import ListaProdutos from "../../components/ListaProdutos/ListaProdutos";
import Footer from "../../components/Footer/Footer";

const PaginaProdutos = () => {
    return (
        <>
            <Header />
            <Banner descricao='Especialmente feito para você' titulo='nossos produtos' />
            <ListaProdutos />
            <Footer />
        </>
    )
}

export default PaginaProdutos;