import st from './NavBar.module.css'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { RiBubbleChartLine } from "@react-icons/all-files/ri/RiBubbleChartLine";
import { ThemeContextConsumer } from '../../App';
import ThemeButton from './ThemeButton/ThemeButton';
import Order from '../Order/Order';

const NavBar = (props) => {
    const [textInp, setTextInp] = useState("");
    const history = useHistory();
    return (
        <ThemeContextConsumer>
            {(theme) => (
                <nav className={st.nav} style={{ backgroundColor: theme.background }}>
                    <div className={st.logo}>
                        <Link className={st.link} to="/home">Cocktail</Link>
                    </div>
                    <div className={st.linkSt}>
                        <Link className={st.link} to="/home">Home</Link>
                    </div>
                    <div className={st.linkSt}>
                        <Link className={st.link} to="/list/cocktails/main" >List of Cocktails</Link>
                    </div>
                    <div className={st.linkSt}>
                        <Link className={st.link} to="/about" onClick={() => {
                            alert("This page is under construction")
                        }} >About
                        </Link>
                    </div>
                    <div className={st.input}>
                        <input type="text" value={textInp} onChange={(e) => setTextInp(e.target.value)} placeholder="Search cocktail..." />
                    </div>
                    <div className={st.button} onClick={() => {
                            {props.setText(textInp)}
                            {history.push(`/list/cocktails/${textInp.toUpperCase()}`)}
                            {setTextInp("")}
                    }}>
                        <BiSearchAlt className={st.searchSt} size="23px" />
                    </div>
                    <div className={st.basket}>
                        <AiOutlineShoppingCart className={st.basketSt} size="23px"
                            onClick={() => props.count > 0 ? props.setOpen(true) : alert("First, choose a cocktail")}
                        />
                        <Order
                            setArrId={props.setArrId}
                            setCount={props.setCount}
                            isOpen={props.isOpen}
                            closeModalWindow={() => props.setOpen(false)}
                            arr={props.arr}
                        />
                    </div>
                    <div className={st.count}>
                        {
                            props.count > 0 ? <div>
                                <span >{props.count}</span>
                                <RiBubbleChartLine className={st.bubble} />
                            </div>
                                : ""
                        }
                    </div>
                    <ThemeButton themes={props.themes} theme={props.theme} settheme={props.settheme} />
                </nav>
            )}
        </ThemeContextConsumer>
    )
}
export default NavBar
