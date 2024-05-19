import React, { useContext } from "react";
import { themeContext } from '../../Context'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from 'framer-motion';


const Intro = () => {

    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Olá! Eu sou</span>
                    <span>Leo da Silva</span>
                    <span>
                        Sou especialista em desenvolvimento de software, design web e gráfico
                        proporcionando soluções inovadoras para transformar suas ideias em realidade.
                    </span>
                    <span>
                        Junte-se a mi nesta jornada rumo à excelência digital!
                    </span>
                </div>
                <butto className="button i-button">Contrate-me</butto>
                <div className="i-icons">
                    <a href="">
                        <img src={Github} alt="" />
                    </a>
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '' }}
                    transition={transition}
                    src={glassesimoji}
                />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}

                    style={{ top: '-4%', left: '68%' }}
                    className='floating-div'
                >
                    <FloatingDiv image={Crown} txt1='Desenvolvedor' txt2='Web' />
                </motion.div>
                <motion.div
                    initial={{ left: '12rem', top: '18rem' }}
                    whileInView={{ left: '-2rem' }}
                    transition={transition}

                    style={{ top: '18rem', left: '0rem' }}
                    className='floating-div'
                >
                    <FloatingDiv image={thumbup} txt1='Respeitado pelos' txt2='Clientes' />
                </motion.div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div >
    )
}

export default Intro