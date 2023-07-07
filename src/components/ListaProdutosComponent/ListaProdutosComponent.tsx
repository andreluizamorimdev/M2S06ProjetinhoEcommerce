import IProduto from '../../shared/interfaces/IProduto';
import ProdutoCardComponent from '../ProdutoCardComponent/ProdutoCardComponent';
import './ListaProdutosComponent.css';

const ListaProdutosComponent = () => {
    const produtos: Array<IProduto> = [
        {
            id: 1,
            image: 'https://i.imgur.com/Dy9Ytht.png',
            nome: "Quadro Personagem",
            valor: 35,
            descricao: "Quadro personagem em estilo anime, caminhando por uma estrada onde flores de cerejeira caem de suas arvores.",
            caracteristicas: ["#quadro", "#personagem-anime", "#sakura"]
        },
        {
            id: 2,
            image: 'https://i.imgur.com/Dy9Ytht.png',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        },
        {
            id: 3,
            image: 'https://i.imgur.com/Dy9Ytht.png',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        },
        {
            id: 4,
            image: 'https://i.imgur.com/Dy9Ytht.png',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        },
        {
            id: 5,
            image: 'https://i.imgur.com/Dy9Ytht.png',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        },
        {
            id: 6,
            image: 'https://i.imgur.com/Dy9Ytht.png',
            nome: "teste",
            valor: 25,
            descricao: "testando",
            caracteristicas: ["teste", "teste"]
        }
    ];

    const render = () => {
        return (
            <div className="lista-produtos">
                <ul>
                    {
                        produtos.map((produto: IProduto) => {return <li key={produto.id}><ProdutoCardComponent image={produto.image} nome={produto.nome} valor={produto.valor} descricao={produto.descricao} caracteristicas={produto.caracteristicas} /></li>})
                    }
                </ul>
            </div>
        )
    }

    return(
        <div>
            
            {render()}
            
        </div>
    )
}

export default ListaProdutosComponent;