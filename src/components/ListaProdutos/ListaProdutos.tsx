import IProduto from '../../shared/interfaces/IProduto';
import ProdutoCard from '../ProdutoCard/ProdutoCard';
import './ListaProdutos.css';


const ListaProdutos = () => {
    const produto : IProduto = {
        id: 1,
        nome: "teste",
        valor: 25,
        descricao: "testando",
        caracteristicas: ["teste", "teste"]
    }
    const produtos = [produto];

    const render = (produto: IProduto) => {
        return <li key={produto.id}><ProdutoCard id={produto.id} nome={produto.nome} valor={produto.valor} descricao={produto.descricao} caracteristicas={produto.caracteristicas} /></li>
    }

    return(
        <div>
            <ul className='lista-produtos'>
               {produtos.map(render)}
            </ul>
        </div>
    )
}

export default ListaProdutos;