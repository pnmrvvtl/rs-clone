import React, { useContext, useEffect } from 'react';

import { ThemeContext } from '../../context/theme-context';
import { MenuItem, Typography } from '@mui/material';

export default function ThemeSwither() {
  const { theme, setTheme } = useContext(ThemeContext);
  localStorage.setItem('theme', JSON.stringify(theme));

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', JSON.stringify('theme'));
  };

  const darkConstants: Record<string, string> = {
    'button-color': 'rgba(87, 52, 166, 1)',
    'background-color': 'rgba(33, 37, 43, 1)',
    'button-color-hover': 'rgba(187, 134, 252, 1)',
    'font-color-main': 'rgba(255, 255, 255)',
    'font-color-head': 'rgba(35, 35, 35, 1)',
    'font-color-sub': 'rgba(196, 196, 196, 1)',
    'font-color-link': 'rgba(63, 66, 73, 1)',
    'font-color-inverted': 'rgba(255, 255, 255)',
    'background-super-light': 'rgba(255, 255, 255)',
    'background-light': 'rgba(0, 0, 0, 0.25)',
    'background-strip': 'rgb(50, 54, 59)',
    'background-dark': 'rgba(22, 60, 78)',
    'background-result': 'rgba(0, 0, 0, 0.25)',
    'filter-color': 'rgba(243, 242, 239)',
    'selected-filter-color': 'rgba(35, 35, 35, 1)',
    'footer-color': 'rgba(35, 35, 35, 1)',
    'carbs-color': '#90cb6e',
    'carbs-protein': '#638acc',
    'carbs-fat': '#facda',
    'sun-color': 'rgb(253, 217, 66)',
  };
  const lightConstans: Record<string, string> = {
    'background-color': 'rgba(255, 255, 255)',
    'button-color': 'rgba(5, 170, 88)',
    'button-color-hover': 'rgb(21, 138, 80)',
    'font-color-head': 'rgba(64, 64, 64)',
    'font-color-main': 'rgba(64, 64, 64)',
    'font-color-sub': 'rgba(149, 149, 149)',
    'font-color-link': 'rgba(5, 170, 88)',
    'font-color-inverted': 'rgba(255, 255, 255)',
    'background-super-light': 'rgba(255, 255, 255)',
    'background-light': 'rgba(243, 242, 239)',
    'background-strip': 'rgba(219, 232, 235)',
    'background-dark': 'rgba(22, 60, 78)',
    'background-result': 'rgb(236, 243, 243)',
    'filter-color': 'rgba(243, 242, 239)',
    'selected-filter-color': 'rgba(55, 102, 78)',
    'footer-color': '#37664E',
    'carbs-color': '#90cb6e',
    'carbs-protein': '#638acc',
    'carbs-fat': '#facda9',
    'sun-color': 'rgb(253, 217, 66)',
  };

  useEffect(() => {
    const root = document.documentElement;
    document.body.style.backgroundColor = theme === 'dark' ? 'rgba(33, 37, 43, 1)' : '#ffff';
    for (const key in darkConstants) {
      root?.style.setProperty(`--${key}`, theme === 'dark' ? darkConstants[key] : lightConstans[key]);
    }
  }, [theme]);

  return (
    <MenuItem
      onClick={() => {
        toggleTheme();
      }}
    >
      <Typography textAlign="center">{`${theme[0].toUpperCase()}${theme.slice(1)}`} theme</Typography>
    </MenuItem>
  );
}
