import React from "react";
import style from "./Header.module.css"
import logo from "../../../src/images/MH-LOGO 1.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faGlobe, faUser} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className={style.container}>
            <div className={style.insideCont}>

                    <div className={style.imgCont}>
                        <Link to="/ ">
                        <img src={logo} alt=""/>
                        </Link>
                    </div>

                <div className={style.contSearch}>
                    <input type={"text"}  className={style.search} />
                    <span><FontAwesomeIcon icon={faSearch} pull={"left"} color={"black"} /></span>
                </div>
                <div className={style.rightPart}>
                    <div className={style.language}>
                        <FontAwesomeIcon icon={faGlobe} color={"white"} className={style.icons} fontSize={"24px"}/>
                        <p>ENG</p>
                    </div>
                    <FontAwesomeIcon icon={faUser} color={"white"} className={style.icons} />
                    <Link to="/order" className={style.icons} >
                        <FontAwesomeIcon icon={faCartShopping}  color={"white"}  />
                    </Link>
                    <FontAwesomeIcon icon={faBars} color={"white"} className={style.icons} />
                </div>
            </div>
        </div>
    )
}
export default Header