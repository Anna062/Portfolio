import React from "react";
import image from '../assets/vlogger.png'
import '../styles/Header.css';

const Header = () => {
    return <nav>
        <div>
            <img src={image} alt="vlogger" />
            <h2 className="h2"> Fatim Dicko</h2>
        </div>
        <ul>
            <li><a href="https://github.com/Anna062" target="blank">GitHub</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li>Blog</li>
        </ul>
    </nav>
}

export default Header;