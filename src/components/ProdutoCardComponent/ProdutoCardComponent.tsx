import IProduto from '../../shared/interfaces/IProduto';
import './ProdutoCardComponent.css';

const ProdutoCardComponent = ({id, image, nome, valor, descricao, caracteristicas}: IProduto) => {
    return (
        <div key={id} className="card w-75 mb-3 mt-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt={descricao} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex flex-row justify-content-between">
                                <h5 className="card-title">{nome}</h5>
                                <h5 className="card-title pricing-card-title">R$ {valor}</h5>
                            </div>
                            <p className="card-text">{descricao}</p>
                            <p className="card-text">{caracteristicas.map(((caracteristica) => {return `${caracteristica} `}))}</p>
                            <div className="d-flex flex-column align-items-center"> 
                                <button className="btn btn-primary">Comprar</button>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProdutoCardComponent;