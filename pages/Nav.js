import React from 'react';
import {  Link, NavLink } from 'react-router-dom';

const Nav = () => (
    <div className="nav">        
        <ul className="list">
            <li className="li">
                <NavLink exact to="/">首页</NavLink>
            </li>
            <li className="li">
                <NavLink to="/page">分页 Pages</NavLink>
            </li>
            <li className="li">
                <NavLink  to="/loading">Loading</NavLink>
            </li>
            <li className="li">
                <NavLink  to="/pop">弹窗</NavLink>
            </li>
            <li className="li">
                <NavLink  to="/tip">Tip</NavLink>
            </li>
            <li className="li">
                <NavLink  to="/calendar">calendar 日期</NavLink>
            </li>
            <li className="li">
                <NavLink  to="/hour">小时分钟</NavLink>
            </li>
            <li className="li">
                <NavLink  to="/checkbox">checkbox</NavLink>
            </li>
            <li className="li">
                <NavLink  to="/select">select</NavLink>
            </li>            
        </ul>
    </div>
);

export default Nav;