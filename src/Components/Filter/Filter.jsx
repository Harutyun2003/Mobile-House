import React from "react";
import style from "./Filter.module.css"
import Horizontal from "./Range";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";

function Filter(){
    return(
        <div className={style.Filter}>
            <div className={style.title}>
                <p>PRICE</p>
            </div>
            <div className={style.horizonal}>
                <Horizontal />
            </div>
            <div className={style.title}>
                <p>CAMERA</p>
            </div>
            <div>
                <div className={style.rowButton}>
                    <button className={style.buttonFilter}>
                        <a href="#">12 MP</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">12 MP</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">12 MP</a>
                    </button>
                </div>
                <div className={style.rowButton}>
                    <button className={style.buttonFilter}>
                        <a href="#">12 MP</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">12 MP</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">12 MP</a>
                    </button>
                </div>
            </div>
            <div className={style.title}>
                <p>DISPLAY</p>
            </div>
            <div>
                <div className={style.rowButton}>
                    <button className={style.buttonFilter}>
                        <a href="#">6.1 inch</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">6.1 inch</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">6.1 inch</a>
                    </button>
                </div>
                <div className={style.rowButton}>
                    <button className={style.buttonFilter}>
                        <a href="#">6.1 inch</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">6.1 inch</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">6.1 inch</a>
                    </button>
                </div>
            </div>
            <div className={style.title}>
                <p>BRANDS</p>
            </div>
            <div>
                <div className={style.rowButton}>
                    <button className={style.buttonFilter}>
                        <a href="#">SAMSUNG</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">SAMSUNG</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">SAMSUNG</a>
                    </button>
                </div>
                <div className={style.rowButton}>
                    <button className={style.buttonFilter}>
                        <a href="#">SAMSUNG</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">SAMSUNG</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">SAMSUNG</a>
                    </button>
                </div>
            </div>
            <div className={style.title}>
                <p>RELEASE YEAR </p>
            </div>
            <div>
                <div className={style.rowButton}>
                    <button className={style.buttonFilter}>
                        <a href="#">2022</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">2022</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">2022</a>
                    </button>
                </div>
                <div className={style.rowButton}>
                    <button className={style.buttonFilter}>
                        <a href="#">2022</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">2022</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">2022</a>
                    </button>
                </div>
            </div>
            <div className={style.title}>
                <p>SIM CARDS</p>
            </div>
            <div className={style.rowButton}>
                <button className={style.buttonFilter}>
                    <a href="#">1 SIM</a>
                </button>
                <button className={style.buttonFilter}>
                    <a href="#">2 SIM</a>
                </button>
                <button className={style.buttonFilter}>
                    <a href="#">E SIM</a>
                </button>
            </div>
            <div className={style.title}>
                <p>COLOR</p>
            </div>
            <div className={style.colorCont}>
                <button className={style.colorItem} id={style.black} ></button>
                <button className={style.colorItem} id={style.white} ></button>
                <button className={style.colorItem} id={style.red} ></button>
                <button className={style.colorItem} id={style.viollet} ></button>
                <button className={style.colorItem} id={style.yellow} ></button>
                <button className={style.colorItem} id={style.green} ></button>
            </div>
            <div className={style.title}>
                <p>MEMORY</p>
            </div>
            <div>
                <div className={style.rowButton}>
                    <button className={style.buttonFilter}>
                        <a href="#">256gb</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">256gb</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">256gb</a>
                    </button>
                </div>
                <div className={style.rowButton}>
                    <button className={style.buttonFilter}>
                        <a href="#">256gb</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">256gb</a>
                    </button>
                    <button className={style.buttonFilter}>
                        <a href="#">256gb</a>
                    </button>
                </div>
            </div>
            <div>
                <button className={style.filter}>
                    <FontAwesomeIcon icon={faFilter} />
                    <p>REMOVE ALL FILTERS</p>
                </button>
            </div>
        </div>
    )
}
export default Filter