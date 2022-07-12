import React from "react";
import style from "./Navbar.module.css"
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div className={style.navbar}>
          <div className={style.leftPart}>
              <button className={style.navbarItem}>
                  <Link to="/phones">
                      <a className={style.text} href="#">PHONE</a>
                  </Link>
              </button>
              <button className={style.navbarItem}>
                  <Link to="/phones">
                      <a className={style.text} href="#">WATCHES</a>
                  </Link>
              </button>
              <button className={style.navbarItem}>
                  <Link to="/phones">
                      <a className={style.text} href="#">COMPUTERS</a>
                  </Link>
              </button>
          </div>
           <div className={style.rightPart}>
               <button className={style.navbarItem}>
                   <Link to="/phones">
                       <a className={style.text} href="#">ACCESSORIES</a>
                   </Link>
               </button>
               <button className={style.navbarItem}>
                   <Link to="/phones">
                       <a className={style.text} href="#">EQUIPMENT</a>
                   </Link>
               </button>
               <button className={style.navbarItem}>
                   <Link to="/phones">
                       <a className={style.text} href="#">SALE</a>
                   </Link>
               </button>
           </div>
        </div>
    )
}

export default Navigation