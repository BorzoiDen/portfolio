import React from 'react';
import s from "./Skill.module.css";
import {SkillType} from "../../../App";



const Skill = (props: SkillType) => {
    return (
        <div className={s.skills__item}>
            <div className={s.skills__itemBody}>
                <img src={props.pictureSrc} alt={'pic'} className={s.skills__cardPicture}/>
                <div className={s.skills__cardTitle}>{props.title}</div>
                <div className={s.skills__cardDescr}>{props.description}</div>
            </div>
        </div>
    );
};

export default Skill;