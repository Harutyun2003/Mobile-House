import React from "react";
import style from "./Cart.module.css"
import Header from "../Header/Header";
import Navigation from "../Navbar/Navigation";
import samsung from "../../images/samsungOrder.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRemove} from "@fortawesome/free-solid-svg-icons";
import OrderForm from "../Order-Form/OrderForm";
import Recommend from "../Recommend/Recommend";
import Footer from "../Footer/Footer";
function Cart(){
    return(
        <div className={style.cart}>
            <Header />
            <div className={style.container}>
                <Navigation />
                <div className={style.cartItem}>
                    <div className={style.cartTitle}>
                        <p>CART</p>
                    </div>
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
                                <p>699.900 AMD</p>
                            </div>
                        </div>
                    </div>
                    <button className={style.removeCont}>
                        <div className={style.removeIcon}>
                            <FontAwesomeIcon icon={faRemove} color={"white"}  />
                        </div>
                        <a>Remove</a>
                    </button>
                </div>
                <div className={style.titleCont}>
                    <p className={style.title}>BILLING DETAILS</p>
                </div>
                <OrderForm />
                <div className={style.checkoutCont}>
                    <button>CHECKOUT</button>
                </div>
                <Recommend />
            </div>
            <Footer />
        </div>
    )
}
export default Cart