import React from 'react';
import s from './Work.module.css'

import {WorkType} from "../../../App";

const Work = (props: WorkType) => {
    return (
        <div className={s.works__item}>
            <div className={s.works__itemBody}>
                <div className={s.item__preview}>
                    <img src={props.pictureSrc} alt={'pic'} className={s.works__cardPicture}/>
                    <div className={s.works__blackout}></div>
                    <button className={s.works__showMoreBtn}>OPEN</button>
                </div>
                <div className={s.works__cardTitle}>{props.title}</div>
                <div className={s.works__cardDescr}>{props.description}</div>
            </div>
        </div>
    );
};

export default Work;