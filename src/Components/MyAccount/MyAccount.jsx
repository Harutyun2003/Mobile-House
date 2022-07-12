import React from "react";
import style from "./MyAccount.module.css"
import Navigation from "../Navbar/Navigation";
import Header from "../Header/Header";
import OrderForm from "../Order-Form/OrderForm";
import samsung from "../../images/samsungOrder.png"
import Recommend from "../Recommend/Recommend";
import Footer from "../Footer/Footer";

function MyAccount() {
    return (
        <div className={style.myAccount}>
            <Header/>
            <div className={style.container}>
                <Navigation/>
                <div className={style.titleCont}>
                    <p className={style.title}>ACCOUNT INFO</p>
                </div>
                <OrderForm/>
                <div className={style.orderHistory}>
                    <div className={style.titleCont}>
                        <p className={style.title}>
                            ORDER HISTORY
                        </p>
                    </div>
                    <div className={style.orderRow}>
                        <div className={style.leftPart}>
                            <div className={style.orderNum}>
                                <p className={style.orderText}>
                                    ORDER NUMBER
                                </p>
                                <div className={style.orderCont}>
                                    <p>#12345</p>
                                </div>
                            </div>
                            <div className={style.orderStatus}>
                                <p className={style.orderText}>ORDER STATUS</p>
                                <div className={style.orderCont}>
                                    <p>DELIVERED</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.total}>
                            <p className={style.orderText}>Total</p>
                            <div className={style.orderCont}>
                                <p>790,000</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.iteminfo}>
                        <div className={style.CartItemInside}>
                            <div className={style.CartItemImg}>
                                <img src={samsung} alt=""/>
                            </div>
                            <div className={style.textCont}>
                                <p className={style.titleItem}>Galaxy S22 Ultra</p>
                                <div className={style.priceCont}>
                                    <div className={style.counted}>
                                        <button>-</button>
                                        <p>0</p>
                                        <button>+</button>
                                    </div>
                                    <button className={style.memoriesButton}>128 GB</button>
                                    <button className={style.colorButton} id={style.brown}></button>
                                    <p className={style.priceitem}>799.000 AMD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Recommend />
            </div>
            <Footer />
        </div>
    )
}

export default MyAccount