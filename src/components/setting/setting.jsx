import { useState } from "react";
import React from "react";
import s from './setting.module.css';
import { render } from "@testing-library/react";
     


export const Setting = () => {
 
  const [theme, setTheme] = useState(localStorage.getItem('data-theme') || 'light');

  const applyTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('data-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div>
      <button onClick={() => applyTheme('dark')}>Dark</button>
      <button onClick={() => applyTheme('light')}>Light</button>
    </div>
  );
};


