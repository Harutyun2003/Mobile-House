import React from "react";
import style from "./MneuFAQ.module.css"

function MenuFAQ(){
    return(
        <div className={style.container}>
            <a className={style.itemMenu} href="">PAYMENT</a>
            <a className={style.itemMenu} href="">BAKING AND STORAGE</a>
            <a className={style.itemMenu} href="">ORDERING</a>
            <a className={style.itemMenu} href="">MEMBERSHIP CARD</a>
            <a className={style.itemMenu} href="">PRESENT COUPON</a>
            <a className={style.itemMenu} href="">DELIVERY QUESTIONS</a>
        </div>
    )
}
export default MenuFAQ