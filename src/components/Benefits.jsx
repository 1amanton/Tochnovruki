import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class Benefits extends Component {
    render() {
        return (
            <Container>
                <div className="benefitsAll">
                    <section className="benefitItem">
                        <i className="fas fa-truck benefitIcon"></i>
                        <span>Полный комплекс транспортно-экспедиционных услуг</span>
                    </section>

                    <section className="benefitItem">
                        <i className="fas fa-user-shield benefitIcon"></i>
                        <span>Качественно подобранный и обеспечение сохранности груза</span>
                    </section>

                    <section className="benefitItem">
                        {/*<img src={benOne} alt=""/>*/}
                        <i className="fas fa-hand-holding-usd benefitIcon"></i>
                        <span>Самые выгодные тарифы для наших клиентов</span>
                    </section>
                </div>


                
            </Container>
        );
    }
}

export default Benefits;