import React from "react";
import style from "./SignUp.module.css"
import google from "../../images/Google.png"
import facebook from "../../images/Facebook.png"
import telegram from "../../images/Telegram.png"
import logo from "../../images/MH-LOGO 1.png";

function SignUp(){
    return(
        <div className={style.signUp}>
            <div className={style.containerReg}>
                <div className={style.containerInputs}>
                    <div className={style.imgCont}>
                        <img src={logo} alt=""/>
                    </div>
                    <form>
                        <input className={style.inputsRow} type="text" id="name" placeholder="name"/>
                        <input className={style.inputsRow} type="email" id="email" placeholder="email"/>
                        <input className={style.inputsRow} type="password" id="password" placeholder="password"/>
                        <input className={style.inputsRow} type="password" id="password" placeholder="repeat password"/>
                        <div className={style.containerButton}>
                            <button type="submit" className={style.button}>SIGN UP</button>
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
                            <span>Already have an account?</span>
                            <a href="#">Sign-in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp