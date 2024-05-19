import React from "react"
import Toggle from "../Toggle/Toggle"
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">EnterPris</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>

                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Página inicial</li>
                        </Link>
                        <Link spy={true} to='Servicos' smooth={true}>
                            <li>Serviços</li>
                        </Link>
                        <Link spy={true} to='Experiencia' smooth={true}>
                            <li>Esperiência</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfólio</li>
                        </Link>
                        <Link spy={true} to='Testemunhas' smooth={true}>
                            <li>Testemunhas</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    Contacto
                </button>
            </div>
        </div>
    )
}

export default Navbar