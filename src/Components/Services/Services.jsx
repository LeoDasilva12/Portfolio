import React, { useContext } from "react";
import './Services.css'
import { themeContext } from "../../Context";
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from "../Card/Card";
import Curriculo from "./Curriculum-Leo.pdf"
import { motion } from 'framer-motion';

const Services = () => {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services" id='Servicos'>
            {/* left side*/}
            <div className="awesoma">
                <span style={{ color: darkMode ? 'white' : '' }}>Meus Serviços</span>
                <span>Incríveis</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit sed suscipit, placeat molestiae quos officia
                    <br />
                    illum necessitatibus, eligendi delectus, omnis expedita.
                </span>
                <a href={Curriculo} download>
                    <button className="button s-button">Baixar CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side*/}
            <div className="cards">
                <motion.div
                    initial={{ left: '12rem' }}
                    whileInView={{ left: '9rem' }}
                    transition={transition}

                    style={{ left: '8rem', top: '0.5rem' }}
                >
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detalhe={"Lunacy, Adobe Photoshop, Adobe XD, Adobe Illustrator, Adobe InDesing"}
                    />
                </motion.div>
                {/* second card*/}
                <motion.div
                    initial={{ left: '20rem' }}
                    whileInView={{ left: '-13rem' }}
                    transition={transition}


                    style={{ top: "10rem", left: "-13rem" }}
                >
                    <Card
                        emoji={Glasses}
                        heading={'Desenvolvedor'}
                        detalhe={"HTML, CSS, JavaScript, React, MySql, C#, Laravel, Bootstrap, Node JS"}
                    />
                </motion.div>
                {/* 3rd card*/}
                <motion.div
                    initial={{ left: '20rem' }}
                    whileInView={{ left: '3rem' }}
                    transition={transition}

                    style={{ top: "17rem", left: "4rem" }}
                >
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detalhe={"Lorem sdojai asoijfis aosijijasv oiasijaci oiascnasicj oiascisacns oiajscjsaioasv iasionvn"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div >
    )
}

export default Services