import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class BottomContacts extends Component {
    render() {
        return (
            <Container>
                <div className="botContacts pt-5 pb-5">
                    <div className="contactText">
                        <span className="contactTextHigh">Контакты</span>
                        <span className="contactTextHigh">г.Новосибирск ул.Гоголя д.40</span>
                        <span>Режим работы</span>
                        <span>пн-пт с 8.00 до 22.00 | сб-вс с 10.00 до 20.00</span>
                        <span className="contactTextHigh">Телефон: +7 (913) 722 - 56 - 65</span>
                    </div>

                    <div className="contactIcons pt-3">
                        <i className="fab fa-viber contactIcon"></i>
                        <i className="fab fa-whatsapp contactIcon"></i>
                        <i className="fab fa-telegram-plane contactIcon"></i>

                    </div>



                </div>

            </Container>

        );
    }
}

export default BottomContacts;