import st from './ThemeButton.module.css'
import { RiMoonClearLine } from "@react-icons/all-files/ri/RiMoonClearLine";
import { HiOutlineSun } from "@react-icons/all-files/hi/HiOutlineSun";
import { useState } from 'react';

const ThemeButton = (props) => {
    let [toggle, setToggle] = useState('light');
    return (
        <div>
            <div className={st.sun} onClick={() => {
                props.settheme(
                    props.theme === props.themes.light
                        ? props.themes.dark
                        : props.themes.light
                )
                setToggle(toggle === 'light' ? 'dark' : 'light')
            }}>
                {
                    toggle === 'light' ? (<HiOutlineSun size="23px" />) : (<RiMoonClearLine size="23px" />)
                }
            </div>
        </div >
    );
}
export default ThemeButton