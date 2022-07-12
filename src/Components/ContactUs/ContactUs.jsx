import React from "react";
import style from "./ContactUs.module.css"
import map from "../../images/MAP 1.png"
import Header from "../Header/Header";
import Navigation from "../Navbar/Navigation";
import Footer from "../Footer/Footer";

function ContactUs() {
    return (
        <div className={style.contactUs}>
            <Header/>
            <div className={style.container}>
                <Navigation/>
                <div className={style.titleCont}>
                    <p className={style.title}>CONTACT US</p>
                </div>
                <div className={style.mapCont}>
                    <img src={map} alt=""/>
                </div>
                <div className={style.infoCont}>
                    <div className={style.contactCont}>
                        <div className={style.ourAddress}>
                            <p className={style.titleInfo}>Our Address</p>
                            <p className={style.address}>
                            Blk 85 Bedok North Road
                            Fengshan Market
                        </p>
                        </div>
                        <div className={style.eMail}>
                            <p className={style.titleInfo}>E-MAIL:</p>
                            <p>
                                ABCDEFG@MAIL.COM
                            </p>
                        </div>
                        <div className={style.contactNum}>
                            <div>
                                <p className={style.titleInfo}>
                                    CONTUCT NUMBER
                                </p>
                                <p>
                                    +3741234565
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.enquiresCont}>
                        <p className={style.titleInputs}>ENQUIRES ARE WELCOME</p>
                        <div className={style.inputsCont}>
                            <input type="text" placeholder="name"/>
                            <input type="text" placeholder="subject"/>
                            <input type="text" placeholder="e-mail"/>
                            <input type="text" className={style.bigInput}/>
                        </div>
                    </div>
                </div>
                <div className={style.buttonCont}>
                    <button>
                        SEND
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs