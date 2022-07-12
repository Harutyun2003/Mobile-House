import { slide as Menu } from 'react-burger-menu'
import React from "react";

class MenuBurger extends React.Component {
    showSettings (event) {
        event.preventDefault();

    }

    render () {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">Phones</a>
                <a id="about" className="menu-item" href="/about">WATCHES</a>
                <a id="contact" className="menu-item" href="/contact">COMPUTERS</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}
export default MenuBurger