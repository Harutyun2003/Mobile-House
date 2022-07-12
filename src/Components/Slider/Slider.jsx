// src/components/bootstrap-carousel.component.js
import React from "react";
import iphone from "../../../src/images/iphone13.jpg"
import samsung from "../../../src/images/Samsung.jpg"
import { Carousel } from 'react-bootstrap';
import style from "./slider.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Slider extends React.Component {
    render() {
        return (
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={iphone}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption children={style.Item}>
                                        <h1>Iphone 13 for you</h1>
                                       <button className={style.buttonsSlider}>
                                           BUY
                                       </button>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={iphone}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <button className={style.buttonsSlider}>
                                            BUY
                                        </button>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={iphone}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <button className={style.buttonsSlider}>
                                            BUY
                                        </button>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
        )
    };
}

export default Slider;