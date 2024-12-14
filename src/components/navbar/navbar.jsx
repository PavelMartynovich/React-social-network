import React from 'react';
import s from './navbar.module.css';
import { Link } from 'react-router-dom';
import Dialogs from '../dialogs/dialogs';
import { NavLink } from 'react-router-dom';



function Nav() {
    return (
      <nav className={s.Nav}>
      <div className={s.item}>
        <NavLink 
          to='/profile' 
          className={({isActive}) => isActive ? s.active : s.item}  // Используем isActive
        >
          Profile
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink 
          to='/dialogs' 
          className={({ isActive }) => isActive ? s.active : s.item}  // Используем isActive
        >
          Messages
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink 
          to='/news' 
          className={({ isActive }) => isActive ? s.active : s.item}  // Используем isActive
        >
          News
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink 
          to='/music' 
          className={({ isActive }) => isActive ? s.active : s.item}  // Используем isActive
        >
          Music
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink 
          to='/setting' 
          className={({ isActive }) => isActive ? s.active : s.item}  // Используем isActive
        >
          Setting
        </NavLink>
      </div>
      
      <div className={s.item}>
        <NavLink 
          to='/users' 
          className={({ isActive }) => isActive ? s.active : s.item}  // Используем isActive
        >
          Users
        </NavLink>
      </div>
    </nav>
    );
  }

export default Nav;