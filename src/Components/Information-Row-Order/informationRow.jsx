import React from "react";
import style from "./InformationRow.module.css"

function InformationRow(){
    return(
        <div className={style.container}>
            <div className={style.heading}>
                <p className={style.inputs}>Guaranty</p>
            </div>
            <div className={style.information}>
                <p className={style.inputs}>12 months</p>
            </div>
        </div>
    )
}
export default InformationRow