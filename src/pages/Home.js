import React, {Component} from 'react';
import BottomContacts from "../components/BottomContacts";
import TopIntro from "../components/TopIntro";
import Benefits from "../components/Benefits";
import Zayavka from "../components/Zayavka";
import AboutUs from "../components/AboutUs";

class Home extends Component {
    render() {
        return (

            <div>
                <TopIntro/>
                <Zayavka/>
                <AboutUs/>

                <Benefits/>
                <BottomContacts/>


            </div>


        );
    }
}

export default Home;