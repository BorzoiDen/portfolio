import React from 'react';
import s from "./Skills.module.css";

import {SkillType} from "../../App";
import Skill from "./Skill/Skill";


type SkillsPropsType = {
    skills: SkillType[]
}

const Skills = (props: SkillsPropsType) => {
    const skills = props.skills.map(el => <Skill title={el.title} description={el.description} pictureSrc={el.pictureSrc}/>)

    return (
        <section className={s.skills} id={'skills'}>
            <div className={s.container}>
                <div className={s.skills__body}>
                    <h2 className={s.skills__title}>My skills</h2>
                    <div className={s.skills__items}>
                        {skills}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;