import React from 'react'

export const themes = {
    light: {
        background: '#e9e9e9',
        footer: '#e9e9e9',
        color: '#595959',
        colorPag :'#595959',
    },
    dark: {
        background: '#595959',
        footer: '#595959',
        color: '#fff',
        colorPag :'#fff',
    }
}
export const ThemeContext = React.createContext({
    theme: themes.light,
});