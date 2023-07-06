import "./FormularioComponent.css"

const FormularioComponent = () => {
    return (
        <div className="container">
            <div className="card mt-5 mb-5 mx-auto" style={{maxWidth: "50rem"}}>
                <div className="card-body">               
                    <form>
                        <fieldset>
                            <legend>Deixe o seu recado</legend>
                            <div className="row ">
                                <div className="col-md-6">
                                    <label htmlFor="inputNome" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="inputNome" placeholder="Digite seu nome" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputTelefone" className="form-label">Telefone</label>
                                    <input type="text" className="form-control" id="inputTelefone" placeholder="Digite seu telefone" />
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <input type="text" className="form-control" id="inputEmail" placeholder="Digite seu email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensagemTextarea" className="form-label">Mensagem</label>
                                <textarea className="form-control" id="mensagemTextarea" rows={3} placeholder="Digite sua mensagem"></textarea>
                            </div>
                            <div className="col-12 d-grid d-md-flex justify-content-md-end">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormularioComponent;