import './FooterComponent.css';

const FooterComponent = () => {
    return(
        <footer>
            <div className='footer-box'>
                <div className='row-box'>
                    <div className='logo-box'>
                        <h1>DevDede</h1>
                        <div className='social-box'>
                            <a href="https://www.instagram.com/" target='_blank'><i className="fa-brands fa-instagram fa-2xl" style={{color: "#fff"}}></i></a>
                            <a href="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-square-facebook fa-2xl" style={{color: "#fff"}}></i></a>
                            <a href="https://www.youtube.com/" target='_blank'><i className="fa-brands fa-youtube fa-2xl" style={{color: "#fff"}}></i></a>
                        </div>
                    </div>
                    <div className='container-box'>
                        <div className='titulo-box'>
                            <h3>Contato</h3>
                        </div>
                        <div className='conteudo-box'>
                            <p>+55 48 9999-9999</p>
                            <p>contato@devdede.com</p>
                        </div>
                        <div className='line-separation'></div>
                        <div className='conteudo-box'>
                            <p>Rua teste dos testes, 2000 - testando</p>
                            <p>São josé - SC</p>
                        </div>
                    </div>
                    <div className='container-box'>
                        <div className='titulo-box'>
                            <h3>Informações</h3>
                        </div>
                        <div className='conteudo-box'>
                            <ul className='info-box'>
                                <li><a href="">Produtos</a></li>
                                <li><a href="">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='copyright-box'>
                    <p>DevDede &copy; Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;