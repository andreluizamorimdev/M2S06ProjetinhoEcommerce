import IProduto from '../../shared/interfaces/IProduto';
import './ProdutoCard.css';

const ProdutoCard = ({id, image, nome, valor, descricao, caracteristicas}: IProduto) => {
    return (
        <div key={id} className='product-list mt-3'>
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                    <div className="product">
                        <img className="image-product" src={image} alt='imagem do produto'/>
                        <span className="title-product">{nome}</span>
                        <span className="price-product">{valor}</span>
                        <span className="description-product">{descricao}</span>
                        <span className="characteristics-product">{caracteristicas}</span>
                        <button className="buy-button">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdutoCard;