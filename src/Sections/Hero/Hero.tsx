import React from 'react';
import s from "./Hero.module.css";
import picture from "../../icons/1200px-Old_Cartoon_Man_Using_A_Big_Computer.svg.png";

const Hero = () => {
    return (
        <section className={s.hero__block} id={'home'}>
            <div className={s.container}>
                <div className={s.presentation}>
                    <div className={s.title}>
                        <span>Hi, there!!!</span>
                        <h1>My name is Den</h1>
                        <span>I'm a front-end developer</span>
                    </div>
                    <img className={s.photo} src={picture} alt={'photo'}/>
                </div>
            </div>

        </section>
    );
};

export default Hero;