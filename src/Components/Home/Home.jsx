import React from "react";
import style from "./Home.module.css"
import Slider from "../Slider/Slider";
import Header from "../Header/Header";
import Navigation from "../../../src/Components/Navbar/Navigation";
import Chip from "../CHIP-HOVER/Chip";
import Footer from "../Footer/Footer";

function Home(){
    return(
        <div className={style.home}>
            <Header />
            <div className={style.container}>
                <Slider />
                <Navigation />
                <div className={style.categoriesPhone}>
                    <div className={style.lineCategories}></div>
                    <a className={style.text} href="">SAMSUNG</a>
                    <div className={style.lineCategories}></div>
                    <a className={style.text} href="">APPLE</a>
                    <div className={style.lineCategories}></div>
                    <a className={style.text} href="">LG</a>
                    <div className={style.lineCategories}></div>
                    <a className={style.text} href="">XIAOMI</a>
                    <div className={style.lineCategories}></div>
                    <a className={style.text} href="">NOKIA</a>
                    <div className={style.lineCategories}></div>
                    <a className={style.text} href="">LENOVO</a>
                    <div className={style.lineCategories}></div>
                    <a className={style.text} href="">HUAWEI</a>
                    <div className={style.lineCategories}></div>
                    <a className={style.text} href="">MOTOROLA</a>
                    <div className={style.lineCategories}></div>
                    <a className={style.text} href="">SONY</a>
                    <div className={style.lineCategories}></div>
                </div>
                <div className={style.title}>
                    <p>NEW IN</p>
                </div>
                <div className={style.ChipCont}>
                    <Chip />
                    <Chip />
                    <Chip />
                </div>
                <div className={style.title}>
                    <p>PHONES</p>
                </div>
                <div className={style.ChipCont}>
                    <Chip />
                    <Chip />
                    <Chip />
                </div>
                <div className={style.title}>
                    <p>POPULAR</p>
                </div>
                <div className={style.ChipCont}>
                    <Chip />
                    <Chip />
                    <Chip />
                </div>
                <div className={style.title}>
                    <p>WE RECOMMEND</p>
                </div>
                <div className={style.ChipCont}>
                    <Chip />
                    <Chip />
                    <Chip />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home