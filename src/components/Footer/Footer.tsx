import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <div className='footer-box'>
                <div className='row-box'>
                    <div className='logo-box'>
                        <h1>DevDede</h1>
                    </div>
                    <div className='container-box'>
                        <div className='titulo-box'>
                            <h3>Contato</h3>
                        </div>
                        <div className='conteudo-box'>
                            <p>+55 48 9999-9999</p>
                            <p>contato@devdede.com</p>
                        </div>
                        <div className='social-box'>
                            <a href=""><div className='instagram-icon'></div></a>
                            <a href=""><div className='facebook-icon'></div></a>
                            <a href=""><div className='youtube-icon'></div></a>
                        </div>
                    </div>
                    <div className='container-box'>
                        <div className='titulo-box'>
                            <h3>Informações</h3>
                        </div>
                        <div className='conteudo-box'>
                            <ul className='info-box'>
                                <li><a href="">Camisetas</a></li>
                                <li><a href="">Moletons</a></li>
                                <li><a href="">Quadros</a></li>
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

export default Footer;