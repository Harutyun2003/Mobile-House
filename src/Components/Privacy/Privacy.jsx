import React from "react";
import style from "./Privacy.module.css"
import Header from "../Header/Header";
import Navigation from "../Navbar/Navigation";
import background from "../../images/lewis-nguyen-E8pRGD7h-5w-unsplash 1.png"
import Footer from "../Footer/Footer";

function Privacy() {
    return (
        <div className={style.privacy}>
            <Header/>
            <div className={style.imageCont}>
                <img src={background} className={style.background} alt=""/>
                <div className={style.navigationCont}>
                    <Navigation/>
                    <div className={style.titleCont}>
                        <p className={style.title}>
                            PRIVACY
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.textCont}>
                    <p className={style.underlineText}>
                        LOREM IPSUM...
                    </p>
                    <p className={style.text}>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee n the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled
                        it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining
                    </p>
                </div>
                <div className={style.pointsCont}>
                    <p className={style.title}>Lorem Ipsum</p>
                    <ul className={style.pointInside}>
                        <li className={style.point}>Lorem Ipsum is simply dummy</li>
                        <li className={style.point}>Lorem Ipsum is simply dummy</li>
                        <li className={style.point}>Lorem Ipsum is simply dummy</li>
                        <li className={style.point}>Lorem Ipsum is simply dummy</li>
                        <li className={style.point}>Lorem Ipsum is simply dummy</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Privacy