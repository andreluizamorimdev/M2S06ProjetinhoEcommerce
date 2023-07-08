import "./CardContatoComponent.css"
const CardContatoComponent = () => {
    return (
        <div className="container">
            <div className="card mb-3">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56579.97956602685!2d-48.70473920981059!3d-27.585817445660442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274a45dbfb5d61%3A0x100bf170797fe362!2zU8OjbyBKb3PDqSAtIEJhcnJlaXJvcywgU8OjbyBKb3PDqSAtIFND!5e0!3m2!1spt-BR!2sbr!4v1688773078263!5m2!1spt-BR!2sbr" className="card-img-top" width="600" height="250" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                <div className="card-body">
                    <h5 className="card-title">Matriz</h5>
                    <div className="d-flex flex-row contact-paragraph-wrapper">
                        <div className="paragraph-wrapper">
                            <p className="card-text">Rua teste dos testes, 2000, Centro</p>
                            <p className="card-text">São josé - Santa Catarina</p>
                        </div>
                        <div className="paragraph-wrapper">
                            <p className="card-text">Rua teste dos testes, 2000, Centro</p>
                            <p className="card-text">São josé - Santa Catarina</p>
                        </div>
                    </div>
                    <p className="card-text mt-2"><small className="text-body-secondary">Aberto de 08h00 ás 18h00 de segunda a sexta</small></p>
                </div>

            </div>
        </div>
    )
}

export default CardContatoComponent;