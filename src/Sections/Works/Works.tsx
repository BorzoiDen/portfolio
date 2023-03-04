import React from 'react';
import s from "./Works.module.css";
import {WorkType} from "../../App";
import Work from "./Work/Work";

type WorksPropsType = {
    works: WorkType[]
}


const Works = (props : WorksPropsType) => {
    const works = props.works.map(el => <Work title={el.title} description={el.description} pictureSrc={el.pictureSrc}/>)

    return (
        <section className={s.works} id={'works'}>
            <div className={s.container}>
                <div className={s.works__body}>
                    <h2 className={s.works__title}>My works</h2>
                    <div className={s.works__items}>
                        {works}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;