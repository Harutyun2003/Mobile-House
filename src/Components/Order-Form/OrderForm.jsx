import React from "react";
import style from "./OrderForm.module.css"

function OrderForm(){
    return(

        <div className={style.container}>
            <div className={style.inputRow}>
                <input type="text" placeholder="first name"/>
                <input type="text" placeholder="last name"/>
            </div>
            <div className={style.inputRow}>
                <input type="tel" placeholder={"phone"}/>
                <input type="email" placeholder="email"/>
            </div>
            <div className={style.lastRowInputs}>
                <input className={style.underInputsZip} type="text" placeholder="zip code"/>
                <input className={style.underInputsCity} type="text" placeholder="city"/>
                <input className={style.underInputsStr} type="text" placeholder="street"/>
                <input className={style.underInputsApart} type="text" placeholder="apartment"/>
            </div>
            <div className={style.buttonsCont}>
                <button>CARD</button>
                <button>CASH</button>
                <button>I-DRAM</button>
                <button>TEL-CEL</button>
            </div>

        </div>

    )
}
export default OrderForm