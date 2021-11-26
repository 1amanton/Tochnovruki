import React, {Component} from 'react';
import {Container} from "react-bootstrap";

import imageLeft from "../assets/about1.jpg"
import imageRight from "../assets/about2.jpg"

class AboutUs extends Component {
    render() {
        return (
            <Container>
                <div className="aboutAll">
                    <div className="aboutLeft">
                        <div className="aboutDesc">
                            <h2>О компании</h2>
                            <span>ТОЧНОВРУКИ - сервис качественных курьерских и логистических услуг с возможностью доставки в этот же день</span>
                            <span>Если нужно отправить посылку курьерской службой или, наоборот, заказать что-либо на дом, то ТОЧНОВРУКИ - лучший выбор!</span>
                        </div>

                        <img className="aboutImg" src={imageLeft} alt=""/>

                    </div>

                    <div className="aboutRight">

                        <img className="aboutImg" src={imageRight} alt=""/>

                        <div className="aboutDesc">
                            <h2>Наша цель</h2>
                            <span>ТОЧНОВРУКИ - первая локальная курьерская служба в регионе, которая оказывает услуги своевременной доставки нового качества.</span>
                            <span>Мы работаем так, чтобы Клиент оставался не просто доволен - нам важно создавать настроенее. Непременно хорошее. Мы следим за качеством услуг, защищая Клиента от любых неудобных ситуаций. Всегда вовремя! Всегда в целости и сохранности!</span>
                        </div>
                        </div>
                </div>

                
            </Container>
        );
    }
}

export default AboutUs;