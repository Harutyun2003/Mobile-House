import React from "react";
import style from "./Likes.module.css"
import Header from "../Header/Header";
import Navigation from "../Navbar/Navigation";
import Recommend from "../Recommend/Recommend";
import Chip from "../CHIP-HOVER/Chip";
import Footer from "../Footer/Footer";

function Likes(){
    return(
        <div className={style.likes}>
            <Header />
            <div className={style.container}>
                <Navigation />
                <div className={style.favorites}>
                    <div className={style.title}>
                        <p>FAVORITES</p>
                    </div>
                    <div className={style.ChipCont}>
                        <Chip />
                        <Chip />
                        <Chip />
                    </div>
                </div>
                <Recommend />
            </div>
            <Footer />
        </div>
    )
}
export default Likes