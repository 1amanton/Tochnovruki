import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class Zayavka extends Component {
    render() {
        return (
            <Container>
                <div className="zayavkaForm pt-4 pb-5">
                    <section className="zayavkaText pb-3">
                        <span className="zayavkaHeading pb-2">Оставьте заявку</span>
                        <span className="zayavkaTextin">И получите подробный расчёт доставки!</span>
                    </section>
                    <section className="mt-4">
                        <a className="deliveryBtnZayavka" href="tel: +79137225665">ЗАКАЗАТЬ ДОСТАВКУ</a>
                    </section>


                </div>
            </Container>

        );
    }
}

export default Zayavka;