import React from 'react'
import '../styles/NavBar.css';
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useTheme from "../theme";
import { CSSTransition } from "react-transition-group";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from 'react-icons/fa';

function NavBar() {
    const [theme, toggleTheme] = useTheme();
    const [visible, setVisible] = useState(true);
    const handleThemeChange = () => {
        toggleTheme();
        setVisible(false);
        setTimeout(() => setVisible(true), 0);
    };

    return (
        <div>
            <nav>
                <NavLink to="/">home</NavLink> <br />
                <NavLink to="/about">about</NavLink> <br />
                <NavLink to="/projects">projects</NavLink> <br />
                <NavLink to="/journal">journal</NavLink> <br />
                <NavLink to="/resume">resume</NavLink> <br />
                <CSSTransition
                in={visible}
                appear={true}
                timeout={500}
                classNames="fadeIn"
                >
                <a onClick={handleThemeChange} className="fadeIn">
                    {theme}
                </a>
                </CSSTransition><br />
                <NavLink to="https://www.linkedin.com/in/khanh-do-1027/" target="_blank" class="logo-button"><FaLinkedinIn />
                </NavLink><b>          </b>
                <NavLink to="https://github.com/kdo1027" target="_blank"><FaGithub />
                </NavLink><br/>
                {/* <NavLink to="https://www.instagram.com/kdothings/" target="_blank"><FaInstagram />
                </NavLink><br /> */}
            </nav>
        </div>
    )
}

export default NavBar