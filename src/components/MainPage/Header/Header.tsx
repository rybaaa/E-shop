import React from 'react';
import s from './Header.module.scss'
import menu from 'assets/menu.svg'
import madeInKorea from 'assets/madeInKorea.svg'
import place from 'assets/place.svg'
import logo from 'assets/logo.svg'
import GB from 'assets/GB.svg'
import login from 'assets/login.svg'
import {FiltersField} from "./FiltersField/FiltersField";

export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.menu}>
                <img src={menu} alt={'menu'}/>
            </div>
            <div className={s.logoContainer}>
                <img src={madeInKorea} alt={'made in Korea'}/>
                <div>
                    <img src={place} alt={'logo'}/>
                    <img src={logo} alt={'logo'}/>
                </div>
            </div>
            <FiltersField/>
            <div className={s.sideContainer}>
                <div className={s.settings}>
                    <img className={s.flag} src={GB} alt={'flag'}/>
                    <div className={s.language}>
                        <span>|</span>
                        <span>English</span>
                        <span>|</span>
                        <span>$</span>
                    </div>
                </div>
                <div className={s.login}>
                    <img src={login} alt={'Log in'}/>
                    <span>Log in</span>
                </div>
            </div>
        </div>
    );
};

