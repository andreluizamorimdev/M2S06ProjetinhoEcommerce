import { useContext } from "react";
import { BannerContext } from "../../contexts/BannerContext/BannerContext";
import "./BannerComponent.css";

const BannerComponent = () => {
    const { bannerData } = useContext(BannerContext)
    return (
        <div className="banner-container-box">
            <div className="descricao-box">
                <p>{bannerData.subtitulo}</p>
            </div>
            <div className="titulo-box">
                <h1>{bannerData.titulo} <span className="cor-ponto">.</span></h1>
            </div>
        </div>
    )
}

export default BannerComponent;