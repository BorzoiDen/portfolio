import React from 'react';
import s from "../../Main/Main.module.css";
import htm from "../../icons/HTM.png";
import css from "../../icons/css.png";
import js from "../../icons/javascript-2038874-1720087.webp";
import rct from "../../icons/React-icon.svg.png";
import ts from "../../icons/png-transparent-typescript-plain-logo-icon-thumbnail.png";

const Slills = () => {
    return (
        <section className={s.skills} id={'skills'}>
            <div className={s.container}>
                <div className={s.skills__body}>
                    <h2 className={s.skills__title}>My skills</h2>
                    <div className={s.skills__items}>
                        <div className={s.skills__item}>
                            <div className={s.skills__itemBody}>
                                <img src={htm} alt={'pic'} className={s.skills__cardPicture}/>
                                <div className={s.skills__cardTitle}>HTML</div>
                                <div className={s.skills__cardDescr}>lorem ipsum</div>
                            </div>
                        </div>
                        <div className={s.skills__item}>
                            <div className={s.skills__itemBody}>
                                <img src={css} alt={'pic'} className={s.skills__cardPicture}/>
                                <div className={s.skills__cardTitle}>CSS</div>
                                <div className={s.skills__cardDescr}>lorem ipsum</div>
                            </div>
                        </div>
                        <div className={s.skills__item}>
                            <div className={s.skills__itemBody}>
                                <img src={js} alt={'pic'} className={s.skills__cardPicture}/>
                                <div className={s.skills__cardTitle}>JavaScript</div>
                                <div className={s.skills__cardDescr}>lorem ipsum</div>
                            </div>
                        </div>
                        <div className={s.skills__item}>
                            <div className={s.skills__itemBody}>
                                <img src={rct} alt={'pic'} className={s.skills__cardPicture}/>
                                <div className={s.skills__cardTitle}>React</div>
                                <div className={s.skills__cardDescr}>lorem ipsum</div>
                            </div>
                        </div>
                        <div className={s.skills__item}>
                            <div className={s.skills__itemBody}>
                                <img src={ts} alt={'pic'} className={s.skills__cardPicture}/>
                                <div className={s.skills__cardTitle}>TypeScript</div>
                                <div className={s.skills__cardDescr}>lorem ipsum</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slills;