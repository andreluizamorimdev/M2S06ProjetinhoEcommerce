import { useContext } from "react";
import { BannerContext } from "../../contexts/BannerContext/BannerContext";
import "./BannerComponent.css";

const BannerComponent = () => {
    const { banner } = useContext(BannerContext)
    return (
        <div className="banner-container-box">
            <div className="descricao-box">
                <p>{banner.subtitulo}</p>
            </div>
            <div className="titulo-box">
                <h1>{banner.titulo} <span className="cor-ponto">.</span></h1>
            </div>
        </div>
    )
}

export default BannerComponent;