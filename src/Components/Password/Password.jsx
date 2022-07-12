import React from "react";
import style from "./password.module.css"
import logo from "../../../src/images/MH-LOGO 1.png"
function Password(){
    return(
       <div className={style.page}>
           <div className={style.container}>
               <div className={style.imgCont}>
                   <img src={logo} alt=""/>
               </div>
               <form action="">
                   <div className={style.inputsCont}>
                       <input type="password" placeholder="new password"/>
                       <input type="password" placeholder="confirm password"/>
                   </div>
                   <div className={style.buttonCont}>
                       <input type={"submit"} value={"Sign in"} />
                   </div>
               </form>
           </div>
       </div>
    )
}
export default Password