
import st from './Cocktail.module.css'
import bt from '../../Style/buttons.module.css'
import { Link } from 'react-router-dom'

const Cocktail = (props) => {
    const url = `/description/cocktail/${props.idDrink}`
    function Submit() {
        props.setCount(props.count + 1)
        props.setArrId((state) => {
            const existed = state.find(el => el.id === props.idDrink)
            if (existed) {
                return state.map(el => el.id === props.idDrink ? { ...el, count: el.count + 1 } : el);
            }
            return [...state, { id: props.idDrink, name: props.strDrink, count: 1 }];
        });
    }
    return (
        <div className={st.card} id={props.idDrink}>
            <Link to={url} className={st.buttons}>
                <div className={st.block}>
                    <h3>Сlick to read more</h3>
                </div>
                <img className={st.img} src={props.strDrinkThumb} alt="Drink" />
            </Link>
            <div className={st.button} >
                <button className={bt.fill}>{props.strDrink}</button>
            </div>
            <div className={st.button}>
                <button className={bt.pulse} onClick={() => {
                    Submit()
                }}>Buy</button>
            </div>
        </div>
    )
}
export default Cocktail
