import IProduto from '../../shared/interfaces/IProduto';
import './ProdutoCard.css';

const ProdutoCard = ({id, image, nome, valor, descricao, caracteristicas}: IProduto) => {
    return (
        <div key={id} className="card mb-3 mt-3" style={{minWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="imagem do produto" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{nome}</h5>
                            <p className="card-text">R$ {valor}</p>
                            <p className="card-text">{descricao}</p>
                            <p className="card-text">{caracteristicas}</p>
                            <button className="btn btn-primary">Comprar</button>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProdutoCard;