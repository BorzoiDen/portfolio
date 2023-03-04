import React from 'react';

import './App.css';
import Header from "./Header/Haeder";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";


import htm from './icons/HTM.png'
import css from './icons/css.png'
import js from './icons/javascript-2038874-1720087.webp'
import rct from './icons/React-icon.svg.png'
import ts from './icons/png-transparent-typescript-plain-logo-icon-thumbnail.png'

import socn from './icons/social.webp'
import todo from './icons/todo.jpg'







export type SkillType = {
    title: string,
    pictureSrc: string,
    description: string
}

export type WorkType = {
    title: string,
    pictureSrc: string,
    description: string
}

export type StateType = {
    skills: SkillType[],
    works: WorkType[]
}

const state: StateType = {
    skills: [
        {
            title: 'HTML',
            pictureSrc: htm,
            description: 'Hypertext markup language'
        },
        {
            title: 'CSS',
            pictureSrc: css,
            description: 'Cascading style sheets'
        },
        {
            title: 'JavaScript',
            pictureSrc: js,
            description: 'Programming language'
        },
        {
            title: 'React',
            pictureSrc: rct,
            description: 'JS library for creating user interfaces'
        },
        {
            title: 'TypeScript',
            pictureSrc: ts,
            description: 'Programming language that extends the capabilities of JavaScript'
        }
    ],
    works: [
        {
            title: 'Social Network',
            pictureSrc: socn,
            description: 'in progress'
        },
        {
            title: 'TODOLIST',
            pictureSrc: todo,
            description: 'in progress'
        }
    ]
}



function App() {
  return<>
      <Header/>
      <Main state={state}/>
      <Footer/>
  </>
}

export default App;
