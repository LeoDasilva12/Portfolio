import React, { useContext } from "react";
import './Works.css'
import { themeContext } from "../../Context";
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { motion } from 'framer-motion';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            {/* left side*/}
            <div className="awesoma">
                <span style={{ color: darkMode ? 'white' : '' }}>Funciona para todas essas</span>
                <span>Marcas & Clientes</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit sed suscipit, placeat molestiae quos officia
                    <br />
                    illum necessitatibus, eligendi delectus, omnis expedita.
                    <br />
                    illum necessitatibus, eligendi delectus, omnis expedita. placeat molestiae quos officia
                </span>
                <button className="button s-button">Contrate-me</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side*/}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 4, type: 'spring' }}

                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" width={90} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" width={90} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" width={90} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" width={90} />
                    </div>
                    {/* Background circle*/}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </motion.div>
            </div>
        </div>
    )
}

export default Works