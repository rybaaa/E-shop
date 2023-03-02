import React from 'react';
import s from './FiltersField.module.scss'
import arrow from 'assets/arrow.svg'

export const FiltersField = () => {
    return (
        <div className={s.container}>
            <div className={s.selectField}>
                <div className={s.select}>
                    <span>For buyers</span>
                    <img src={arrow} alt={'arrow'}/>
                </div>
                <div className={s.select}>
                    <span>For sellers</span>
                    <img src={arrow} alt={'arrow'}/>
                </div>
                <span className={s.faq}>FAQ</span>
            </div>
            <input className={s.input} type={'text'}/>
        </div>
    );
};

