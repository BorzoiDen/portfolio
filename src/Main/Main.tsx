import React from 'react';
import s from './Main.module.css'

import Hero from "../Sections/Hero/Hero";
import Skills from "../Sections/Skills/Skills";
import Call from "../Sections/Call/Call";
import Works from "../Sections/Works/Works";
import Form from "../Sections/Form/Form";
import {StateType} from "../App";

 type MainPropsType = {
    state: StateType
}


const Main = (props: MainPropsType) => {
    const {state} = props
    const {skills, works} = state
    return (
        <main className={s.main}>
            <Hero/>
            <Skills skills={skills}/>
            <Call/>
            <Works works={works}/>
            <Form/>
        </main>
    );
};

export default Main;