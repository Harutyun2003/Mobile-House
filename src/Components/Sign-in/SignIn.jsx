import React from "react";
import style from "./SignIn.module.css"
import logo from "../../images/MH-LOGO 1.png";
import google from "../../images/Google.png";
import facebook from "../../images/Facebook.png";
import telegram from "../../images/Telegram.png";

function SignIn(){
    return(
        <div className={style.containerReg}>
            <div className={style.containerInputs}>
                <div className={style.imgCont}>
                    <img src={logo} alt=""/>
                </div>
                <form>
                    <input className={style.inputsRow} type="email" id="email" placeholder="email"/>
                    <input className={style.inputsRow} type="password" id="password" placeholder="password"/>
                    <div className={style.containerButton}>
                        <button type="submit" className={style.button}>SIGN IN</button>
                    </div>
                    <div className={style.checkboxCont}>
                        <label htmlFor="">
                            <input type="checkbox" id="checkbox"/>
                            <span>Keep me Signed In</span>
                        </label>
                    </div>
                </form>
                <div className={style.containerOther}>
                    <div className={style.borderX}></div>
                    <span className={style.textOther}>Other signing options</span>
                    <div className={style.borderX}></div>
                </div>
                <div className={style.footerImgContent}>
                    <img src={google} alt="facebookIcon" className={style.footerIcons}/>
                    <img src={facebook} alt="instagramIcon" className={style.footerIcons}/>
                    <img src={telegram} alt="telegramIcon" className={style.footerIcons}/>
                </div>
                <div className={style.containerhaveAcc}>
                    <div className={style.haveAcc}>
                        <span>New here?</span>
                        <a href="#">Sign-Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn