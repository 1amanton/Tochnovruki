import React, {Component} from 'react';

import imageIntro from "../assets/intro5.jpg"
import {Container} from "react-bootstrap";

class TopIntro extends Component {
    render() {
        return (

            <Container>
                <div className="allIntro">
                    <img className="introImage" src={imageIntro} alt=""/>
                    <div className="introInfo">
                        <span className="introHeading">Служба доставки</span>
                        <span className="introHeadingFirm">TOCHNOVRUKI</span>
                        <div className="introLines">

                            <span className="introLine animate__animated animate__backInLeft"><i className="far fa-check-circle introIcon"></i> Перевозим</span>
                            <span className="introLine animate__animated animate__backInLeft"><i className="far fa-check-circle introIcon"></i> Cоповождаем</span>
                            <span className="introLine animate__animated animate__backInLeft"><i className="far fa-check-circle introIcon"></i> Экономим Ваше время</span>
                        </div>

                    </div>
                </div>



            </Container>

        );
    }
}

export default TopIntro;