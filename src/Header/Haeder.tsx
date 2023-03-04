import React from "react";
import s from './Header.module.css'


 const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <a href={'#'}>Home</a>
                <a href={'#skills'}>Skills</a>
                <a href={'#works'}>My works</a>
                <a href={'#contacts'}>Contacts</a>
            </nav>
        </header>
    );
};

export default Header;