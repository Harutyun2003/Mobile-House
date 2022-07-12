import React from "react";
import style from "./Recommend.module.css"
import Chip from "../CHIP-HOVER/Chip";

function Recommend(){
    return(
        <div className={style.container}>
            <div className={style.title}>
                <p>WE RECOMMEND</p>
            </div>
            <div className={style.ChipCont}>
                <Chip />
                <Chip />
                <Chip />
            </div>
        </div>
    )
}
export default Recommend