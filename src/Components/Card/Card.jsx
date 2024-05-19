import React from "react";
import './Card.css'

const Card = ({ emoji, heading, detalhe }) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detalhe}</span>
            <button className="c-button">Ler Mais</button>
        </div>
    )
}

export default Card