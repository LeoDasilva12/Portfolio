import React, { useState, useContext } from "react";
import './Contacto.css'
import { themeContext } from "../../Context";

import emailjs from '@emailjs/browser'
import { useRef } from "react";

const Contacto = () => {

    const [data, setData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done, setDone] = useState(false)
    const [fail, setFail] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k8rse5k', 'template_acvlmdn', form.current, 'ElH6MxKBSzSx-5ZoY')
            .then((result) => {
                console.log(result.text)
                setDone(true);
                data(true)
            }, (error) => {
                console.log(error.text);
                setFail(true)
            });
    };

    return (
        <div className="contacto-form">
            <div className="w-left">
                <div className="awesoma">
                    <span style={{ color: darkMode ? 'white' : '' }}>Entre em</span>
                    <span>Contato comigo</span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Nome" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Mensagem"></textarea>
                    <span style={{ color: "var(--green)" }}>{done && "Obrigado por contactar me!"}</span>
                    <span style={{ color: "red" }}>{fail && "Falha no envia da mensagem!"}</span>
                    <input type="submit" value="Enviar" className="button" />
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contacto