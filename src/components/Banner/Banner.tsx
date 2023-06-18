import "./Banner.css";

type propsBanner = {
    descricao: string,
    titulo: string
}

const Banner = ({descricao, titulo} : propsBanner) => {
    return (
        <div className="banner-container-box">
            <div className="descricao-box">
                <p>{descricao}</p>
            </div>
            <div className="titulo-box">
                <h1>{titulo} <span className="cor-ponto">.</span></h1>
            </div>
        </div>
    )
}

export default Banner;