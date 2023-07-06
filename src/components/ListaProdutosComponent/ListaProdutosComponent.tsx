import IProduto from '../../shared/interfaces/IProduto';
import ProdutoCardComponent from '../ProdutoCardComponent/ProdutoCardComponent';
import './ListaProdutosComponent.css';

const ListaProdutosComponent = () => {
    const produtos: Array<IProduto> = [
        {
            id: 1,
            image: '',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        },
        {
            id: 2,
            image: '',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        },
        {
            id: 3,
            image: '',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        },
        {
            id: 4,
            image: '',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        },
        {
            id: 5,
            image: '',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        },
        {
            id: 6,
            image: '',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        }
    ];

    const render = (produtos: Array<IProduto>) => {
        return (
            <ul className='lista-produtos'>
                {
                    produtos.map((produto: IProduto) => {return <li key={produto.id}><ProdutoCardComponent id={produto.id} image={produto.image} nome={produto.nome} valor={produto.valor} descricao={produto.descricao} caracteristicas={produto.caracteristicas} /></li>})
                }
            </ul>
        )
    }

    return(
        <div>
            
            {render(produtos)}
            
        </div>
    )
}

export default ListaProdutosComponent;