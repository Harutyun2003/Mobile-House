import React from "react";
import style from "./Footer.module.css"
import map from "../../images/MAP 1.png"
import facebook from "../../images/Facebook.png"
import telegram from "../../images/Telegram.png"
function Footer(){
    return(
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.mapCont}>
                    <img src={map} alt=""/>
                </div>
               <div className={style.menuCont}>
                   <div>ABOUT US</div>
                   <div>CONTACT US</div>
                   <div>PRIVACY POLICY</div>
                   <div>FAQ</div>
                   <div>SECTIONS</div>
                   <div className={style.socialCont}>
                       <span>SOCIAL</span>
                   </div>
               </div>
            </div>
        </div>
    )
}
export default Footer