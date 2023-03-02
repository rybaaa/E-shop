import React from 'react';
import {Header} from "./Header/Header";
import s from '../MainPage/MainPage.module.scss'

export const MainPage = () => {
    return (
        <div className={s.wrapper}>
            <Header/>
        </div>
    );
};

