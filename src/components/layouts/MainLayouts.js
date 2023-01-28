import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../header/Header";

import './MainLayouts.styles.css'


export const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <div className={'main_block'}>
                <Outlet/>
            </div>
        </div>
    );
};