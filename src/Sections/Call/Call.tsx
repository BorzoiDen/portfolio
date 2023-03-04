import React from 'react';
import s from "./Call.module.css";

const Call = () => {
    return (
        <section className={s.call} >
            <div className={s.container}>
                <div className={s.contact__body}>
                    <h2 className={s.contact__title}>
                        Contact with me</h2>
                    <a href={'#contacts'}><button className={s.contact__button}>contact</button></a>

                </div>
            </div>
        </section>
    );
};

export default Call;