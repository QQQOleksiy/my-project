import React from 'react';

import './Header.styles.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={'header'}>
            <div className={'buttonHome'}>
                <NavLink to={'/'}>Home</NavLink>
            </div>
            <div className={'buttons'}>
                <NavLink to={'todos'}>Todos</NavLink>
                <NavLink to={'albums'}>Albums</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
            </div>
        </div>
    );
};