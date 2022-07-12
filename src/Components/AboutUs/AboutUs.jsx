import React from "react";
import style from "./AboutUs.module.css";
import Header from "../Header/Header";
import background from "../../images/hugo-agut-tugal-6cdIdu8KkLg-unsplash 1.png"
import Navigation from "../Navbar/Navigation";
import Footer from "../Footer/Footer";

function AboutUs(){
    return(
        <div className={style.aboutUs}>
            <Header />
            <div className={style.imageCont}>
                <img src={background} className={style.background} alt=""/>
                <div className={style.navigationCont}>
                    <Navigation />
                    <div className={style.titleCont}>
                        <p className={style.title}>
                            ABOUT US
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.titleCont}>
                    <p className={style.title}>
                        OUR STORY
                    </p>
                    <div className={style.textCont}>
                        <p className={style.underlineText}>
                          LOREM IPSUM...
                        </p>
                        <p className={style.text}>
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee n the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            ially unchanged. Simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee n
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AboutUs