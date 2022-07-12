import React from "react";
import style from "./Faq.module.css"
import Header from "../Header/Header";
import background from "../../images/lewis-nguyen-E8pRGD7h-5w-unsplash 1.png";
import Navigation from "../Navbar/Navigation";
import MenuFAQ from "../MenuFaq/MenuFAQ";
import Footer from "../Footer/Footer";

function Faq(){
    return(
        <div className={style.faq}>
            <Header />
            <div className={style.imageCont}>
                <img src={background} className={style.background} alt=""/>
                <div className={style.navigationCont}>
                    <Navigation/>
                </div>
            </div>
            <div className={style.container}>
                <p className={style.heading}>
                    See answers to our most commonly asked questions below.
                </p>
               <div className={style.leftPart}>
                   <MenuFAQ />
               </div>
                <div className={style.rightPart}>
                    <div className={style.payment}>
                        <p className={style.title}>PAYMENT</p>
                        <ul>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                        </ul>
                    </div>
                    <div className={style.baking}>
                        <p className={style.title}>BAKING AND STORAGE</p>
                        <ul>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                        </ul>
                    </div>
                    <div className={style.ordering}>
                        <p className={style.title}>ORDERING</p>
                        <ul>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                        </ul>
                    </div>
                    <div className={style.membership}>
                        <p className={style.title}>MEMBERSHIP CARD</p>
                        <ul>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                        </ul>
                    </div>
                    <div className={style.coupon}>
                        <p className={style.title}>PRESENT COUPON</p>
                        <ul>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                        </ul>
                    </div>
                    <div className={style.delivery}>
                        <p className={style.title}>DELIVERY QUATIONS</p>
                        <ul>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                            <li className={style.point}>Lorem Ipsum is simply dummy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Faq