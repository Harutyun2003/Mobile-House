import React from "react";
import style from "./Chip.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import PhoneItem from "../../images/PhoneItem.png"


function Chip(){
    return(
        <div className={style.container}>
            <img src={PhoneItem} alt=""/>
            <FontAwesomeIcon icon={faHeart} className={style.heart}/>
            <div className={style.infoCont}>
                <p className={style.name}>Galaxy S21 FE 5G</p>
                <p className={style.oldPrice}>300.000$</p>
                <p className={style.newPrice}>200.000$</p>
                <button className={style.buttonBuy}>BUY</button>
            </div>
        </div>
    )
}
export default Chip