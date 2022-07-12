import React from "react";
import style from "./order.module.css"
import Header from "../Header/Header";
import Navigation from "../Navbar/Navigation";
import samsung from "../../images/samsungOrder.png"
import InformationRow from "../Information-Row-Order/informationRow";
import Footer from "../Footer/Footer";
import Recommend from "../Recommend/Recommend";

function Order() {


    return (
        <div className={style.order}>
            <Header/>
            <div className={style.container}>
                <Navigation/>
                <div className={style.orderItem}>
                    <div className={style.photoCont}>
                        <div className={style.sliderPhoto}>
                            <img className={style.sliderItem} src={samsung} alt=""/>
                            <img className={style.sliderItem} src={samsung} alt=""/>
                            <img className={style.sliderItem} src={samsung} alt=""/>
                        </div>
                        <div className={style.mainPhotoCont}>
                            <img className={style.mainPhoto} src={samsung} alt=""/>
                        </div>
                    </div>
                    <div className={style.textCont}>
                        <p className={style.title}>Galaxy S22 Ultra</p>
                        <div className={style.priceCont}>
                            <p>699.900 AMD</p>
                            <div className={style.counted}>
                                <button>-</button>
                                <p>0</p>
                                <button>+</button>
                            </div>
                        </div>
                        <div className={style.capacityCont}>
                            <p className={style.orderTitle}>Choose your capacity</p>
                            <button>128 gb</button>
                            <button>128 gb</button>
                            <button>128 gb</button>
                            <button>128 gb</button>
                        </div>
                        <div>
                            <p className={style.orderTitle}>Choose your color</p>
                            <button className={style.colorButton} id={style.brown}></button>
                            <button className={style.colorButton} id={style.green}></button>
                            <button className={style.colorButton} id={style.white}></button>
                            <button className={style.colorButton} id={style.black}></button>
                        </div>
                        <div className={style.totalCont}>
                            <p className={style.orderTitle}>
                                TOTAL
                            </p>
                            <p className={style.totalPrice}>
                                790,000 AMD
                            </p>
                        </div>
                        <div className={style.buttonCont}>
                            <button className={style.buttonBuy}>
                                BUY
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.information}>
                    <div className={style.detailsCont}>
                        <p className={style.titleInformation}>DETAILS</p>
                        <InformationRow />
                        <InformationRow />
                        <InformationRow />
                        <InformationRow />
                    </div>
                    <div className={style.detailsCont}>
                        <p className={style.titleInformation}>DETAILS</p>
                        <InformationRow />
                        <InformationRow />
                        <InformationRow />
                        <InformationRow />
                    </div>
                    <div className={style.detailsCont}>
                        <p className={style.titleInformation}>DETAILS</p>
                        <InformationRow />
                        <InformationRow />
                        <InformationRow />
                        <InformationRow />
                    </div>
                </div>
                <Recommend />
            </div>
            <Footer />
        </div>
    )
}

export default Order