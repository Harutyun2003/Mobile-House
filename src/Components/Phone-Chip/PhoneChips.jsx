import React from "react";
import style from "./PhoneChip.module.css"
import Chip from "../CHIP-HOVER/Chip";

function PhoneChips(){
    return(
        <div className={style.contaienr}>
            <Chip />
            <Chip />
        </div>
    )
}
export default PhoneChips
