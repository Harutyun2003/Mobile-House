import React from "react";
import style from "./phone.module.css"
import Header from "../Header/Header";
import Navigation from "../Navbar/Navigation";
import Filter from "../Filter/Filter";
import PhoneChips from "../Phone-Chip/PhoneChips";
import Footer from "../Footer/Footer";

function Phones(){
    return(
        <div className={style.phones}>
            <Header />
            <div className={style.container}>
                <Navigation />
                <div className={style.insideCont}>
                    <div className={style.leftPart}>
                        <Filter />
                    </div>
                    <div className={style.rightPart}>
                        <PhoneChips />
                        <PhoneChips />
                        <PhoneChips />
                        <PhoneChips />
                        <PhoneChips />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Phones