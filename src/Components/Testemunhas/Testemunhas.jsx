import React from "react";
import './Testemunhas.css'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css'

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";



const Testemunhas = () => {
    const clients = [
        {
            img: profilePic1,
            review: "lorem oisjfaosij asijia sjfoaisf oaisji oajscas iasv asoijasias oijasvisnov inasvasnvoi ansvoiasv asoijasia soija svisnovinas vasnvo iansvoiasvasi asjoaisjvaposvjapsovjapsvjasivnasoivnaosivnasoivnisvnasio.",
        },
        {
            img: profilePic2,
            review: "lorem oisjfaosij asijia sjfoaisf oaisji oajscas iasv asoijasias oijasvisnov inasvasnvoi ansvoiasv asoijasia soija svisnovinas vasnvo iansvoiasvasi asjoaisjvaposvjapsovjapsvjasivnasoivnaosivnasoivnisvnasio.",
        },
        {
            img: profilePic3,
            review: "lorem oisjfaosij asijia sjfoaisf oaisji oajscas iasv asoijasias oijasvisnov inasvasnvoi ansvoiasv asoijasia soija svisnovinas vasnvo iansvoiasvasi asjoaisjvaposvjapsovjapsvjasivnasoivnaosivnasoivnisvnasio.",
        },
        {
            img: profilePic4,
            review: "lorem oisjfaosij asijia sjfoaisf oaisji oajscas iasv asoijasias oijasvisnov inasvasnvoi ansvoiasv asoijasia soija svisnovinas vasnvo iansvoiasvasi asjoaisjvaposvjapsovjapsvjasivnasoivnaosivnasoivnisvnasio.",
        }

    ]


    return (
        <div className="t-wrapper" id='Testemunhas'>
            <div className="t-heading">
                <span>Clientes satisfeitos</span>
                <span>Com trabalhos excelentes</span>
                <span>Feito por me</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testemunha">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >
    )
}

export default Testemunhas