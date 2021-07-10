import { useParams } from "react-router-dom";
import { useCocktailById } from "../../Api/data-api";
import bt from '../../Style/buttons.module.css'
import st from './DescCocktail.module.css'

const DescCocktail = (props) => {
    const params = useParams('slug');
    const { cocktailID } = useCocktailById(parseInt(params.slug));
    let obj = {};
    if ( cocktailID.length>0) {
        obj = cocktailID[0];
    }
    return (
        <div>
            <div>
                <div key={obj.idDrink} className={st.Content}>
                    <div className={st.bg}>
                        <div className={st.imgSt}>
                            <img className={st.img} src={obj.strDrinkThumb} alt="Drink" />
                        </div>
                    </div>
                    <div>
                        <button className={bt.fill}>{obj.strDrink}</button>
                    </div>
                    <div>
                        <button className={bt.fill}>{obj.strInstructions}</button>
                    </div>
                    <div className={st.Buy}>
                        <button className={bt.pulse} onClick={() => {
                            props.setCount(props.count + 1)
                            props.setArrId(state => [...state, obj.strDrink])
                        }}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DescCocktail